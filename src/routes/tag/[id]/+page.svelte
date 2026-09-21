<script>
import config from '/src/config';
import Seo from '$lib/Seo.svelte';
import Collection from '$lib/Collection.svelte';

let { data } = $props();
</script>

<Seo
  title={`${data.tag} — ${config.title} ${config.archive.title}`}
  description={config.slogan}
  og={{ title: `${data.tag} ${config.archive.title}` }}
/>

<Collection posts={data.posts} subtitle={config.archive.subtitles.tag + ' ' + data.tag}
></Collection>
