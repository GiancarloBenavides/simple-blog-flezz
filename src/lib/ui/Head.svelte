<script>
let { title, subtitle, children } = $props();
</script>

<header>
  <h1>{title}</h1>
  {#if subtitle}<span>{subtitle}</span>{/if}
  <div>{@render children()}</div>
</header>
