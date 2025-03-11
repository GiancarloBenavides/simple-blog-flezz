<script>
import ReadingTimeIcon from '$lib/icons/ReadingTimeIcon.svelte';

let {
  src,
  srcset = undefined,
  width = undefined,
  height = undefined,
  alt = '',
  time = 1,
} = $props();
</script>

<span class="cover">
  <img {src} {srcset} {width} {height} {alt} />
  {#if time}
    <div><ReadingTimeIcon /><span>{time}'</span></div>
  {/if}
</span>
