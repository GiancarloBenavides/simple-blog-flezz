<script>
import config from '/src/config';
import HomeIcon from '$lib/icons/HomeIcon.svelte';
import LmsIcon from './icons/LmsIcon.svelte';
import ResourcesIcon from '$lib/icons/ResourcesIcon.svelte';
import BlogIcon from './icons/BlogIcon.svelte';
import RssIcon from '$lib/icons/RssIcon.svelte';

let { pages } = $props();
</script>

<footer class="layout">
  <nav>
    <ul>
      <li><a href="/" aria-label="Página principal"><HomeIcon /><span>Home</span></a></li>
      {#each pages as item (item.id)}
        <li>
          <a href="/{item.id}">
            {#if item.icon == 'LmsIcon'}
              <LmsIcon />{:else}<ResourcesIcon />
            {/if}
            <span>{item.title}</span>
          </a>
        </li>
      {/each}
      <li><a href="/blog"><BlogIcon /><span>Blog</span></a></li>
      <li><a href="/feed.xml"><RssIcon /><span>Feed</span></a></li>
    </ul>
  </nav>
  <div class="copyright">
    <p>
      &copy; {new Date().getFullYear()}
      {config.title}<span>|</span>
      Construido con <a href="https://svelte.dev/">Svelte 5</a> por
      <a href="https://giancarlobenavides.github.io/">Giancarlo Ortiz</a>
    </p>
  </div>
</footer>
