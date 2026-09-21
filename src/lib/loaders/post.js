import { render } from 'svelte/server';
import { createSlug, getSlug } from '$lib/utils/slug';

const posts = Object.entries(import.meta.glob('/content/posts/*.md', { eager: true }))
  .map(([path, module]) => ({
    id: getSlug(path),
    meta: module.metadata,
    resolve: module.default,
  }))
  .filter((x) => x.meta && !x.meta.draft);

export function loadPosts(props) {
  const opt = {
    pinned: true,
    description: false,
    content: false,
    ...props,
  };
  return posts
    .filter((x) => x.meta.date)
    .sort(
      (a, b) =>
        (opt.pinned ? !a.meta.pinned - !b.meta.pinned : 0) ||
        new Date(b.meta.date) - new Date(a.meta.date),
    )
    .map((p) => {
      const content = opt.content || opt.description ? render(p.resolve).body : null;
      return {
        id: p.id,
        title: p.meta.title,
        date: p.meta.date,
        authors: parseWriters(p.meta.author),
        authorIds: parseWriterIds(p.meta.author),
        tags: parseTags(p.meta.tags),
        pinned: p.meta.pinned,
        type: parseType(p.meta.type),
        description: opt.description ? p.meta.description || createDescription(content) : undefined,
        content: opt.content ? content : undefined,
      };
    });
}

export function loadPost(slug) {
  const post = posts.find((x) => x.id === slug);
  if (!post) return;

  const content = render(post.resolve).body;
  const words = content.replace(/<\/?[^>]+(>|$)/g, '').split(/\s+/);
  const wordCount = words.filter((word) => word.length > 0).length;
  return {
    ...post.meta,
    id: post.id,
    tags: parseTags(post.meta.tags),
    authors: parseWriters(post.meta.author),
    description: post.meta.description || createDescription(content),
    words: wordCount,
    content,
  };
}

function parseTags(tags) {
  return tags?.split(',').map((x) => [createSlug(x), x.trim()]);
}

function parseWriters(writers) {
  return writers?.split(',').map((x) => [createSlug(x), x.trim()]);
}

function parseWriterIds(writers) {
  return writers?.split(',').map(createSlug);
}

function parseType(type) {
  if (type) {
    return type.trim().split(' ')[0].toLowerCase();
  }
  return undefined;
}

function createDescription(html) {
  return html.split('. ')[0].replace(/<.+?>/g, '');
}
