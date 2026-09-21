<script>
import config from '/src/config';
import Seo from '$lib/Seo.svelte';
import Article from '$lib/Article.svelte';
import Collection from '$lib/Collection.svelte';
import MailIcon from '$lib/icons/MailIcon.svelte';
import ProfileIcon from '$lib/icons/ProfileIcon.svelte';
import OrcidIcon from '$lib/icons/OrcidIcon.svelte';
import InstagramIcon from '$lib/icons/InstagramIcon.svelte';
import XIcon from '$lib/icons/XIcon.svelte';

let { data } = $props();
</script>

<Seo
  title={`${data.writer.name} — ${config.title} ${config.archive.title}`}
  description={config.slogan}
  og={{ title: `${data.author} ${config.archive.title}` }}
/>

{#snippet socialNetworks()}
  {#if data.writer.mail}
    <a class="animated" href={data.writer.mail}>
      <MailIcon />
      <span class="text">Correo</span>
    </a>
  {/if}
  {#if data.writer.profile}
    <a class="animated" href={data.writer.profile}>
      <ProfileIcon />
      <span class="text">Profile</span>
    </a>
  {/if}
  {#if data.writer.pid}
    <a class="animated" href={data.writer.pid}>
      <OrcidIcon />
      <span class="text">Orcid</span>
    </a>
  {/if}
  {#if data.writer.ig}
    <a class="animated" href={data.writer.ig}>
      <InstagramIcon />
      <span class="text">Instagram</span>
    </a>
  {/if}
  {#if data.writer.x}
    <a class="animated" href={data.writer.x}>
      <XIcon />
      <span class="text">X</span>
    </a>
  {/if}
{/snippet}

<section class="author">
  <Article
    type="author"
    title={data.writer.name}
    subtitle={data.writer.subtitle}
    photo={data.writer.image}
    footer={socialNetworks}
  >
    {@html data.writer.description}
  </Article>
</section>

<Collection posts={data.posts} subtitle={config.archive.subtitles.author + ' ' + data.writer.name}
></Collection>
