import { loadPartials } from '$lib/loaders/partial.js';
import { loadWriters } from '$lib/loaders/writer.js';
import { listPages } from '$lib/loaders/page.js';
import { loadPosts } from '$lib/loaders/post.js';
export const ssr = false;
export async function load({ url }) {
  return {
    host: url.host,
    partials: loadPartials(),
    writers: loadWriters(),
    pages: listPages(),
    posts: loadPosts(),
  };
}
