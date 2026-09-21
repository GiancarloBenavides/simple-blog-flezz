<script>
import { addHours, format } from 'date-fns';
import config from '/src/config';
import CalendarIcon from '$lib/icons/CalendarIcon.svelte';
import PinIcon from '$lib/icons/PinIcon.svelte';
import PenToolIcon from '$lib/icons/PenToolIcon.svelte';
import BookmarkIcon from '$lib/icons/BookmarkIcon.svelte';

let { id, pinned = false, date, authors, tags = undefined } = $props();
</script>

<div class="metadata">
  {#if date}
    <a href="/blog/{id}">
      {#if pinned}<PinIcon />{:else}<CalendarIcon />{/if}
      <time datetime={date}>{format(addHours(date, 5), config.metadata.date, config.locale)}</time>
    </a>
  {/if}
  {#if authors}
    <div>
      <PenToolIcon />
      {#each authors as author, i}
        {#if i},{/if}
        <a href="/author/{author[0]}">{author[1]}</a>
      {/each}
    </div>
  {/if}
  {#if tags}
    <div>
      <BookmarkIcon />
      {#each tags as tag, i}
        {#if i},{/if}
        <a href="/tag/{tag[0]}">{tag[1]}</a>
      {/each}
    </div>
  {/if}
</div>
