<script>
import { page } from '$app/state';
import Title from '$lib/ui/Title.svelte';
import Group from '$lib/ui/Group.svelte';
import Button from '$lib/ui/Button.svelte';
</script>

<svelte:head>
  <title>Error {page.status}</title>
</svelte:head>

<section class="error">
  <article>
    <Title>Error {page.status}:</Title>
    <div>
      {#if page.status === 404}
        <h2>Pagina no encontrada.</h2>
        {#if page.params.slug}<p><b>Slug:</b> {page.params.slug}</p>{/if}
        {#if page.params.id}<p><b>id:</b> {page.params.id}</p>{/if}
        <p>No existe el recurso solicitado; este pudo ser movido del lugar o borrado</p>
      {:else}
        <p>{page.error.message}.</p>
      {/if}
    </div>
    <footer>
      <Group>
        <Button href="/">Regresar</Button>
      </Group>
    </footer>
  </article>
</section>
