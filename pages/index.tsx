import Head from 'next/head'
import Nav from '@component/components/layout/navbar'
import Hero from '@component/components/home/header'
import Details from '@component/components/home/details'
import Social from '@component/components/home/social'
import Footer from '@component/components/layout/footer'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Skills from '@component/components/about/skills'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const hash = router.asPath.split('#')[1]
    if (hash) {
      const element = document.getElementById(hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView()
        }, 1000)
      }
    }
  }, [router.asPath])
  return (
    <>
      <Head>
        <title>Lucas Dev | Inicio</title>
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
      <Hero />
      <Details />
      <Skills />
      <Social />
      <Footer />
    </>
  )
}
