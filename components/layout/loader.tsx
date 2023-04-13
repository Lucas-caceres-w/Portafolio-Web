import React, { useEffect } from 'react'
import { useContext } from 'react'
import { Idioma } from '../context/languaje'

function Loader({ loading }: any) {
  const { language } = useContext<any>(Idioma)

  return loading ? (
    <div className="overlay flex flex-col">
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p className="text-blue font-semibold">
        {language === 'es' ? 'Loading language' : 'Cargando idioma'}
      </p>
    </div>
  ) : null
}

export default Loader
