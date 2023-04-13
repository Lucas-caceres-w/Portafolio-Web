import Uper from '@component/components/layout/uper'
import '@component/styles/globals.css'
import type { AppProps } from 'next/app'
import { Open_Sans } from 'next/font/google'
import Router from 'next/router'
import { useEffect, useState } from 'react'
import aos from 'aos'
import 'aos/dist/aos.css'
import Languaje from '@component/components/context/languaje'

const OpSans = Open_Sans({
  variable: '--open-sans',
  weight: ['300', '400', '500', '800'],
  preload: false,
})

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleStart = () => setLoading(true)
    const handleComplete = () => setLoading(false)
    aos.init()

    Router.events.on('routeChangeStart', handleStart)
    Router.events.on('routeChangeComplete', handleComplete)
    Router.events.on('routeChangeError', handleComplete)

    return () => {
      Router.events.off('routeChangeStart', handleStart)
      Router.events.off('routeChangeComplete', handleComplete)
      Router.events.off('routeChangeError', handleComplete)
    }
  }, [Router])

  return (
    <Languaje>
      <main className={OpSans.className}>
        {loading && (
          <div
            className="loader bg-gradient-to-r from-pink to-blue"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              height: '4px',
              zIndex: 9999,
              borderRadius: '3px',
              transition: 'width 1s ease-in-out',
              width: loading ? '100%' : '0%',
            }}
          />
        )}
        <Component {...pageProps} />
        <Uper />
      </main>
    </Languaje>
  )
}
