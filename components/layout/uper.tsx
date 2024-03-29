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
          ? 'fixed bg-blue rounded-2xl cursor-pointer hover:bg-pink bottom-4 right-4 z-20 transition-all duration-200'
          : 'invisible'
      }
    >
      <KeyboardArrowUp className="text-5xl text-neutral-300" />
    </div>
  )
}

export default Uper
