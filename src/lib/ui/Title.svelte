<script>
let { children, subtitle } = $props();
</script>

<header>
  <h1>{@render children()}</h1>
  {#if subtitle}<span>{subtitle}</span>{/if}
</header>
