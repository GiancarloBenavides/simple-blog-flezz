import { render } from 'svelte/server';
import { getSlug } from '$lib/utils/slug';

const partials = Object.entries(import.meta.glob('/content/partials/*.md', { eager: true }))
  .map(([path, module]) => ({
    id: getSlug(path),
    meta: module.metadata,
    resolve: module.default,
  }))
  .filter((x) => x.meta && !x.meta.draft);

export function loadPartials() {
  return partials
    .sort((a, b) => a.id.localeCompare(b.id))
    .map((p) => ({
      id: p.id,
      title: p.meta.title,
      content: render(p.resolve).body,
    }));
}
