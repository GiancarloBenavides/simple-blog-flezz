<script>
import config from '/src/config';
import Seo from '$lib/Seo.svelte';
import Collection from '$lib/Collection.svelte';
</script>

<Seo
  title={`${config.title} ${config.archive.title}`}
  description={config.slogan}
  og={{ title: config.archive.title }}
/>

<Collection limit={false} />
