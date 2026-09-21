<script>
let { src, width = undefined, height = undefined, alt = 'Photo' } = $props();
</script>

<figure class="photo">
  <img {src} {width} {height} {alt} />
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <path
      d="M0 0l100 0 0 100.001 -100 0 0 -100.001zm50 2.672l41.667 23.664 0 47.328 -41.667 23.665 -41.667 -23.665 0 -47.328 41.667 -23.664z"
      stroke="none"
      fill-rule="evenodd"
    />
    <path
      d="M8.304 73.664l-6.333 6.17m89.667 -53.498l6.391 -6.237m-48.058 -17.427l41.667 23.664 0 47.328 -41.667 23.665 -41.667 -23.665 0 -47.328 41.667 -23.664z"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    />
  </svg>
</figure>
