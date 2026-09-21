<script>
import MailIcon from '$lib/icons/MailIcon.svelte';
import BlueskyIcon from '$lib/icons/BlueskyIcon.svelte';
import FacebookIcon from '$lib/icons/FacebookIcon.svelte';
import XIcon from '$lib/icons/XIcon.svelte';
import LinkedInIcon from '$lib/icons/LinkedInIcon.svelte';
import WhatsAppIcon from '$lib/icons/WhatsAppIcon.svelte';
import LinkIcon from '$lib/icons/LinkIcon.svelte';

let { host, href = window.location.href, title, author, description, state='closed' } = $props();
const name = encodeURIComponent(title).concat('%0A');
const writer = encodeURIComponent('Por: ' + author).concat('%0A%0A');
const url = encodeURIComponent(href);
const subject = encodeURIComponent('Articulo Interesante en '.concat(host));
const body = name.concat(writer) + encodeURIComponent(description) + '%0A%0A' + url;

function copyUrl() {
  const url = window.location.href;
  navigator.clipboard
    .writeText(url)
    .then(() => {
      console.log('URL copiada');
    })
    .catch((err) => {
      console.error('Error al copiar la URL', err);
    });
}
</script>

<div class="shared-networks" data-state={state}>
  <span>Compartir: </span>
  <a
    title="Correo"
    href={'mailto:?subject=' + subject + '&body=' + body}
    aria-label="Compartir por correo"
  >
    <MailIcon />
  </a>
  <a
    title="Bluesky"
    href={'https://bsky.app/intent/compose?text=' + name + url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Compartir en Bluesky"
  >
    <BlueskyIcon />
  </a>
  <a
    title="Facebook"
    href={'http://www.facebook.com/sharer.php?u=' + url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Compartir en Facebook"
  >
    <FacebookIcon />
  </a>
  <a
    title="X"
    href={'https://x.com/intent/post?text=' + name + '&url=' + url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Compartir en X"
  >
    <XIcon />
  </a>
  <a
    title="linkedIn"
    href={'https://www.linkedin.com/shareArticle?mini=true&title=' + name + '&url=' + url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Compartir en linkedIn"
  >
    <LinkedInIcon />
  </a>
  <a
    title="WhatsApp"
    href={'https://wa.me/?text=' + name + url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Compartir en WhatsApp"
  >
    <WhatsAppIcon />
  </a>
  <button title="Copiar link" type="button" onclick={copyUrl}><LinkIcon /></button>
</div>
