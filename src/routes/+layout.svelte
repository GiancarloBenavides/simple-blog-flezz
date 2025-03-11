<script>
import '$lib/styles/css/style.css';
import config from '/src/config';
import Loader from '$lib/ui/Loader.svelte';
import Header from '$lib/Header.svelte';
import HomeIcon from '$lib/icons/HomeIcon.svelte';
import RssIcon from '$lib/icons/RssIcon.svelte';
import PostIcon from '$lib/icons/PostIcon.svelte';
import ResourcesIcon from '$lib/icons/ResourcesIcon.svelte';

let { data, children } = $props();
</script>

<svelte:head>
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="alternate" type="application/rss+xml" title="RSS" href="/feed.xml" />
</svelte:head>

<Loader />

<div class="container">
  <Header title={config.siteTitle} />
  <main>
    {@render children()}
  </main>

  <footer class="major">
    <nav>
      <ul>
        <li><a href="/"><HomeIcon /><span>Home</span> </a></li>
        {#each data.pages as item (item.id)}
          <li><a href="/{item.id}"><ResourcesIcon /><span>{item.title}</span></a></li>
        {/each}
        <li><a href="/blog"><PostIcon /><span>Blog</span></a></li>
        <li><a href="/feed.xml"><RssIcon /><span>Feed</span></a></li>
      </ul>
    </nav>
    <div class="copyright">
      <p>
        &copy; {new Date().getFullYear()}
        {config.siteTitle}<span>|</span>
        Construido con <a href="https://svelte.dev/">Svelte</a> por
        <a href="https://giancarlobenavides.github.io/">Giancarlo Ortiz</a>
      </p>
    </div>
  </footer>
</div>
