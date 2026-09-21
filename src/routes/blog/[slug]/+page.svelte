<script>
import config from '/src/config';
import Seo from '$lib/Seo.svelte';
import Post from '$lib/Post.svelte';
import Collection from '$lib/Collection.svelte';

let { data } = $props();
</script>

<Seo
  title={`${data.post.title} — ${config.title}`}
  description={data.post.description}
  og={{ title: data.post.title }}
/>

<section class="blog">
  <Post post={data.post} />
</section>

<Collection subtitle="Últimos artículos publicados en el blog"></Collection>
