import { error } from '@sveltejs/kit';
import { loadPage } from '$lib/loaders/page';

export async function load({ params }) {
  const page = loadPage(params.slug);
  if (!page) {
    error(404, { message: 'Not Found' });
  }
  return {
    page,
  };
}
