// GET /api/properties[?type=rent|sale] — public, published listings only.
import { json, errorResponse, rowToProperty, LISTING_TYPES } from '../../_lib/properties.js';

export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const type = url.searchParams.get('type');

  if (type && !LISTING_TYPES.includes(type)) {
    return errorResponse(`type must be one of: ${LISTING_TYPES.join(', ')}`);
  }

  const query = type
    ? env.DB.prepare(
        'SELECT * FROM properties WHERE status = ? AND listing_type = ? ORDER BY created_at DESC'
      ).bind('published', type)
    : env.DB.prepare('SELECT * FROM properties WHERE status = ? ORDER BY created_at DESC').bind(
        'published'
      );

  const { results } = await query.all();
  return json(results.map((row) => rowToProperty(row, env)));
}
