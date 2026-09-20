// Shared helpers for the engineering-projects Functions — mirrors
// functions/_lib/properties.js, kept separate since the fields differ enough
// that a shared abstraction would just be indirection.

export { json, errorResponse } from './http.js';

export const DOMAINS = ['civil', 'mechanical', 'electrical', 'computer'];
export const STATUSES = ['draft', 'published'];

const REQUIRED_FIELDS = ['title', 'domain', 'scope', 'description'];

export function rowToProject(row, env) {
  const base = env?.PUBLIC_R2_URL ? env.PUBLIC_R2_URL.replace(/\/$/, '') : '';
  const imageKeys = safeParseArray(row.images);
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    domain: row.domain,
    location: row.location,
    client: row.client,
    completedOn: row.completed_on,
    scope: row.scope,
    description: row.description,
    capabilities: safeParseArray(row.capabilities),
    images: imageKeys.map((key) => (base ? `${base}/${key}` : key)),
    imageKeys,
    status: row.status,
    createdAt: row.created_at,
  };
}

function safeParseArray(text) {
  try {
    const parsed = JSON.parse(text ?? '[]');
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function slugify(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function validateProject(body) {
  for (const field of REQUIRED_FIELDS) {
    if (body[field] === undefined || body[field] === null || body[field] === '') {
      return `Missing required field: ${field}`;
    }
  }
  if (!DOMAINS.includes(body.domain)) {
    return `domain must be one of: ${DOMAINS.join(', ')}`;
  }
  if (body.status !== undefined && !STATUSES.includes(body.status)) {
    return `status must be one of: ${STATUSES.join(', ')}`;
  }
  return null;
}
