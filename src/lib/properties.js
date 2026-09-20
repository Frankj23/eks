// Client-side helpers shared by the listings grid, the property detail page
// and the admin page — thin wrappers around the /api/properties Pages
// Functions, plus the formatting rules those pages all need.
import { request, uploadPhoto as uploadPhotoTo } from './api.js';

export const PROPERTY_TYPE_LABELS = {
  house: 'House',
  apartment: 'Apartment',
  studio: 'Studio',
  land: 'Land',
  commercial: 'Commercial',
};

export function propertyTypeLabel(type) {
  return PROPERTY_TYPE_LABELS[type] || type;
}

export function listingTypeLabel(type) {
  return type === 'rent' ? 'For Rent' : 'For Sale';
}

export function formatPrice(property) {
  const amount = new Intl.NumberFormat('en-US').format(property.price);
  const period = property.pricePeriod ? ` / ${property.pricePeriod}` : '';
  return `${property.currency} ${amount}${period}`;
}

export function formatSpecs(property) {
  const parts = [];
  if (property.bedrooms != null) parts.push(`${property.bedrooms} bed`);
  if (property.bathrooms != null) parts.push(`${property.bathrooms} bath`);
  if (property.sizeSqm != null) parts.push(`${property.sizeSqm} m²`);
  return parts.join(' · ');
}

export function fetchPublishedProperties(type) {
  const qs = type ? `?type=${encodeURIComponent(type)}` : '';
  return request(`/api/properties${qs}`);
}

export function fetchPropertyBySlug(slug) {
  return request(`/api/properties/${encodeURIComponent(slug)}`);
}

// Admin — every call below only succeeds behind the Cloudflare Access policy
// on /api/admin/*.
export function fetchAllProperties() {
  return request('/api/admin/properties');
}

export function createProperty(payload) {
  return request('/api/admin/properties', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(payload),
  });
}

export function updateProperty(id, payload) {
  return request(`/api/admin/properties/${encodeURIComponent(id)}`, {
    method: 'PATCH',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(payload),
  });
}

export function deleteProperty(id) {
  return request(`/api/admin/properties/${encodeURIComponent(id)}`, { method: 'DELETE' });
}

export function uploadPhoto(file) {
  return uploadPhotoTo(file, 'properties');
}
