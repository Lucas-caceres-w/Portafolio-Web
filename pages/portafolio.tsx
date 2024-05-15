import ContainerWorks from '@component/components/portafolio/gridworks';
import { Idioma } from '@component/components/context/languaje';
import Footer from '@component/components/layout/footer';
import Button from '@component/components/layout/boton';
import Nav from '@component/components/layout/navbar';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useContext, useState } from 'react';
import { Close } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import 'swiper/css/navigation';
import Image from 'next/image';
import Head from 'next/head';
import 'swiper/css';

interface ImageObject {
    img: string;
}

interface Modal {
    titulo: string;
    imagen: ImageObject[];
    descripcion: string;
    link: string;
    tecs: string;
}

function Portafolio() {
    const [modal, setModal] = useState<boolean>(false);
    const [info, setInfo] = useState<Modal>({
        titulo: '',
        descripcion: '',
        imagen: [{ img: '' }],
        link: '',
        tecs: '',
    });
    const { language } = useContext<any>(Idioma);

    const ModalWork = ({ titulo, descripcion, imagen, link, tecs }: Modal) => {
        return (
            <div className="fixed z-50 w-full h-screen top-0 backdrop-blur-md transition-all delay-75 bg-dark/60 flex justify-center items-center">
                <section
                    data-aos="zoom-in"
                    className="bg-dark-light w-11/12 md:w-10/12 xl:w-8/12 h-max md:h-[650px] relative rounded-md scale transition-all"
                >
                    <div className="z-50 absolute right-2 top-2">
                        <IconButton onClick={handleClose}>
                            <Close className="text-white" />
                        </IconButton>
                    </div>
                    <div className="flex flex-row flex-wrap md:flex-nowrap h-full gap-0 sm:gap-6">
                        <div className="w-full md:w-2/4">
                            {imagen ? (
                                <Swiper
                                    modules={[Navigation]}
                                    spaceBetween={20}
                                    slidesPerView={1}
                                    navigation
                                >
                                    {imagen?.map((e, idx) => (
                                        <SwiperSlide key={idx}>
                                            <img
                                                alt="img"
                                                src={e.img}
                                                className="w-full h-full"
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            ) : (
                                <div className="w-full h-72 sm:h-3/6 bg-neutral-600 animate-pulse"></div>
                            )}
                            <h2 className="text-green-text text-2xl m-4 font-semibold">
                                {titulo ? (
                                    titulo
                                ) : (
                                    <div className="w-48 bg-neutral-600 animate-pulse h-6"></div>
                                )}
                            </h2>
                            <p className="text-neutral-400 ml-4 text-sm">
                                {descripcion ? (
                                    descripcion
                                ) : (
                                    <div className="flex flex-col gap-2">
                                        <span className="bg-neutral-600 animate-pulse h-3 w-full"></span>
                                        <span className="bg-neutral-600 animate-pulse h-3 w-full"></span>
                                        <span className="bg-neutral-600 animate-pulse h-3 w-full"></span>
                                        <span className="bg-neutral-600 animate-pulse h-3 w-6/12"></span>
                                    </div>
                                )}
                            </p>
                        </div>
                        <div className="w-full md:w-2/4 h-52 md:h-full relative mt-0 p-2">
                            <h4 className="text-blue text-xl md:text-2xl ml-2 md:mt-10">
                                {language === 'es'
                                    ? 'Tecnologias utilizadas:'
                                    : 'Used tecnologies:'}
                            </h4>
                            <ul className="text-white text-sm sm:text-base p-0 ml-4 mt-2 sm:mt-4 border-collapse flex flex-ro flex-wrap gap-2">
                                {tecs ? (
                                    tecs.split(',').map((e, index) => {
                                        return (
                                            <li
                                                className="uppercase cursor-pointer py-1 px-2 sm:py-2 sm:px-4 rounded-md border text-neutral-300 border-white/20 hover:bg-blue"
                                                key={index}
                                            >
                                                {e}
                                            </li>
                                        );
                                    })
                                ) : (
                                    <div className="flex flex-row gap-4">
                                        <div className="w-24 bg-neutral-600 animate-pulse h-6"></div>
                                        <div className="w-24 bg-neutral-600 animate-pulse h-6"></div>
                                    </div>
                                )}
                            </ul>
                            {link && (
                                <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute bottom-4 right-4"
                                >
                                    <Button>
                                        {language === 'es'
                                            ? 'Ver sitio'
                                            : 'Live Demo'}
                                    </Button>
                                </a>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        );
    };

    const handleClose = () => {
        setModal(false);
        setInfo({
            titulo: '',
            descripcion: '',
            imagen: [{ img: '' }],
            link: '',
            tecs: '',
        });
    };

    return (
        <div>
            <Head>
                <title>Lucas Dev | Portafolio</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/assets/logos/logo-blue.svg" />
                <link rel="canonical" href="https://lucasdev.com.ar" />
                <meta property="og:type" content="website" />
                <meta
                    name="description"
                    content="Portafolio web, donde muestro mis trabajos realizados"
                />
                <meta name="theme-color" content="#007acc" />
                <meta name="twitter:card" content="summary" />
                <meta
                    name="twitter:title"
                    property="og:title"
                    content="LucasDev"
                />
                <meta
                    property="og:image"
                    content="/assets/imagenes/portada.png"
                />
                <meta
                    name="twitter:url"
                    property="og:url"
                    content="https://lucasdev.com.ar"
                />
                <meta
                    name="twitter:description"
                    property="og:description"
                    content="Portafolio web, donde muestro mis trabajos realizados"
                />
                <meta
                    name="keywords"
                    content="desarrollador,web,diseño,development,javascript,api,next,react,desarrollo,paginas,portafolio,ecommerce,landing page,dashboard,administracion"
                />
            </Head>
            <Nav />
            {modal && (
                <ModalWork
                    titulo={info.titulo}
                    imagen={info.imagen}
                    descripcion={info.descripcion}
                    link={info.link}
                    tecs={info.tecs}
                />
            )}
            <ContainerWorks
                setInfo={setInfo}
                modal={modal}
                setModal={setModal}
            />
            <Footer />
        </div>
    );
}

export default Portafolio;
