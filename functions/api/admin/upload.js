// POST /api/admin/upload — multipart/form-data with a "file" field and an
// optional "folder" field ("properties" or "engineering", default "properties").
// Stores the image in R2 and returns its object key (saved on the record's
// `images` array, not the full URL, so the public base URL can change later).
// Reachable only behind the Cloudflare Access policy on /api/admin/* — see README.
import { errorResponse, json } from '../../_lib/http.js';

const MAX_BYTES = 8 * 1024 * 1024;
const FOLDERS = ['properties', 'engineering'];

export async function onRequestPost({ request, env }) {
  const form = await request.formData().catch(() => null);
  const file = form?.get('file');
  const folder = form?.get('folder') || 'properties';

  if (!file || typeof file === 'string') return errorResponse('Missing file');
  if (!file.type?.startsWith('image/')) return errorResponse('File must be an image');
  if (file.size > MAX_BYTES) return errorResponse('Image must be 8MB or smaller');
  if (!FOLDERS.includes(folder)) return errorResponse(`folder must be one of: ${FOLDERS.join(', ')}`);

  const extension = (file.name?.split('.').pop() || 'jpg').toLowerCase().replace(/[^a-z0-9]/g, '');
  const key = `${folder}/${crypto.randomUUID()}.${extension}`;

  await env.PHOTOS_BUCKET.put(key, await file.arrayBuffer(), {
    httpMetadata: { contentType: file.type },
  });

  return json({ key }, { status: 201 });
}
