<script>
const gap = 20;
/** @type {{ title: string }} */
let { title, src, width, height = Math.ceil(0.5625 * width) } = $props();
const sources = src.split(', ');
const num = sources.length;
</script>

<p class={'iframe w' + Math.ceil(width / 100)}>
  {#each sources as item (item.id)}
    <iframe
      class="responsive"
      {title}
      src={item}
      width={Number(width) / num + gap + 'px'}
      height={height + 'px'}
      frameborder="0"
      scrolling="no"
      allowfullscreen
    ></iframe>
  {/each}
</p>
