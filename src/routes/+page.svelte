<script>
import config from '/src/config';
import Seo from '$lib/Seo.svelte';
import Article from '$lib/Article.svelte';

let { data } = $props();
</script>

<Seo
  title={`${config.title} — ${config.slogan}`}
  description={config.description}
  og={{ title: config.slogan }}
/>

<section>
  {#each data.partials as partial (partial.id)}
    <Article type="render text-xl" title={partial.title}>
      {@html partial.content}
    </Article>
  {/each}
</section>
