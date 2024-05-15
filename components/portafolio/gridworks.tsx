'use client'
import { useContext, useState } from 'react';
import { Idioma } from '../context/languaje';
import es from '../../lib/texts/es.json';
import en from '../../lib/texts/en.json';
import Alternative from './alternative';

function ContainerWorks({
    modal,
    setModal,
    setInfo,
}: {
    modal: any;
    setModal: any;
    setInfo: any;
}) {
    const { language } = useContext<any>(Idioma);
    const texts = language === 'es' ? es : en;
    const works = [
        {
            title: 'Seky propiedades',
            description: texts.sekyprop,
            enlace: 'https://www.sekypropiedades.com.ar/',
            image: [
                { img: '/assets/imagenes/Sekyprop.png' },
                { img: '/assets/imagenes/Sekyprop-1.png' },
                { img: '/assets/imagenes/Sekyprop-2.png' },
                { img: '/assets/imagenes/Sekyprop-3.png' },
            ],
            tecs: 'html,tailwind,php',
        },
        {
            title: 'Fifa Boosting Latam',
            description: texts.fifaboost,
            enlace: 'https://fifaboosting.vercel.app/',
            image: [{ img: '/assets/imagenes/fifaboosting.png' }],
            tecs: 'css,astro,react',
        },
        /* {
      title: "Celebra la vida | Jose cuervo",
      description: texts.josecuervo,
      enlace: "https://celebrolavida.com/",
      image: "/assets/imagenes/celebrolavida.png",
      tecs: "css,react,nest,mysql,type orm",
    }, */
        {
            title: 'Motor Rad',
            description: texts.MotorRad,
            enlace: 'https://motorradresenasdelaruta.com/',
            //"https://motor-rad-landing.vercel.app/",
            image: [{ img: '/assets/imagenes/motor-rad.png' }],
            tecs: 'html,css,javascript,node',
        },
        {
            title: 'Alquilo pisos BA',
            description: texts.Alquilopisos,
            enlace: 'https://alquilopisosba.com.ar/',
            image: [{ img: '/assets/imagenes/Alquilopisos.png' }],
            tecs: 'html,tailwind,php',
        },
        {
            title: 'Wifnix',
            description: texts.Wifnix,
            enlace: 'https://wifnix-desarrollo-git-main-lucas-caceres-w.vercel.app/',
            image: [{ img: '/assets/imagenes/wifnix.png' }],
            tecs: 'tailwind,nextjs,sql,material ui',
        },
        {
            title: 'Glass Tester',
            description: texts.Glass,
            enlace: 'https://glass-tester.vercel.app/glass-test/?sku=%2Foriginal_xcea3_1680550324974.json',
            image: [{ img: '/assets/imagenes/glass.png' }],
            tecs: 'react,nextjs,material ui,sql',
        },
        {
            title: 'Conecty IoT',
            description: texts.Conecty,
            enlace: 'https://conecty.com.ar/',
            image: [{ img: '/assets/imagenes/conecty.png' }],
            tecs: 'react,nextjs,css,bootstrap',
        },
    ];

    return (
        <>
            <section className="mb-24">
                <p className="py-16 text-center font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-300">
                    {texts.WorksTitle}
                </p>
                <section className="w-full px-1 sm:p-0 sm:w-11/12 m-auto grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-8 perso justify-items-center">
                    {works.map((e, index) => {
                        return (
                            <Alternative
                                key={index}
                                title={e.title}
                                srcImage={e.image}
                                description={e.description}
                                enlace={e.enlace}
                                tecs={e.tecs}
                                modal={() => setModal(!modal)}
                                info={setInfo}
                            />
                        );
                    })}
                </section>
            </section>
        </>
    );
}

export default ContainerWorks;
