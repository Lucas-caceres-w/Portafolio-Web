import {
  Email,
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  WhatsApp,
} from '@mui/icons-material'
import { Tooltip } from '@mui/material'
import { Idioma } from '../context/languaje'
import es from '../../lib/texts/es.json'
import en from '../../lib/texts/en.json'
import { useContext } from 'react'

function Social() {
  const { language } = useContext<any>(Idioma)
  const texts = language === 'es' ? es : en

  return (
    <section id="social" className="mb-12">
      <p className="text-center font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-300 mb-12">
        {texts.socialTitle}
      </p>
      <article
        data-aos="zoom-in-up"
        className="card-home rounded w-11/12 sm:w-10/12 md:w-9/12 bg-black2 h-64 m-auto flex items-center justify-center shadow-lg shadow-black2 hover:translate-y-2 hover:bg-blue transition-all duration-500"
      >
        <div className="grid grid-cols-3 sm:grid-cols-6 items-center justify-evenly place-items-center gap-y-5 w-11/12 sm:w-9/12">
          <div className="w-16 h-16 rounded-full bg-black1 grid place-items-center">
            <a
              href="https://wa.me/1127516798"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Tooltip title="WhatsApp" placement="top-end" arrow>
                <WhatsApp
                  fontSize="large"
                  className="text-4xl text-blue cursor-pointer hover:text-pink transition duration-200"
                />
              </Tooltip>
            </a>
          </div>
          <div className="w-16 h-16 rounded-full bg-black1 grid place-items-center">
            <a
              href="https://www.linkedin.com/in/lucasdev03/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Tooltip title="Linkedin" placement="top-end" arrow>
                <LinkedIn
                  fontSize="large"
                  className="text-4xl text-blue cursor-pointer hover:text-pink transition duration-200"
                />
              </Tooltip>
            </a>
          </div>
          <div className="w-16 h-16 rounded-full bg-black1 grid place-items-center">
            <a
              href="https://www.instagram.com/lucas.dev.03/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Tooltip title="Instagram" placement="top-end" arrow>
                <Instagram
                  fontSize="large"
                  className="text-4xl text-blue cursor-pointer hover:text-pink transition duration-200"
                />
              </Tooltip>
            </a>
          </div>
          <div className="w-16 h-16 rounded-full bg-black1 grid place-items-center">
            <a
              href="https://www.facebook.com/LucasDev03/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Tooltip title="Facebook" placement="top-end" arrow>
                <Facebook
                  fontSize="large"
                  className="text-4xl text-blue cursor-pointer hover:text-pink transition duration-200"
                />
              </Tooltip>
            </a>
          </div>
          <div className="w-16 h-16 rounded-full bg-black1 grid place-items-center">
            <a
              href="mailto:lucas.caceres.lc@hotmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Tooltip title="Email" placement="top-end" arrow>
                <Email
                  fontSize="large"
                  className="text-4xl text-blue cursor-pointer hover:text-pink transition duration-200"
                />
              </Tooltip>
            </a>
          </div>
          <div className="w-16 h-16 rounded-full bg-black1 grid place-items-center">
            <a
              href="https://github.com/Lucas-caceres-w"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Tooltip title="Github" placement="top-end" arrow>
                <GitHub
                  fontSize="large"
                  className="text-4xl text-blue cursor-pointer hover:text-pink transition duration-200"
                />
              </Tooltip>
            </a>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Social
