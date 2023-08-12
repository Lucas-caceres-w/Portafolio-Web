import { KeyboardArrowUp } from '@mui/icons-material'
import { useEffect, useState } from 'react'

function Uper() {
  const [scroll, setscroll] = useState(false)

  useEffect(() => {
    function Scroll() {
      if (window.scrollY > 300) {
        setscroll(true)
      } else {
        setscroll(false)
      }
    }
    window.addEventListener('scroll', Scroll)
    return () => {
      window.removeEventListener('scroll', Scroll)
    }
  }, [])

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div
      onClick={scrollTop}
      className={
        scroll
          ? 'fixed bg-blue rounded-full cursor-pointer hover:bg-pink bottom-4 right-4 z-20 transition-all duration-200 p-2 hover:animate-bounce transition-all'
          : 'hidden'
      }
    >
      <KeyboardArrowUp fontSize='large' className="text-4xl text-neutral-300" />
    </div>
  )
}

export default Uper
