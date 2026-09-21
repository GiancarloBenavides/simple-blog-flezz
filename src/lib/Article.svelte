<script>
import Title from '$lib/ui/Title.svelte';
import Photo from './ui/Photo.svelte';

let {
  type,
  title,
  subtitle = undefined,
  photo = undefined,
  footer = undefined,
  children,
} = $props();
</script>

<article>
  {#if photo}
    <Photo src={photo} />
  {/if}
  <Title {subtitle}>{title}</Title>
  <div class={type}>
    {@render children()}
  </div>
  {#if footer}
    <footer>
      {@render footer()}
    </footer>
  {/if}
</article>
