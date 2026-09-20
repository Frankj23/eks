// Thin fetch wrapper shared by every client-side data module (properties,
// engineering projects, …) plus the shared photo upload endpoint.

export async function request(path, options) {
  const res = await fetch(path, options);
  const data = await res.json().catch(() => null);
  if (!res.ok) throw new Error(data?.error || `Request failed (${res.status})`);
  return data;
}

/** folder: "properties" | "engineering" — keeps R2 objects organised by entity. */
export function uploadPhoto(file, folder = 'properties') {
  const form = new FormData();
  form.append('file', file);
  form.append('folder', folder);
  return request('/api/admin/upload', { method: 'POST', body: form });
}
