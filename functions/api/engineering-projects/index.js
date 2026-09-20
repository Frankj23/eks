// GET /api/engineering-projects[?domain=civil|mechanical|electrical|computer][&limit=N]
// Public — published projects only, most recent first.
import { json, errorResponse, rowToProject, DOMAINS } from '../../_lib/engineeringProjects.js';

export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const domain = url.searchParams.get('domain');
  const limitParam = url.searchParams.get('limit');

  if (domain && !DOMAINS.includes(domain)) {
    return errorResponse(`domain must be one of: ${DOMAINS.join(', ')}`);
  }

  let limit = null;
  if (limitParam !== null) {
    limit = Number(limitParam);
    if (!Number.isInteger(limit) || limit < 1 || limit > 100) {
      return errorResponse('limit must be an integer between 1 and 100');
    }
  }

  let sql = 'SELECT * FROM engineering_projects WHERE status = ?';
  const binds = ['published'];
  if (domain) {
    sql += ' AND domain = ?';
    binds.push(domain);
  }
  sql += ' ORDER BY created_at DESC';
  if (limit) {
    sql += ' LIMIT ?';
    binds.push(limit);
  }

  const { results } = await env.DB.prepare(sql)
    .bind(...binds)
    .all();
  return json(results.map((row) => rowToProject(row, env)));
}
