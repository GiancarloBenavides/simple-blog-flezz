import { loadPosts } from '$lib/loaders/post';

export async function load() {
  const posts = loadPosts({
    pinned: true,
    content: true,
  });
  const post = posts[0];
  return {
    post,
  };
}
