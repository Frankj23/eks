// GET /api/properties/:slug — public, only returns published properties.
import { errorResponse, json, rowToProperty } from '../../_lib/properties.js';

export async function onRequestGet({ params, env }) {
  const row = await env.DB.prepare('SELECT * FROM properties WHERE slug = ? AND status = ?')
    .bind(params.slug, 'published')
    .first();

  if (!row) return errorResponse('Property not found', 404);
  return json(rowToProperty(row, env));
}
