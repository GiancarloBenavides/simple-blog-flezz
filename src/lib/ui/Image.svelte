<script>
let {
  src,
  srcset = undefined,
  width = undefined,
  height = undefined,
  alt = '',
  caption = undefined,
  number = undefined,
} = $props();
</script>

<figure>
  <img {src} {srcset} {width} {height} {alt} />
  {#if caption}
    <figcaption><span>Imagen {number}. </span> {caption}</figcaption>
  {/if}
</figure>