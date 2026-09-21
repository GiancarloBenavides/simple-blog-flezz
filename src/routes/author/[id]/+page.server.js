import { error } from '@sveltejs/kit';

export async function load({ params, parent }) {
  const data = await parent();
  const writer = data.writers.filter((x) => x.id === params.id)[0];
  const posts = data.posts.filter((x) => x.authorIds.indexOf(params.id) !== -1);

  if (!posts.length) {
    error(404, { message: 'Not found' });
  }

  return {
    writer,
    posts,
  };
}
