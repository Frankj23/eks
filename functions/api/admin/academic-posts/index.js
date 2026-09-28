// GET /api/admin/academic-posts — all posts, including drafts.
// POST /api/admin/academic-posts — create a post.
// Reachable only behind the Cloudflare Access policy on /api/admin/* — see README.
import { errorResponse, json, rowToPost, validatePost } from '../../../_lib/academicPosts.js';

export async function onRequestGet({ env }) {
  const { results } = await env.DB.prepare(
    'SELECT * FROM academic_posts ORDER BY created_at DESC'
  ).all();
  return json(results.map((row) => rowToPost(row, env)));
}

export async function onRequestPost({ request, env }) {
  const body = await request.json().catch(() => null);
  if (!body) return errorResponse('Invalid JSON body');

  const validationError = validatePost(body);
  if (validationError) return errorResponse(validationError);

  const id = crypto.randomUUID();

  await env.DB.prepare(
    `INSERT INTO academic_posts (id, department, title, description, images, status)
     VALUES (?, ?, ?, ?, ?, ?)`
  )
    .bind(
      id,
      body.department,
      body.title,
      body.description,
      JSON.stringify(body.images ?? []),
      body.status || 'draft'
    )
    .run();

  const row = await env.DB.prepare('SELECT * FROM academic_posts WHERE id = ?').bind(id).first();
  return json(rowToPost(row, env), { status: 201 });
}
