// Tiny response helpers shared by every Function.
export function json(data, init = {}) {
  return new Response(JSON.stringify(data), {
    ...init,
    headers: { 'content-type': 'application/json', ...(init.headers || {}) },
  });
}

export function errorResponse(message, status = 400) {
  return json({ error: message }, { status });
}
