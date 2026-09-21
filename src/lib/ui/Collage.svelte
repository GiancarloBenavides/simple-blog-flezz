<script>
let {
  type = '',
  name,
  number,
  path = '/img/gallery/',
  ext = '.jpg',
  alts,
  urls,
  places = ['', '', '', ''],
  caption = undefined,
} = $props();
const source = path + 'collage-' + String(number).padStart(2, '0') + '-img-';
</script>

<figure>
  <div class={'collage ' + type} role="group">
    <a href={urls[0]} target="_blank">
      <img
        src={source + '01' + ext}
        alt={name + ' - ' + alts[0]}
        title={alts[0] + ' - ' + places[0]}
      />
    </a>
    <a href={urls[1]} target="_blank">
      <img
        src={source + '02' + ext}
        alt={name + ' - ' + alts[1]}
        title={alts[1] + ' - ' + places[1]}
      />
    </a>
    <a href={urls[2]} target="_blank">
      <img
        src={source + '03' + ext}
        alt={name + ' - ' + alts[2]}
        title={alts[2] + ' - ' + places[2]}
      />
    </a>
    <a href={urls[3]} target="_blank">
      <img
        src={source + '04' + ext}
        alt={name + ' - ' + alts[3]}
        title={alts[3] + ' - ' + places[3]}
      />
    </a>
  </div>
  {#if caption}
    <figcaption><span>Collage {number}. </span> {caption}.</figcaption>
  {/if}
</figure>
