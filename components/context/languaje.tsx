import { createContext, useEffect, useState } from 'react'

export const Idioma = createContext({})

function Languaje({ children }: any) {
  const [language, setLanguage] = useState<string | null>('es')
  const [load, setLoad] = useState<boolean>(false)

  const changeLanguage = (lang: string) => {
    setLoad(true)
    document.body.style.overflow = 'hidden'
    setTimeout(() => {
      document.body.style.overflow = 'auto'
      setLanguage(lang)
      localStorage.setItem('lang', lang)
      setLoad(false)
    }, 1500)
  }

  useEffect(() => {
    if (localStorage.getItem('lang')) {
      setLanguage(localStorage.getItem('lang'))
    } else {
      localStorage.setItem('lang', language || 'es')
    }
  }, [])

  return (
    <Idioma.Provider value={{ language, changeLanguage, load }}>
      {children}
    </Idioma.Provider>
  )
}

export default Languaje
