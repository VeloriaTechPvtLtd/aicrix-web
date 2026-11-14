const LEGACY_SLUGS = new Set([
  'bharat-pakistan-mahila-asia-cup-2026-prediction',
  'bharat-thailand-mahila-asia-cup-kaun-jeetega',
  'dubai-pitch-report-womens-asia-cup-2026',
  'how-ai-predicts-cricket',
  'india-vs-thailand-women-fantasy-xi-asia-cup-2026',
  'india-vs-thailand-women-prediction-asia-cup-2026',
  'match-preview-what-you-get',
  'understanding-venue-reports',
  'welcome-to-aicrix-blog'
]);
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
function dateString(value) {
  const text = value instanceof Date ? value.toISOString().slice(0, 10) : value;
  if (typeof text !== 'string' || !ISO_DATE.test(text)) return undefined;
  const date = new Date(text + 'T00:00:00Z');
  return !Number.isNaN(date.valueOf()) && date.toISOString().slice(0, 10) === text ? text : undefined;
}
function validatePost(data, slug) {
  const errors = [];
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) errors.push('invalid slug');
  for (const key of ['title', 'excerpt']) if (typeof data[key] !== 'string' || !data[key].trim()) errors.push(`missing ${key}`);
  if ((data.status !== 'draft' || data.date) && !dateString(data.date)) errors.push('invalid publication date');
  if (data.updated && (!dateString(data.updated) || (dateString(data.date) && dateString(data.updated) < dateString(data.date)))) errors.push('invalid updated date');
  if (!LEGACY_SLUGS.has(slug) && !['draft', 'published'].includes(data.status)) errors.push('explicit status required');
  if (data.status && !['draft', 'published'].includes(data.status)) errors.push('invalid status');
  if (data.image && (typeof data.image !== 'string' || !/^\/(?!\/)/.test(data.image))) errors.push('image must be a local path');
  if (!LEGACY_SLUGS.has(slug) && data.image && (typeof data.imageAlt !== 'string' || !data.imageAlt.trim())) errors.push('image alt required');
  return errors;
}
function isPublished(data, slug, today = new Date().toISOString().slice(0, 10)) {
  return validatePost(data, slug).length === 0 && (data.status === 'published' || (!data.status && LEGACY_SLUGS.has(slug))) && dateString(data.date) <= today;
}
module.exports = { dateString, validatePost, isPublished, LEGACY_SLUGS };
