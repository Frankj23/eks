// GET /api/engineering-projects/:slug — public, published projects only.
import { errorResponse, json, rowToProject } from '../../_lib/engineeringProjects.js';

export async function onRequestGet({ params, env }) {
  const row = await env.DB.prepare(
    'SELECT * FROM engineering_projects WHERE slug = ? AND status = ?'
  )
    .bind(params.slug, 'published')
    .first();

  if (!row) return errorResponse('Project not found', 404);
  return json(rowToProject(row, env));
}
