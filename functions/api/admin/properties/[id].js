// PATCH /api/admin/properties/:id — update any subset of fields.
// DELETE /api/admin/properties/:id — delete the row and its R2 photos.
// Reachable only behind the Cloudflare Access policy on /api/admin/* — see README.
import { errorResponse, json, rowToProperty, slugify, LISTING_TYPES, STATUSES } from '../../../_lib/properties.js';

const COLUMNS = {
  title: (v) => v,
  slug: (v) => slugify(v),
  listing_type: (v) => v,
  property_type: (v) => v,
  price: (v) => Number(v),
  price_period: (v) => v,
  currency: (v) => v,
  location: (v) => v,
  bedrooms: (v) => (v === null ? null : Number(v)),
  bathrooms: (v) => (v === null ? null : Number(v)),
  size_sqm: (v) => (v === null ? null : Number(v)),
  description: (v) => v,
  features: (v) => JSON.stringify(v ?? []),
  images: (v) => JSON.stringify(v ?? []),
  status: (v) => v,
};

export async function onRequestPatch({ request, env, params }) {
  const body = await request.json().catch(() => null);
  if (!body) return errorResponse('Invalid JSON body');

  if (body.listing_type !== undefined && !LISTING_TYPES.includes(body.listing_type)) {
    return errorResponse(`listing_type must be one of: ${LISTING_TYPES.join(', ')}`);
  }
  if (body.status !== undefined && !STATUSES.includes(body.status)) {
    return errorResponse(`status must be one of: ${STATUSES.join(', ')}`);
  }

  const sets = [];
  const values = [];
  for (const [field, coerce] of Object.entries(COLUMNS)) {
    if (body[field] !== undefined) {
      sets.push(`${field} = ?`);
      values.push(coerce(body[field]));
    }
  }
  if (sets.length === 0) return errorResponse('No fields to update');

  values.push(params.id);

  try {
    const result = await env.DB.prepare(`UPDATE properties SET ${sets.join(', ')} WHERE id = ?`)
      .bind(...values)
      .run();
    if (result.meta.changes === 0) return errorResponse('Property not found', 404);
  } catch (err) {
    if (String(err.message).includes('UNIQUE')) {
      return errorResponse('That slug is already in use by another property', 409);
    }
    throw err;
  }

  const row = await env.DB.prepare('SELECT * FROM properties WHERE id = ?').bind(params.id).first();
  return json(rowToProperty(row, env));
}

export async function onRequestDelete({ env, params }) {
  const row = await env.DB.prepare('SELECT images FROM properties WHERE id = ?')
    .bind(params.id)
    .first();
  if (!row) return errorResponse('Property not found', 404);

  await env.DB.prepare('DELETE FROM properties WHERE id = ?').bind(params.id).run();

  const keys = JSON.parse(row.images || '[]');
  await Promise.allSettled(keys.map((key) => env.PHOTOS_BUCKET.delete(key)));

  return json({ ok: true });
}
