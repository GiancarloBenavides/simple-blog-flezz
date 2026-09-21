<script>
import config from '/src/config';
import { format } from 'date-fns';
import { page } from '$app/state';
import Title from '$lib/ui/Title.svelte';
import Group from '$lib/ui/Group.svelte';
import Button from '$lib/ui/Button.svelte';
import PinIcon from '$lib/icons/PinIcon.svelte';
import AlertIcon from './icons/AlertIcon.svelte';
import InfoIcon from './icons/InfoIcon.svelte';
import PostIcon from '$lib/icons/PostIcon.svelte';

let { limit = 5, posts = page.data.posts.slice(0, limit || Infinity), subtitle } = $props();
</script>

<section class="collection">
  <article>
    <Title {subtitle}>{config.archive.title}</Title>
    <div>
      <ul class="text-metadata space-y-2 sm:space-y-0">
        {#each posts as item (item.id)}
          <li>
            <a
              class="block py-1 sm:flex sm:flex-row sm:items-start sm:gap-4"
              href="/blog/{item.id}"
            >
              <span class="block">
                {#if item.pinned}<span class="float-left mr-1 flex"><PinIcon /></span>
                {:else if item.type == 'alerta'}<span class="float-left mr-1 flex"
                    ><AlertIcon /></span
                  >
                {:else if item.type == 'información'}<span class="float-left mr-1 flex"
                    ><InfoIcon /></span
                  >
                {:else}<span class="float-left mr-1 flex"><PostIcon /></span>{/if}
                <span class="underline sm:flex-1">{item.title}</span>
              </span>
              <span class="mt-3 min-w-4 flex-1 border-b border-dashed pt-0.5 text-current/20"
              ></span>
              <time datetime={item.date}
                >{format(new Date(item.date), config.archive.date, config.locale)}</time
              >
            </a>
          </li>
        {/each}
      </ul>
    </div>
    {#if limit}
      <Group>
        <Button href="/archive">Todas &rarr;</Button>
      </Group>
    {/if}
  </article>
</section>
