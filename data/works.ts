export type Work = {
   slug: string;
   title: string;
   category: 'Web' | 'Video' | 'Branding';
   cover: string; // imagen o video
   gallery?: string[]; // imágenes / videos secundarios
   shortDesc: string;
   description: string;
   tags: string[];
   link?: string;
};

export const works: Work[] = [
   {
      slug: 'turnogo',
      title: 'TurnoGo',
      category: 'Web',
      cover: '/assets/works/turnogo/turnogo.png',
      gallery: [
         '/assets/works/turnogo/calendario.png',
         '/assets/works/turnogo/servicios.png',
         '/assets/works/turnogo/personal.png',
         '/assets/works/turnogo/tienda-ej.jpg',
      ],
      shortDesc: 'Sistema de turnos online',
      description:
         'Plataforma para que profesionales gestionen turnos, clientes y agenda desde un solo lugar.',
      tags: ['Next.js', 'UI/UX', 'Producto digital'],
      link: 'https://turnogo.com',
   },
   {
      slug: 'motion-graficafyc',
      title: 'Fliyer animado',
      category: 'Video',
      cover: '/assets/works/motions/grafica-fyc.mp4',
      shortDesc: 'Video corto para redes',
      description: 'Edición y motion graphics para promoción de grafica.',
      tags: ['Motion', 'After Effects', 'Reels'],
   },
   {
      slug: 'motion-turnogo',
      title: 'Anuncio TurnoGo',
      category: 'Video',
      cover: '/assets/works/motions/motion-turnogo.mp4',
      shortDesc: 'Video corto para redes',
      description: 'Edición y motion graphics para promoción de software.',
      tags: ['Motion', 'After Effects', 'Reels'],
   },
   {
      slug: 'conecty-iot',
      title: 'Conecty IoT',
      category: 'Web',
      cover: '/assets/works/conecty/header-conecty.jpeg',
      gallery: [
         '/assets/works/conecty/mapa-conecty.jpeg',
         '/assets/works/conecty/tienda-conecty.jpeg',
      ],
      shortDesc: 'Diseño web para Conecty IoT',
      description: 'Diseño y desarrollo de template Next.js.',
      tags: ['Next.js', 'UX/UI', 'Desarrollo Web'],
      link: 'https://conecty.com.ar',
   },
   {
      slug: 'alquilo-pisos',
      title: 'AlquiloPisos',
      category: 'Web',
      cover: '/assets/works/alquilopisos/ap-header.jpeg',
      gallery: [
         '/assets/works/alquilopisos/lista-ap.jpeg',
         '/assets/works/alquilopisos/ap-prop.jpeg',
      ],
      shortDesc: 'Rediseño y actualización de sitio web',
      description: 'Rediseño y actualización web PHP.',
      tags: ['PHP', 'UX/UI', 'Desarrollo Web'],
      link: 'https://alquilopisosba.com.ar',
   },
   {
      slug: 'coaching-fc25',
      title: 'Fifa Boosting Latam',
      category: 'Web',
      cover: '/assets/works/fifa/coaching-header.jpeg',
      gallery: ['/assets/works/fifa/coaching-plans.jpeg'],
      shortDesc: 'Diseño web para Fifa Boosting Latam',
      description: 'Diseño y desarrollo web para empresa de boosting fifa',
      tags: ['Astro', 'UX/UI', 'Desarrollo Web'],
      link: 'https://fifaboosting.vercel.app',
   },
   {
      slug: 'seky-web',
      title: 'Seky Propiedades',
      category: 'Web',
      cover: '/assets/works/seky/seky-header.jpeg',
      gallery: [
         '/assets/works/seky/seky-list.jpeg',
         '/assets/works/seky/seky-prop.jpeg',
      ],
      shortDesc: 'Diseño web para Conecty IoT',
      description: 'Diseño y desarrollo de template Next.js.',
      tags: ['Next.js', 'UX/UI', 'Desarrollo Web'],
      link: 'https://seky.com.ar',
   },
];
