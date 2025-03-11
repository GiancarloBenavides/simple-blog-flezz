<script>
let { class: classname, children } = $props();
</script>

<div class={['group', classname]}>
  {@render children()}
</div>
