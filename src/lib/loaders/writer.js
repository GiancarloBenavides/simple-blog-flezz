import { render } from 'svelte/server';
import { getSlug } from '$lib/utils/slug';

const writers = Object.entries(import.meta.glob('/content/writers/*.md', { eager: true }))
  .map(([path, module]) => ({
    id: getSlug(path),
    meta: module.metadata,
    resolve: module.default,
  }))
  .filter((x) => x.meta && !x.meta.draft);

export function loadWriters() {
  return writers
    .sort((a, b) => a.id.localeCompare(b.id))
    .map((w) => ({
      id: w.id,
      name: w.meta.name,
      skills: w.meta.skills?.split(', '),
      subtitle: w.meta.skills?.split(', ').join(' | '),
      image: '/img/avatar/photo-' + w.id + '.png',
      mail: w.meta.mail ? 'mailto:' + w.meta.mail : undefined,
      profile: w.meta.profile,
      pid: w.meta.pid,
      ig: w.meta.ig ? 'https://www.instagram.com/' + w.meta.ig : undefined,
      x: w.meta.x ? 'https://twitter.com/' + w.meta.x : undefined,
      description: render(w.resolve).body,
    }));
}
