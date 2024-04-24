import { useContext } from "react";
import es from "../../lib/texts/es.json";
import en from "../../lib/texts/en.json";
import Typed from "react-typed";
import { Idioma } from "../context/languaje";

function Hero() {
  const { language } = useContext<any>(Idioma);
  const texts = language === "es" ? es : en;

  return (
    <div className="hero relative grid place-content-center h-80 sm:h-80 md:h-96 lg:h-[500px] xl:h-[580px] text-center gap-5">
      <div className="hero-image opacity-5 w-full h-full absolute bg-[url('/imagenes/bg-logo.png')]">
        <div className="w-full h-36 absolute top-0 bg-gradient-to-b from-dark to-dark-light/10"></div>
        <div className="w-full h-36 absolute bottom-0 bg-gradient-to-b from-dark-light/10 to-dark"></div>
      </div>
      <h1 className="z-10 text-5xl md:text-6xl lg:text-7xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue to-pink animacion">
        Lucas Dev
      </h1>
      <p className="z-10 font-semibold text-sm md:text-2xl text-white">
        <Typed strings={texts.string} typeSpeed={30} loop={true} />
      </p>
    </div>
  );
}

export default Hero;
