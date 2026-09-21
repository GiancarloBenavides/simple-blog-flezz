<script>
import { getData } from '$lib/utils/words';
import cloud from 'd3-cloud';

let {
  fontSize = 20,
  maxWords = 100,
  caption = undefined,
  description = undefined,
  width = 600,
  height = 600,
  padding = 5,
  minRotate = 0,
  maxRotate = 90,
  font = 'Impact',
  top = 24,
  text,
  wordChoices = {},
} = $props();

let tokens = getData(text, wordChoices);
const words = [];

const maxWordCount = tokens.reduce((prev, cur) =>
  prev.count < cur.count ? prev.count : cur.count,
);

const layout = cloud()
  .size([width, height])
  .words(tokens)
  .padding(padding)
  .rotate(() => ~~(Math.random() * maxRotate) + minRotate)
  .font(font)
  .fontSize((d) => Math.floor((d.count / maxWordCount) * maxFontSize))
  .on('word', ({ size, x, y, rotate, text }) => {
    words.push({ size, x, y, rotate, text });
  });

/*






*/

console.log(words);
const texto = 'hola';
</script>

<p>{texto} texto: - {text}</p>
<p>{texto} options: - options</p>

<!-- 
{#if text}
  <svg
    {width}
    {height}
    viewBox={`0 0 ${width} ${height}`}
    text-anchor="middle"
    font-family="Helvetica, Arial, sans-serif"
  >
    {#if caption}
      <text x={width / 2} y={top} font-size="24" font-weight="bold" text-anchor="middle">
        {caption}
      </text>
    {/if}
    {#if description}
      <text x={width / 2} y={top + 24} text-anchor="middle">
        {description}
      </text>
    {/if}
    <g transform={`translate(0 ${top + 24})`}>
      {#each words as word}
        <text
          font-size={word.size}
          transform={`translate(${word.x}, ${word.y}) rotate(${word.rotate})`}
          opacity={word.size / maxFrequency}
          fill="#CC2936"
        >
          {word.text}
        </text>
      {/each}
    </g>
  </svg>
{/if}

-->