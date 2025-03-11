<script>
  import config from "/src/config";
  import Seo from "$lib/Seo.svelte";
  import Title from "$lib/ui/Title.svelte";

</script>

<Seo
  title={`${config.siteTitle} — ${config.siteTagline}`}
  description="descripción de la pagina"
  og={{ title: config.siteTagline }}
/>

<section>
  <article>
    <Title>Titulo</Title>
    <div>
      <p>
      </p>
      <p>
      </p>
    </div>
  </article>
</section>

<section>
  <article>
    <Title>Titulo</Title>
    <div>
      <p>
      </p>
      <p>
      </p>
    </div>
  </article>
</section>