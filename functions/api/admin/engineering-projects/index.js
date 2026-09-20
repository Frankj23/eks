// GET /api/admin/engineering-projects — all projects, including drafts.
// POST /api/admin/engineering-projects — create a project.
// Reachable only behind the Cloudflare Access policy on /api/admin/* — see README.
import {
  errorResponse,
  json,
  rowToProject,
  slugify,
  validateProject,
} from '../../../_lib/engineeringProjects.js';

export async function onRequestGet({ env }) {
  const { results } = await env.DB.prepare(
    'SELECT * FROM engineering_projects ORDER BY created_at DESC'
  ).all();
  return json(results.map((row) => rowToProject(row, env)));
}

export async function onRequestPost({ request, env }) {
  const body = await request.json().catch(() => null);
  if (!body) return errorResponse('Invalid JSON body');

  const validationError = validateProject(body);
  if (validationError) return errorResponse(validationError);

  const id = crypto.randomUUID();
  const slug = slugify(body.slug || body.title);
  if (!slug) return errorResponse('Could not derive a slug from the title');

  try {
    await env.DB.prepare(
      `INSERT INTO engineering_projects
        (id, slug, title, domain, location, client, completed_on, scope, description,
         capabilities, images, status)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    )
      .bind(
        id,
        slug,
        body.title,
        body.domain,
        body.location ?? null,
        body.client ?? null,
        body.completed_on ?? null,
        body.scope,
        body.description,
        JSON.stringify(body.capabilities ?? []),
        JSON.stringify(body.images ?? []),
        body.status || 'draft'
      )
      .run();
  } catch (err) {
    if (String(err.message).includes('UNIQUE')) {
      return errorResponse(`A project with slug "${slug}" already exists`, 409);
    }
    throw err;
  }

  const row = await env.DB.prepare('SELECT * FROM engineering_projects WHERE id = ?')
    .bind(id)
    .first();
  return json(rowToProject(row, env), { status: 201 });
}
