import {
  ContactEmergencyOutlined,
  ContactEmergencyRounded,
  HomeOutlined,
  HomeRounded,
  MailOutlineOutlined,
  MailRounded,
  WorkOutlineOutlined,
  WorkRounded,
} from '@mui/icons-material'
import { Tooltip } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { Idioma } from '../context/languaje'
import Loader from './loader'

function Nav() {
  const router = useRouter()
  const ruta = router.pathname
  const { language, changeLanguage, load } = useContext<any>(Idioma)

  const CambiarLang = () => {
    if (language === 'es') {
      changeLanguage('en')
    }
    if (language === 'en') {
      changeLanguage('es')
    }
  }

  return (
    <nav className="h-20 bg-black2 flex items-center">
      <Loader loading={load} />
      <section className="w-11/12 sm:w-9/12 m-auto flex flex-row justify-between items-center">
        <div className="w-24">
          <Link href={'/'}>
            <Image
              className=""
              src={'/assets/logos/logo-gris.svg'}
              width={'200'}
              height="50"
              alt="logo"
            />
          </Link>
        </div>
        <div className="text-neutral-500 flex flex-row gap-4 items-center sm:gap-6">
          <Link
            className={ruta === '/' ? 'text-pink' : 'hover:text-pink'}
            href={'/'}
          >
            <Tooltip title={language === 'es' ? 'Inicio' : 'Home'}>
              {ruta === '/' ? <HomeRounded /> : <HomeOutlined />}
            </Tooltip>
          </Link>
          <Link
            className={ruta === '/portafolio' ? 'text-pink' : 'hover:text-pink'}
            href={'/portafolio'}
          >
            <Tooltip title={language === 'es' ? 'Portafolio' : 'Portfolio'}>
              {ruta === '/portafolio' ? (
                <WorkRounded />
              ) : (
                <WorkOutlineOutlined />
              )}
            </Tooltip>
          </Link>
          <Link
            className={ruta === '/sobremi' ? 'text-pink' : 'hover:text-pink'}
            href={'/sobremi'}
          >
            <Tooltip title={language === 'es' ? 'Habilidades' : 'Skills'}>
              {ruta === '/sobremi' ? (
                <ContactEmergencyRounded />
              ) : (
                <ContactEmergencyOutlined />
              )}
            </Tooltip>
          </Link>
          <Link
            className={ruta === '/contacto' ? 'text-pink' : 'hover:text-pink'}
            href={'/contacto'}
          >
            <Tooltip title={language === 'es' ? 'Contacto' : 'Contact'}>
              {ruta === '/contacto' ? <MailRounded /> : <MailOutlineOutlined />}
            </Tooltip>
          </Link>
          <div className="rounded-full hover:bg-black1 w-8 h-8 grid place-items-center shadow hover:shadow-black1">
            <button className="font-bold text-pink" onClick={CambiarLang}>
              {language === 'es' ? 'EN' : 'ES'}
            </button>
          </div>
        </div>
      </section>
    </nav>
  )
}

export default Nav
