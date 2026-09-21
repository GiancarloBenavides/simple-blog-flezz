<script>
let {
  caption = undefined,
  number = undefined,
  children,
} = $props();
</script>

<figure>
  {@render children()}
  {#if caption}
    <figcaption><span>Imagen {number}. </span> {caption}.</figcaption>
  {/if}
</figure>
