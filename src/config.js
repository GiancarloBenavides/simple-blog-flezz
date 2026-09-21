import es from 'date-fns/locale/es';

const config = {
  title: 'Renova Lab',
  slogan: 'Laboratorio verde de apropiación ciudadana',
  description: 'Sitio web para el proyecto de fin de Maestría Renova Lab',
  locale: { locale: es },
  metadata: {
    date: "MMMM dd 'de' yyyy",
  },
  archive: {
    title: 'Colección',
    date: 'MMM dd, yyyy',
    subtitles: {
      author: 'Últimos artículos publicados por',
      tag: 'Últimos artículos publicados en la categoría',
      blog: 'Últimos artículos publicados en el blog',
    },
  },
};

export default config;
