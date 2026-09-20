// Client-side helpers for the engineering-projects gallery, detail page,
// the recent-projects carousel and the admin page — mirrors properties.js.
import { request, uploadPhoto as uploadPhotoTo } from './api.js';

export const DOMAIN_LABELS = {
  civil: 'Civil & Infrastructure',
  mechanical: 'Mechanical & Manufacturing',
  electrical: 'Electrical Power & Renewables',
  computer: 'Computer Engineering & IoT',
};

export function domainLabel(domain) {
  return DOMAIN_LABELS[domain] || domain;
}

export function fetchPublishedProjects({ domain, limit } = {}) {
  const params = new URLSearchParams();
  if (domain) params.set('domain', domain);
  if (limit) params.set('limit', String(limit));
  const qs = params.toString();
  return request(`/api/engineering-projects${qs ? `?${qs}` : ''}`);
}

export function fetchProjectBySlug(slug) {
  return request(`/api/engineering-projects/${encodeURIComponent(slug)}`);
}

// Admin — every call below only succeeds behind the Cloudflare Access policy
// on /api/admin/*.
export function fetchAllProjects() {
  return request('/api/admin/engineering-projects');
}

export function createProject(payload) {
  return request('/api/admin/engineering-projects', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(payload),
  });
}

export function updateProject(id, payload) {
  return request(`/api/admin/engineering-projects/${encodeURIComponent(id)}`, {
    method: 'PATCH',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(payload),
  });
}

export function deleteProject(id) {
  return request(`/api/admin/engineering-projects/${encodeURIComponent(id)}`, { method: 'DELETE' });
}

export function uploadPhoto(file) {
  return uploadPhotoTo(file, 'engineering');
}
