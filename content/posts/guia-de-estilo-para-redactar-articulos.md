---
title: Guía de estilo
subtitle: Archivos Markdown
date: 2022-02-06
author: Giancarlo Ortiz
tags: SEO, Artículos
description: Guía de estilo para aportar recursos al blog
type: Información de estilo
pinned: true
---

[_Markdown_][1] es un lenguaje de marcado que permite dar formato a un texto usando solo símbolos, en un editor de texto simple, sin formato; ampliamente usado en el ámbito académico para redactar artículos.

## Estructura de los archivos Markdown

Esta es una guía de estilo para presentar artículos en formato Markdown para el blog de **Renova LAB**.

## Metadatos

El articulo **titulo-del-archivo.md** debe incluir una sección ([_Front matter_][2]) al inicio del archivo con los siguientes metadatos en formato [_YAML_][3].

> **TIP:** Para las palabras clave puedes usar un planificador de palabras clave, pero el sitio hará el trabajo de SEO por ti.

```
---
title: (Requerido) Nombre del Articulo
subtitle: (opcional) Subtitulo
date: (Requerido) AAAA-MM-DD
author: (Requerido) Autores del articulo, separados por coma
tags: (opcional) SEO, Palabras clave, separadas por coma
image: (opcional) Nombre de Imagen (1600x900) con extension de archivo
description: (opcional) una descripción corta.
type: <alerta> | <información>
pinned: (opcional) <true> | <false>
draft: (opcional) <true> | <false>
---

```

## Subtitulo y cover

El articulo **titulo-del-archivo.md** debe incluir al menos un subtitulo y a continuación una imagen de portada (cover) en formato [_webp_][4] y una proporción apaisada de 16:9, el componente de [_Svelte_][5] se encargara de agregar todas las etiquetas necesarias por ti.

```
## Subtitulo del articulo
<Cover src="name-file-16x9.webp"/>

```

## Algunos formatos de texto soportados

En un documento de Markdown se puede incluir los formatos de texto mas comunes, incluyendo los encabezados; pero se puede incluir etiquetas html para usos avanzados.

```
__Negrita__, _Cursiva_, ~~tachado~~, `Etiqueta`
```

**Negrita**, _Cursiva_, ~~tachado~~, `etiqueta`

```html
<sup>Super índice</sup> Normal <sub>Subíndice</sub>
```

<sup>Super índice</sup> Normal <sub>Subíndice</sub>

```html
<small>Pequeño</small> Normal <ins>Subrayado</ins> <mark>Resaltado</mark>
```

<small>Pequeño</small> Normal <ins>Subrayado</ins> <mark>Resaltado</mark>

### Tamaño de los encabezados

```md
# Titulo de nivel 1/2em

## Titulo de nivel 2/1.5em

### Titulo de nivel 3/1.17em

#### Titulo de nivel 4/1em

Normal
```

# Titulo de nivel 1/2em

## Titulo de nivel 2/1.5em

### Titulo de nivel 3/1.17em

#### Titulo de nivel 4/1em

Normal

## Algunos componentes soportados

El [_preprocesador_][6] que convierte el [_Markdown_][1] en [_HTML_][7] para la web soporta que los artículos puedan incluir listas ordenadas y no ordenadas.

```
- item
- item
```

- item
- item

```
1. item uno
1. item dos

```

1. item uno
1. item dos

```
1. item uno:
    - item anidado uno
1. item dos:
    - item anidado uno
    - item anidado dos
    - item anidado tres

```

1. item uno:
   - item anidado uno
1. item dos:
   - item anidado uno
   - item anidado dos
   - item anidado tres

### Listas de tareas y emojis

```md
- [x] Tarea 1 realizada ✔️
- [ ] Tarea 2 pendiente ❌
- [ ] Tarea 3 pendiente ❌
```

- [x] Tarea 1 realizada ✔️
- [ ] Tarea 2 pendiente ❌
- [ ] Tarea 3 pendiente ❌

También están soportadas las citas, los hipervínculos y las imágenes.

```
>“La creatividad requiere tener el valor de desprenderse de las certezas”.
>[Erich Fromm](https://es.wikipedia.org/wiki/Erich_Fromm)

```

> “La creatividad requiere tener el valor de desprenderse de las certezas”<br> >[Erich Fromm](https://es.wikipedia.org/wiki/Erich_Fromm)

```md
**hipervínculos literales** https://renovalab.vercel.app/
```

**hipervínculos literales** https://renovalab.vercel.app/

```
# Múltiples oportunidades para ampliar la acción climática, IPCC-6R
![Acción climática, IPCC](https://www.ipcc.ch/report/ar6/syr/downloads/figures/IPCC_AR6_SYR_SPM_Figure7.png)

```

# Múltiples oportunidades para ampliar la acción climática, IPCC-6R

![Acción climática, IPCC](https://www.ipcc.ch/report/ar6/syr/downloads/figures/IPCC_AR6_SYR_SPM_Figure7.png)

[1]: https://es.wikipedia.org/wiki/Markdown
[2]: https://bookdown.org/yihui/rmarkdown-cookbook/rmarkdown-anatomy.html
[3]: https://es.wikipedia.org/wiki/YAML
[4]: https://es.wikipedia.org/wiki/WebP
[5]: https://es.wikipedia.org/wiki/Svelte
[6]: https://es.wikipedia.org/wiki/Preprocesador
[7]: https://es.wikipedia.org/wiki/HTML
