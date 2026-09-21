import slugify from 'slugify';

export function createSlug(name) {
  if (typeof name !== 'string') return name;
  return slugify(name, {
    lower: true,
  });
}

export function getSlug(path) {
  return path.match(/([^/]+)(?=\.\w+$)/)[1];
}
