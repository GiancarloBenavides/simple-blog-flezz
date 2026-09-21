<script>
import MainIcon from '$lib/icons/MainIcon.svelte';

let { title } = $props();
</script>

<header class="layout">
  <figure class="logo">
    <a href="/" {title}><MainIcon /></a>
  </figure>
</header>
