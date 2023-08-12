import { Idioma } from "@component/components/context/languaje";
import Footer from "@component/components/layout/footer";
import Nav from "@component/components/layout/navbar";
import ContainerWorks from "@component/components/portafolio/gridworks";
import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Head from "next/head";
import { useContext, useState } from "react";

interface Modal {
  titulo: string;
  imagen: string;
  descripcion: string;
  link: string;
  tecs: string;
}

function Portafolio() {
  const [modal, setModal] = useState<boolean>(false);
  const [info, setInfo] = useState({
    titulo: "",
    descripcion: "",
    imagen: "",
    link: "",
    tecs: "",
  });
  const { language } = useContext<any>(Idioma);

  const ModalWork = ({ titulo, descripcion, imagen, link, tecs }: Modal) => {
    return (
      <div className="fixed z-50 w-full h-screen top-0 backdrop-blur-sm transition-all delay-75 bg-neutral-900/60 grid place-items-center">
        <section
          data-aos="zoom-in"
          className="bg-neutral-800 w-11/12 md:w-10/12 xl:w-8/12 h-max md:h-[650px] relative rounded-md"
        >
          <IconButton
            onClick={handleClose}
            className="text-white z-50 absolute right-2 top-2"
          >
            <Close />
          </IconButton>
          <div className="flex flex-row flex-wrap md:flex-nowrap h-full gap-0 sm:gap-6">
            <div className="w-full md:w-2/4">
              <img src={imagen} className="w-full" />
              <h2 className="text-white text-2xl m-4 font-semibold">
                {titulo}
              </h2>
              <p className="text-white ml-4 text-sm">{descripcion}</p>
            </div>
            <div className="w-full md:w-2/4 h-52 md:h-full relative mt-0 p-2">
              <h4 className="text-white text-xl md:text-2xl ml-2 md:mt-10">
                {language === "es"
                  ? "Tecnologias utilizadas:"
                  : "Used tecnologies:"}
              </h4>
              <ul className="text-white text-sm sm:text-base p-0 ml-4 mt-2 sm:mt-4 border-collapse flex flex-ro flex-wrap gap-2">
                {tecs.split(",").map((e, index) => {
                  return (
                    <li
                      className="uppercase cursor-pointer py-1 px-2 sm:py-2 sm:px-4 rounded-md border border-white/20 hover:bg-blue"
                      key={index}
                    >
                      {e}
                    </li>
                  );
                })}
              </ul>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-medium absolute bottom-4 right-4 bg-blue py-3 px-6 hover:rounded-xl transition-all hover:bg-pink"
              >
                {language === "es" ? "Ver sitio" : "Live Demo"}
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  };

  const handleClose = () => {
    setModal(false);
  };

  return (
    <div>
      <Head>
        <title>Lucas Dev | Portafolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/logos/logo-blue.svg" />
        <link rel="canonical" href="https://lucasdev.com.ar" />
        <meta property="og:type" content="website" />
        <meta
          name="description"
          content="Portafolio web, donde muestro mis trabajos realizados"
        />
        <meta name="theme-color" content="#007acc" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" property="og:title" content="LucasDev" />
        <meta property="og:image" content="/assets/imagenes/portada.png" />
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
      <ContainerWorks setInfo={setInfo} modal={modal} setModal={setModal} />
      <Footer />
    </div>
  );
}

export default Portafolio;
