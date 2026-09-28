// PATCH /api/admin/academic-posts/:id — update any subset of fields.
// DELETE /api/admin/academic-posts/:id — delete the row and its R2 photos.
// Reachable only behind the Cloudflare Access policy on /api/admin/* — see README.
import {
  errorResponse,
  json,
  rowToPost,
  DEPARTMENTS,
  STATUSES,
} from '../../../_lib/academicPosts.js';

const COLUMNS = {
  department: (v) => v,
  title: (v) => v,
  description: (v) => v,
  images: (v) => JSON.stringify(v ?? []),
  status: (v) => v,
};

export async function onRequestPatch({ request, env, params }) {
  const body = await request.json().catch(() => null);
  if (!body) return errorResponse('Invalid JSON body');

  if (body.department !== undefined && !DEPARTMENTS.includes(body.department)) {
    return errorResponse(`department must be one of: ${DEPARTMENTS.join(', ')}`);
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

  const result = await env.DB.prepare(`UPDATE academic_posts SET ${sets.join(', ')} WHERE id = ?`)
    .bind(...values)
    .run();
  if (result.meta.changes === 0) return errorResponse('Post not found', 404);

  const row = await env.DB.prepare('SELECT * FROM academic_posts WHERE id = ?')
    .bind(params.id)
    .first();
  return json(rowToPost(row, env));
}

export async function onRequestDelete({ env, params }) {
  const row = await env.DB.prepare('SELECT images FROM academic_posts WHERE id = ?')
    .bind(params.id)
    .first();
  if (!row) return errorResponse('Post not found', 404);

  await env.DB.prepare('DELETE FROM academic_posts WHERE id = ?').bind(params.id).run();

  const keys = JSON.parse(row.images || '[]');
  await Promise.allSettled(keys.map((key) => env.PHOTOS_BUCKET.delete(key)));

  return json({ ok: true });
}
