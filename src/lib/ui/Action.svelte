<script>
import config from '/src/config';
import ShareIcon from '$lib/icons/ShareIcon.svelte';
import Shared from './Shared.svelte';

let { post } = $props();

let type = $state('');
let state = $state('closed');

function toggleShared() {
  type = type !== 'Shared' ? 'Shared' : undefined;
}
function toggleState() {
  state = state !== 'open' ? 'open' : 'closed';
}
</script>

<div class="action">
  <span></span>
  <button title="Compartir" type="button" class="bordered" onclick={toggleState}>
    <ShareIcon />
  </button>
  {#if state}
    <Shared
      host={config.title}
      title={post.title}
      author={post.author}
      description={post.description}
      {state}
    />
  {/if}
</div>
