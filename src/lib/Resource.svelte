<script>
import config from '/src/config';
import { format } from 'date-fns';
import DownloadIcon from './icons/DownloadIcon.svelte';
import ViewIcon from './icons/ViewIcon.svelte';

let {
  type = '',
  category,
  title,
  date,
  author,
  image,
  href = undefined,
  path = undefined,
} = $props();
</script>

<div class={'card ' + type}>
  <img src={'/img/mini/' + image} alt={category + ' ' + title} />
  <div>
    <time datetime={date}>{format(new Date(date), config.archive.date, config.locale)}</time>
    <h3>{title}</h3>
    <p>{category}</p>
    <small>{author}</small>
    <span>
      {#if path}
        <a
          title="Visualizar"
          href={path}
          target="_blank"
          aria-label="Visualizar el recurso en una nueva pestaña"
        >
          <ViewIcon />
        </a>
      {/if}
      {#if href}
        <a title="Descargar" {href} aria-label="Obtener el recurso"> <DownloadIcon /> </a>
      {/if}
    </span>
  </div>
</div>
