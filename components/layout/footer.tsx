import {
  FacebookOutlined,
  Instagram,
  LinkedIn,
  WhatsApp,
} from '@mui/icons-material'
import { useContext } from 'react'
import { Idioma } from '../context/languaje'
import Link from 'next/link'

function Footer() {
  const { language } = useContext<any>(Idioma)
  const date = new Date(),
    year = date.getFullYear()
  return (
    <div className="bg-black2 w-full">
      <section className="w-11/12 m-auto pt-12 grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-4 items-start justify-around justify-content-center text-neutral-400">
        <div className="flex flex-col gap-2 items-center">
          <img src="/assets/logos/logo-blue.svg" className="w-24" />
          <div className="text-left">
            <p>
              {language === 'es'
                ? 'Optimiza tus proyectos'
                : 'Optimize your projects'}
            </p>
            <div className="flex flex-row gap-3 mt-1 font-black text-2xl">
              <a
                href="https://www.facebook.com/LucasDev03/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FacebookOutlined className="hover:text-blue cursor-pointer" />
              </a>
              <a
                href="https://www.instagram.com/lucas.dev.03/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Instagram className="hover:text-blue cursor-pointer" />
              </a>
              <a
                href="https://www.linkedin.com/in/lucasdev03/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <LinkedIn className="hover:text-blue cursor-pointer" />
              </a>
              <a
                href="https://wa.me/message/NLUFXMZBD57GN1"
                rel="noopener noreferrer"
                target="_blank"
              >
                <WhatsApp className="hover:text-blue cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-left">
          <p className="font-semibold text-gray-200 text-2xl">
            {language === 'es' ? 'Sobre mi' : 'About me'}
          </p>
          <ul className="flex flex-col gap-2 mt-2 pl-5">
            <Link
              href={'/sobremi'}
              className="hover:text-pink hover:underline cursor-pointer"
            >
              {language === 'es' ? 'Habilidades' : 'Skills'}
            </Link>
            <Link
              href={'/portafolio'}
              className="hover:text-pink hover:underline cursor-pointer"
            >
              {language === 'es' ? 'Trabajos' : 'Works'}
            </Link>
            <Link
              href={'/#social'}
              className="hover:text-pink hover:underline cursor-pointer"
            >
              {language === 'es' ? 'Redes' : 'Social'}
            </Link>
          </ul>
        </div>
        {/* <div className="flex flex-col items-left">
          <p className="font-semibold text-gray-200 text-2xl">
            {language === 'es' ? 'Plantillas' : 'Templates'}
          </p>
          <ul className="flex flex-col gap-2 mt-2 pl-5">
            <li className="hover:text-pink hover:underline cursor-pointer">
              Landing pages
            </li>
            <li className="hover:text-pink hover:underline cursor-pointer">
              E-commerce
            </li>
            <li className="hover:text-pink hover:underline cursor-pointer">
              Dashboards
            </li>
          </ul>
        </div> */}
        <div className="flex flex-col items-left">
          <p className="font-semibold text-gray-200 text-2xl">
            {language === 'es' ? 'Contacto' : 'Contact'}
          </p>
          <ul className="flex flex-col gap-2 mt-2 pl-5">
            <a
              href="https://www.facebook.com/LucasDev03/"
              rel="noopener noreferrer"
              target="_blank"
              className="hover:text-pink hover:underline cursor-pointer"
            >
              Facebook
            </a>
            <a
              href="https://www.linkedin.com/in/lucasdev03/"
              rel="noopener noreferrer"
              target="_blank"
              className="hover:text-pink hover:underline cursor-pointer"
            >
              Linkedin
            </a>
            <a
              href="https://www.instagram.com/lucas.dev.03/"
              rel="noopener noreferrer"
              target="_blank"
              className="hover:text-pink hover:underline cursor-pointer"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/message/NLUFXMZBD57GN1"
              rel="noopener noreferrer"
              target="_blank"
              className="hover:text-pink hover:underline cursor-pointer"
            >
              Whatsapp
            </a>
            <a
              href="mailto:lucas.caceres.lc@hotmail.com"
              rel="noopener noreferrer"
              target="_blank"
              className="hover:text-pink hover:underline cursor-pointer"
            >
              E-mail
            </a>
          </ul>
        </div>
        <div className="flex flex-col items-left">
          <p className="font-semibold text-gray-200 text-2xl">
            {language === 'es' ? 'Trabajos' : 'Works'}
          </p>
          <ul className="flex flex-col gap-2 mt-2 pl-5">
            <a
              href="https://grafica-fyc.netlify.app/"
              rel="noopener noreferrer"
              target="_blank"
              className="hover:text-pink hover:underline cursor-pointer"
            >
              Grafica FyC
            </a>
            <a
              href="https://conecty.com.ar/"
              rel="noopener noreferrer"
              target="_blank"
              className="hover:text-pink hover:underline cursor-pointer"
            >
              Conecty IoT
            </a>
            <a
              href="https://wifnix.com/"
              rel="noopener noreferrer"
              target="_blank"
              className="hover:text-pink hover:underline cursor-pointer"
            >
              Wifnix
            </a>
            <a
              href="https://pelis-total.vercel.app/"
              rel="noopener noreferrer"
              target="_blank"
              className="hover:text-pink hover:underline cursor-pointer"
            >
              Pelis DB
            </a>
          </ul>
        </div>
      </section>
      <div className="border-t-2 border-neutral-500 w-11/12 m-auto mt-6">
        <p className="py-4 text-pink text-xl font-medium">
          <span className="text-blue">Lucas Dev</span> © {year}
        </p>
      </div>
    </div>
  )
}

export default Footer
