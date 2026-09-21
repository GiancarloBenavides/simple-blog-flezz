<script>
import Head from '$lib/ui/Head.svelte';
import Metadata from './Metadata.svelte';
import Cover from '$lib/ui/Cover.svelte';
import Action from './ui/Action.svelte';
import Content from '$lib/Content.svelte';

let { post } = $props();
</script>

{#key post.id}
  <article>
    <Head title={post.title}>
      {#if post.date || post.author || post.tags}
        <Metadata
          id={post.id}
          pinned={post.pinned}
          date={post.date}
          authors={post.authors}
          tags={post.tags}
        ></Metadata>
      {/if}
      <Action {post} />
      {#if post.image}
        <Cover
          src={'/img/cover/' + post.image}
          srcset={'/img/cover/' + post.image + ' 2x'}
          alt={post.title}
          time="3"
        />
      {/if}
      {#if post.subtitle}<h2>{post.subtitle}</h2>{/if}
    </Head>
    <Content>{@html post.content}</Content>
  </article>
{/key}
