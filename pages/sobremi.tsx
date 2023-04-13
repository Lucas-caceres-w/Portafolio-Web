import Skills from '@component/components/about/skills'
import Footer from '@component/components/layout/footer'
import Nav from '@component/components/layout/navbar'
import Head from 'next/head'

function About() {
  return (
    <div>
      <Head>
        <title>Lucas Dev | Sobre mi</title>
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
      <Skills />
      <Footer />
    </div>
  )
}

export default About
