<script>
import '$lib/styles/css/style.css';
import config from '/src/config';
import Loader from '$lib/ui/Loader.svelte';
import Header from '$lib/Header.svelte';
import Footer from '$lib/Footer.svelte';

let { data, children } = $props();
</script>

<svelte:head>
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="alternate" type="application/rss+xml" title="RSS" href="/feed.xml" />
</svelte:head>

<Loader />

<div class="container">
  <Header title={config.title} />
  <main>{@render children()}</main>
  <Footer pages={data.pages} />
</div>
