<script>
import config from '/src/config';
import Seo from '$lib/Seo.svelte';
import Article from '$lib/Article.svelte';
import Collection from '$lib/Collection.svelte';
import Content from '$lib/Content.svelte';

let { data } = $props();
</script>

<Seo
  title={`${data.page.title} — ${config.title}`}
  description={data.page.description}
  og={{ title: data.page.title }}
/>

<section>
  <Article type="Page" title={data.page.title}>
    <Content>{@html data.page.content}</Content>
  </Article>
</section>

<Collection subtitle="Últimos artículos publicados en el blog" />
