import Form from '@component/components/contacto/formulario'
import Footer from '@component/components/layout/footer'
import Nav from '@component/components/layout/navbar'
import Head from 'next/head'
import Image from 'next/image'
import { useContext } from 'react'
import { Idioma } from '../components/context/languaje'
import es from '../lib/texts/es.json'
import en from '../lib/texts/en.json'

function Contact() {
  const { language } = useContext<any>(Idioma)
  const texts = language === 'es' ? es : en

  return (
    <div>
      <Head>
        <title>Lucas Dev | Contacto</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/logos/logo-blue.svg" />
        <link rel="canonical" href="https://lucasdev.com.ar" />
        <meta property="og:type" content="website" />
        <meta
          name="description"
          content="Portafolio web, donde muestro mis trabajos realizados"
        />
        <meta name="theme-color" content="#007acc" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" property="og:title" content="LucasDev" />
        <meta property="og:image" content="/assets/imagenes/portada.png" />
        <meta
          name="twitter:url"
          property="og:url"
          content="https://lucasdev.com.ar"
        />
        <meta
          name="twitter:description"
          property="og:description"
          content="Portafolio web, donde muestro mis trabajos realizados"
        />
        <meta
          name="keywords"
          content="desarrollador,web,diseño,development,javascript,api,next,react,desarrollo,paginas,portafolio,ecommerce,landing page,dashboard,administracion"
        />
      </Head>
      <Nav />
      <div className="flex md:flex-row flex-col items-center justify-between">
        <div className="grid place-items-center py-16 md:py-0 justify-center w-11/12 md:w-full lg:w-7/12 xl:w-8/12">
          <p className="font-bold text-blue text-3xl mb-5 w-full m-auto text-center">
            {texts.contact}
          </p>
          <Image
            data-aos="zoom-in-up"
            src={'/assets/imagenes/conector.png'}
            width={400}
            height={100}
            alt="imagen"
          />
        </div>
        <Form />
      </div>
      <Footer />
    </div>
  )
}

export default Contact
