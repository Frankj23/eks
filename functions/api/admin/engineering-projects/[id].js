// PATCH /api/admin/engineering-projects/:id — update any subset of fields.
// DELETE /api/admin/engineering-projects/:id — delete the row and its R2 photos.
// Reachable only behind the Cloudflare Access policy on /api/admin/* — see README.
import {
  errorResponse,
  json,
  rowToProject,
  slugify,
  DOMAINS,
  STATUSES,
} from '../../../_lib/engineeringProjects.js';

const COLUMNS = {
  title: (v) => v,
  slug: (v) => slugify(v),
  domain: (v) => v,
  location: (v) => v,
  client: (v) => v,
  completed_on: (v) => v,
  scope: (v) => v,
  description: (v) => v,
  capabilities: (v) => JSON.stringify(v ?? []),
  images: (v) => JSON.stringify(v ?? []),
  status: (v) => v,
};

export async function onRequestPatch({ request, env, params }) {
  const body = await request.json().catch(() => null);
  if (!body) return errorResponse('Invalid JSON body');

  if (body.domain !== undefined && !DOMAINS.includes(body.domain)) {
    return errorResponse(`domain must be one of: ${DOMAINS.join(', ')}`);
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
    const result = await env.DB.prepare(
      `UPDATE engineering_projects SET ${sets.join(', ')} WHERE id = ?`
    )
      .bind(...values)
      .run();
    if (result.meta.changes === 0) return errorResponse('Project not found', 404);
  } catch (err) {
    if (String(err.message).includes('UNIQUE')) {
      return errorResponse('That slug is already in use by another project', 409);
    }
    throw err;
  }

  const row = await env.DB.prepare('SELECT * FROM engineering_projects WHERE id = ?')
    .bind(params.id)
    .first();
  return json(rowToProject(row, env));
}

export async function onRequestDelete({ env, params }) {
  const row = await env.DB.prepare('SELECT images FROM engineering_projects WHERE id = ?')
    .bind(params.id)
    .first();
  if (!row) return errorResponse('Project not found', 404);

  await env.DB.prepare('DELETE FROM engineering_projects WHERE id = ?').bind(params.id).run();

  const keys = JSON.parse(row.images || '[]');
  await Promise.allSettled(keys.map((key) => env.PHOTOS_BUCKET.delete(key)));

  return json({ ok: true });
}
