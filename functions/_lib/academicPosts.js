// Shared helpers for the academic-posts Functions. "department" values match
// the academic service slugs in src/data/divisions.js.
export { json, errorResponse } from './http.js';

export const DEPARTMENTS = ['internships', 'report-writing', 'tutoring'];
export const STATUSES = ['draft', 'published'];

const REQUIRED_FIELDS = ['title', 'department', 'description'];

export function rowToPost(row, env) {
  const base = env?.PUBLIC_R2_URL ? env.PUBLIC_R2_URL.replace(/\/$/, '') : '';
  let imageKeys = [];
  try {
    const parsed = JSON.parse(row.images ?? '[]');
    if (Array.isArray(parsed)) imageKeys = parsed;
  } catch {
    imageKeys = [];
  }
  return {
    id: row.id,
    department: row.department,
    title: row.title,
    description: row.description,
    images: imageKeys.map((key) => (base ? `${base}/${key}` : key)),
    imageKeys,
    status: row.status,
    createdAt: row.created_at,
  };
}

export function validatePost(body) {
  for (const field of REQUIRED_FIELDS) {
    if (body[field] === undefined || body[field] === null || body[field] === '') {
      return `Missing required field: ${field}`;
    }
  }
  if (!DEPARTMENTS.includes(body.department)) {
    return `department must be one of: ${DEPARTMENTS.join(', ')}`;
  }
  if (body.status !== undefined && !STATUSES.includes(body.status)) {
    return `status must be one of: ${STATUSES.join(', ')}`;
  }
  return null;
}
