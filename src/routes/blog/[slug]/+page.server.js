import { error } from '@sveltejs/kit';
import { loadPost } from '$lib/loaders/post';

export async function load({ params }) {
  const post = loadPost(params.slug);

  if (!post) {
    error(404, { message: 'Not Found' });
  }

  return {
    post,
  };
}
