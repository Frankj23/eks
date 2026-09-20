// Shared helpers for the property Functions — row shaping, validation and
// small response utilities. Kept as plain JS to match the rest of the repo
// (no TypeScript elsewhere in the project).

export const LISTING_TYPES = ['rent', 'sale'];
export const STATUSES = ['draft', 'published'];

const REQUIRED_FIELDS = [
  'title',
  'listing_type',
  'property_type',
  'price',
  'location',
  'description',
];

export function json(data, init = {}) {
  return new Response(JSON.stringify(data), {
    ...init,
    headers: { 'content-type': 'application/json', ...(init.headers || {}) },
  });
}

export function errorResponse(message, status = 400) {
  return json({ error: message }, { status });
}

/** DB row (features/images stored as JSON text) -> plain object for the API. */
export function rowToProperty(row, env) {
  const base = env?.PUBLIC_R2_URL ? env.PUBLIC_R2_URL.replace(/\/$/, '') : '';
  const imageKeys = safeParseArray(row.images);
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    listingType: row.listing_type,
    propertyType: row.property_type,
    price: row.price,
    pricePeriod: row.price_period,
    currency: row.currency,
    location: row.location,
    bedrooms: row.bedrooms,
    bathrooms: row.bathrooms,
    sizeSqm: row.size_sqm,
    description: row.description,
    features: safeParseArray(row.features),
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

/** Validates a create/update payload. Returns an error string, or null if valid. */
export function validateProperty(body) {
  for (const field of REQUIRED_FIELDS) {
    if (body[field] === undefined || body[field] === null || body[field] === '') {
      return `Missing required field: ${field}`;
    }
  }
  if (!LISTING_TYPES.includes(body.listing_type)) {
    return `listing_type must be one of: ${LISTING_TYPES.join(', ')}`;
  }
  if (body.status !== undefined && !STATUSES.includes(body.status)) {
    return `status must be one of: ${STATUSES.join(', ')}`;
  }
  if (Number.isNaN(Number(body.price))) {
    return 'price must be a number';
  }
  return null;
}
