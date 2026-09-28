// GET /api/academic-posts[?department=internships|report-writing|tutoring]
// Public — published posts only, most recent first.
import { json, errorResponse, rowToPost, DEPARTMENTS } from '../../_lib/academicPosts.js';

export async function onRequestGet({ request, env }) {
  const department = new URL(request.url).searchParams.get('department');

  if (department && !DEPARTMENTS.includes(department)) {
    return errorResponse(`department must be one of: ${DEPARTMENTS.join(', ')}`);
  }

  let sql = 'SELECT * FROM academic_posts WHERE status = ?';
  const binds = ['published'];
  if (department) {
    sql += ' AND department = ?';
    binds.push(department);
  }
  sql += ' ORDER BY created_at DESC';

  const { results } = await env.DB.prepare(sql)
    .bind(...binds)
    .all();
  return json(results.map((row) => rowToPost(row, env)));
}
