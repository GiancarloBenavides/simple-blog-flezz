import { render } from 'svelte/server';
import { getSlug } from '$lib/utils/slug';

const pages = Object.entries(import.meta.glob('/content/pages/*.md', { eager: true }))
  .map(([path, module]) => ({
    id: getSlug(path),
    meta: module.metadata,
    resolve: module.default,
  }))
  .filter((x) => x.meta && !x.meta.draft);

export function listPages() {
  return pages
    .sort((a, b) => a.id.localeCompare(b.id))
    .map((x) => ({
      id: x.id,
      title: x.meta.title,
      icon: x.meta.icon
        ? x.meta.icon + '.svelte'
        : x.meta.title.trim().split(' ')[0] + 'Icon.svelte',
    }));
}

export function loadPage(id) {
  const page = pages.find((x) => x.id === id);
  if (!page) return;
  const content = render(page.resolve).body;
  return {
    ...page.meta,
    id: page.id,
    description: page.meta.description || createDescription(content),
    content,
  };
}

function createDescription(html) {
  return html.split('. ')[0].replace(/<.+?>/g, '');
}
