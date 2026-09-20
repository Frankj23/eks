// GET /api/admin/properties — all properties, including drafts.
// POST /api/admin/properties — create a property.
// Reachable only behind the Cloudflare Access policy on /api/admin/* — see README.
import { errorResponse, json, rowToProperty, slugify, validateProperty } from '../../../_lib/properties.js';

export async function onRequestGet({ env }) {
  const { results } = await env.DB.prepare(
    'SELECT * FROM properties ORDER BY created_at DESC'
  ).all();
  return json(results.map((row) => rowToProperty(row, env)));
}

export async function onRequestPost({ request, env }) {
  const body = await request.json().catch(() => null);
  if (!body) return errorResponse('Invalid JSON body');

  const validationError = validateProperty(body);
  if (validationError) return errorResponse(validationError);

  const id = crypto.randomUUID();
  const slug = slugify(body.slug || body.title);
  if (!slug) return errorResponse('Could not derive a slug from the title');

  try {
    await env.DB.prepare(
      `INSERT INTO properties
        (id, slug, title, listing_type, property_type, price, price_period, currency,
         location, bedrooms, bathrooms, size_sqm, description, features, images, status)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    )
      .bind(
        id,
        slug,
        body.title,
        body.listing_type,
        body.property_type,
        Number(body.price),
        body.price_period ?? null,
        body.currency || 'FCFA',
        body.location,
        body.bedrooms ?? null,
        body.bathrooms ?? null,
        body.size_sqm ?? null,
        body.description,
        JSON.stringify(body.features ?? []),
        JSON.stringify(body.images ?? []),
        body.status || 'draft'
      )
      .run();
  } catch (err) {
    if (String(err.message).includes('UNIQUE')) {
      return errorResponse(`A property with slug "${slug}" already exists`, 409);
    }
    throw err;
  }

  const row = await env.DB.prepare('SELECT * FROM properties WHERE id = ?').bind(id).first();
  return json(rowToProperty(row, env), { status: 201 });
}
