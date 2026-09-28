// Client-side helpers for the academic posts shown on each academic service
// page, and for the admin page — mirrors engineering-projects.js.
import { request, uploadPhoto as uploadPhotoTo } from './api.js';

export const DEPARTMENT_LABELS = {
  internships: 'Internship Programs',
  'report-writing': 'Project & Report Writing Support',
  tutoring: 'Academic Tutoring',
};

export function departmentLabel(department) {
  return DEPARTMENT_LABELS[department] || department;
}

export function fetchPublishedPosts({ department } = {}) {
  const qs = department ? `?department=${encodeURIComponent(department)}` : '';
  return request(`/api/academic-posts${qs}`);
}

// Admin — every call below only succeeds behind the Cloudflare Access policy
// on /api/admin/*.
export function fetchAllPosts() {
  return request('/api/admin/academic-posts');
}

export function createPost(payload) {
  return request('/api/admin/academic-posts', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(payload),
  });
}

export function updatePost(id, payload) {
  return request(`/api/admin/academic-posts/${encodeURIComponent(id)}`, {
    method: 'PATCH',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(payload),
  });
}

export function deletePost(id) {
  return request(`/api/admin/academic-posts/${encodeURIComponent(id)}`, { method: 'DELETE' });
}

export function uploadPhoto(file) {
  return uploadPhotoTo(file, 'academic');
}
