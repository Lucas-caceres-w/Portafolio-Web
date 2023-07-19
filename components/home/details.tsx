import Link from "next/link";
import { useContext } from "react";
import { Idioma } from "../context/languaje";
import es from "../../lib/texts/es.json";
import en from "../../lib/texts/en.json";
import { Computer, Escalator, Speed } from "@mui/icons-material";

function Details() {
  const { language } = useContext<any>(Idioma);
  const texts = language === "es" ? es : en;

  return (
    <main className="w-11/12 pt-10 sm:w-10/12 md:w-9/12 m-auto">
      <p className="text-center font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-300">
        {texts.detailsTitle}
      </p>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4 md:gap-6 lg:gap-8 my-12">
        <article
          data-aos="fade-right"
          className="card-home bg-black2 group/hover rounded-md py-5 shadow-lg shadow-black2 hover:translate-y-2 hover:bg-pink transition-all duration-500"
        >
          <p className="text-neutral-600 flex items-center gap-1 group-hover/hover:text-neutral-300 font-semibold text-xl ml-4 pb-2 transition-all duration-500">
            <Computer />
            {texts.detailOne}
          </p>
          <p className="text-neutral-400 group-hover/hover:text-neutral-300 text-justify m-auto w-10/12 text-xs sm:text-sm md:text-base transition-all duration-500">
            {texts.descripcionOne}
          </p>
          <div className="w-10/12 m-auto flex justify-end">
            <Link
              href={"/portafolio"}
              className="text-white text-base font-medium bg-blue px-4 py-2 rounded my-2 hover:bg-sky-500"
            >
              {texts.buttonOne}
            </Link>
          </div>
        </article>
        <article
          data-aos="fade-left"
          className="card-home bg-black2 group/hover rounded-md py-5 shadow-lg shadow-black2 hover:translate-y-2 hover:bg-pink transition-all duration-500"
        >
          <p className="text-neutral-600 flex items-center gap-1 group-hover/hover:text-neutral-300 font-semibold text-xl ml-4 pb-2 transition-all duration-500">
            <Speed />
            {texts.detailTwo}
          </p>
          <p className="text-neutral-400 group-hover/hover:text-neutral-300 text-justify m-auto w-10/12 text-xs sm:text-sm md:text-base transition-all duration-500">
            {texts.descripcionTwo}
          </p>
          <div className="w-10/12 m-auto flex justify-end">
            <Link
              href={"/contacto"}
              className="text-white text-base font-medium bg-blue px-4 py-2 rounded my-2 hover:bg-sky-500"
            >
              {texts.buttonTwo}
            </Link>
          </div>
        </article>
        <article
          data-aos="fade-up"
          className="card-home bg-black2 group/hover col-span-1 sm:col-span-2 rounded-md py-5 shadow-lg shadow-black2 hover:translate-y-2 hover:bg-pink transition-all duration-500"
        >
          <p className="text-neutral-600 flex items-center gap-1 group-hover/hover:text-neutral-300 font-semibold text-xl ml-4 pb-2 transition-all duration-500">
            <Escalator />
            {texts.detailThree}
          </p>
          <p className="text-neutral-400 group-hover/hover:text-neutral-300 text-justify m-auto w-10/12 text-xs sm:text-sm md:text-base transition-all duration-500">
            {texts.descripcionThree}
          </p>
          <div className="w-10/12 m-auto flex justify-end">
            <Link
              href="/sobremi"
              className="text-white text-base font-medium bg-blue px-4 py-2 rounded my-2 hover:bg-sky-500"
            >
              {texts.buttonThree}
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}

export default Details;
