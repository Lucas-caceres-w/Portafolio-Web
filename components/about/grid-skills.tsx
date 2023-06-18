import Card from './card-skills'

const data = [
  {
    title: 'html',
    color: 'html',
    image: '/assets/imagenes/html.png',
  },
  {
    title: 'css',
    color: 'css',
    image: '/assets/imagenes/css.png',
  },
  {
    title: 'javascript',
    color: 'javascript',
    image: '/assets/imagenes/javascript.png',
  },
  {
    title: 'sql',
    color: 'sql',
    image: '/assets/imagenes/sql.webp',
  },
  {
    title: 'php',
    color: 'php',
    image: '/assets/imagenes/php.png',
  },
  {
    title: 'tailwind',
    color: 'tailwind',
    image: '/assets/imagenes/tailwind.png',
  },
  {
    title: 'react',
    color: 'react',
    image: '/assets/imagenes/react.png',
  },
  {
    title: 'next',
    color: 'next',
    image: '/assets/imagenes/nextjs.png',
  },
  {
    title: 'node',
    color: 'node',
    image: '/assets/imagenes/nodejs.png',
  },
  {
    title: 'git',
    color: 'git',
    image: '/assets/imagenes/git.png',
  },
  {
    title: 'typescript',
    color: 'typescript',
    image: '/assets/imagenes/typescript.webp',
  },
  {
    title: 'github',
    color: 'github',
    image: '/assets/imagenes/github.png',
  },
  {
    title: 'sass',
    color: 'sass',
    image: '/assets/imagenes/sass.png',
  },
  {
    title: 'bootstrap',
    color: 'bootstrap',
    image: '/assets/imagenes/bootstrap.png',
  },
]

function Grid() {
  return (
    <section className="w-full sm:w-9/12 mb-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 m-auto justify-items-center gap-y-6">
      {data.map((e, index) => (
        <Card key={index} lang={e.title} color={e.color} image={e.image} />
      ))}
    </section>
  )
}

export default Grid
