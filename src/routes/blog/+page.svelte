<script>
import config from '/src/config';
import Seo from '$lib/Seo.svelte';
import Post from '$lib/Post.svelte';
import Collection from '$lib/Collection.svelte';

let { data } = $props();
</script>

<Seo
  title={`${config.title} — ${config.slogan}`}
  description={data.post.description}
  og={{ title: config.slogan }}
/>

<section class="blog">
  <Post post={data.post} />
</section>

<Collection subtitle={config.archive.subtitles.blog}></Collection>
