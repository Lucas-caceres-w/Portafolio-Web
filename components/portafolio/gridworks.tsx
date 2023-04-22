import Card from './card-work'
import { useContext } from 'react'
import { Idioma } from '../context/languaje'
import es from '../../lib/texts/es.json'
import en from '../../lib/texts/en.json'
import { text } from 'stream/consumers'

function ContainerWorks() {
  const { language } = useContext<any>(Idioma)
  const texts = language === 'es' ? es : en
  const works = [
    {
      title: 'Glass Tester',
      description: texts.Glass,
      repository: '',
      enlace:
        'https://glass-tester.vercel.app/glass-test/?sku=%2Foriginal_xcea3_1680550324974.json',
      image: '/assets/imagenes/glass.png',
    },
    {
      title: 'Conecty IoT',
      description: texts.Conecty,
      repository: '',
      enlace: 'https://conecty.com.ar/',
      image: '/assets/imagenes/conecty.png',
    },
    {
      title: 'Pelis Total',
      description: texts.Pelis,
      repository: 'https://github.com/Lucas-caceres-w/pelis-total',
      enlace: 'https://pelis-total.vercel.app//',
      image: '/assets/imagenes/pelis-total.png',
    },
    {
      title: 'Wifnix',
      description: texts.Wifnix,
      repository: 'https://github.com/Lucas-caceres-w/Wifnix',
      enlace: 'https://wifnix.com/',
      image: '/assets/imagenes/wifnix.png',
    },
    {
      title: 'Grafica FyC',
      description: texts.GraficaFyC,
      repository: 'https://github.com/Lucas-caceres-w/GraficaFyC',
      enlace: 'https://grafica-fyc.netlify.app/',
      image: '/assets/imagenes/grafica.png',
    },
  ]

  return (
    <section className="mb-24">
      <p className="py-16 text-center font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-300">
        {texts.WorksTitle}
      </p>
      <article className="grid gap-y-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-11/12 sm:10/12 md:w-9/12 justify-center justify-items-center items-center m-auto">
        {works.map((e, index) => {
          return (
            <Card
              key={index}
              title={e.title}
              srcImage={e.image}
              description={e.description}
              repository={e.repository && e.repository}
              enlace={e.enlace}
            />
          )
        })}
      </article>
    </section>
  )
}

export default ContainerWorks
