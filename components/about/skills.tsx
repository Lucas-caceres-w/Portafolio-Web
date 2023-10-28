import Grid from './grid-skills'
import { useContext } from 'react'
import { Idioma } from '../context/languaje'

function Skills() {
  const { language } = useContext<any>(Idioma)

  return (
    <div>
      <p id='sobremi' className="py-16 text-center font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-300">
        {language === 'es' ? 'Mis habilidades' : 'My Skills'}
      </p>
      <Grid />
    </div>
  )
}

export default Skills
