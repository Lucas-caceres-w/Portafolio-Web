import {
  Email,
  FacebookOutlined,
  Instagram,
  LinkedIn,
  Person2Rounded,
  WhatsApp,
  Work,
} from "@mui/icons-material";
import { useContext } from "react";
import { Idioma } from "../context/languaje";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  const { language } = useContext<any>(Idioma);
  const date = new Date(),
    year = date.getFullYear();
  return (
    <div className="bg-black2 w-full">
      <section className="w-11/12 md:w-10/12 m-auto pt-12 grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 items-start justify-around justify-content-center text-neutral-400">
        <div className="flex flex-col gap-2 items-center">
          <Image
            src="/assets/logos/logo-blue.svg"
            className="w-24"
            alt="logo-2"
            width={120}
            height={80}
          />
          <div className="text-left">
            <p>
              {language === "es"
                ? "Optimiza tus proyectos"
                : "Optimize your projects"}
            </p>
            <div className="flex flex-row gap-3 mt-1 justify-evenly font-black text-2xl">
              <a
                href="https://www.facebook.com/LucasDev03/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FacebookOutlined className="hover:text-blue cursor-pointer" />
              </a>
              <a
                href="https://www.instagram.com/lucas.dev.03/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Instagram className="hover:text-blue cursor-pointer" />
              </a>
              <a
                href="https://www.linkedin.com/in/lucasdev03/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <LinkedIn className="hover:text-blue cursor-pointer" />
              </a>
              <a
                href="https://wa.me/message/NLUFXMZBD57GN1"
                rel="noopener noreferrer"
                target="_blank"
              >
                <WhatsApp className="hover:text-blue cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-left">
          <p className="font-semibold text-gray-200 text-2xl flex items-center gap-1">
            <Person2Rounded />
            {language === "es" ? "Sobre mi" : "About me"}
          </p>
          <ul className="flex flex-col gap-2 mt-2 pl-5">
            <li>
              <Link
                href={"/sobremi"}
                className="hover:text-pink hover:underline cursor-pointer"
              >
                {language === "es" ? "Habilidades" : "Skills"}
              </Link>
            </li>
            <li>
              <Link
                href={"/portafolio"}
                className="hover:text-pink hover:underline cursor-pointer"
              >
                {language === "es" ? "Trabajos" : "Works"}
              </Link>
            </li>
            <li>
              <Link
                href={"/#social"}
                className="hover:text-pink hover:underline cursor-pointer"
              >
                {language === "es" ? "Redes" : "Social"}
              </Link>
            </li>
          </ul>
        </div>
        {/* <div className="flex flex-col items-left">
          <p className="font-semibold text-gray-200 text-2xl flex items-center gap-1">
            <Email />
            {language === "es" ? "Contacto" : "Contact"}
          </p>
          <ul className="flex flex-col gap-2 mt-2 pl-5">
            <li>
              <a
                href="https://www.facebook.com/LucasDev03/"
                rel="noopener noreferrer"
                target="_blank"
                className="hover:text-pink hover:underline cursor-pointer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/lucasdev03/"
                rel="noopener noreferrer"
                target="_blank"
                className="hover:text-pink hover:underline cursor-pointer"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/lucas.dev.03/"
                rel="noopener noreferrer"
                target="_blank"
                className="hover:text-pink hover:underline cursor-pointer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/message/NLUFXMZBD57GN1"
                rel="noopener noreferrer"
                target="_blank"
                className="hover:text-pink hover:underline cursor-pointer"
              >
                Whatsapp
              </a>
            </li>
            <li>
              <a
                href="mailto:lucas.caceres.lc@hotmail.com"
                rel="noopener noreferrer"
                target="_blank"
                className="hover:text-pink hover:underline cursor-pointer"
              >
                E-mail
              </a>
            </li>
          </ul>
        </div> */}
        <div className="flex flex-col items-left">
          <p className="font-semibold text-gray-200 text-2xl flex items-center gap-1">
            <Work />
            {language === "es" ? "Trabajos" : "Works"}
          </p>
          <ul className="flex flex-col gap-2 mt-2 pl-5">
            <li>
              <a
                href="https://grafica-fyc.netlify.app/"
                rel="noopener noreferrer"
                target="_blank"
                className="hover:text-pink hover:underline cursor-pointer"
              >
                Grafica FyC
              </a>
            </li>
            <li>
              <a
                href="https://conecty.com.ar/"
                rel="noopener noreferrer"
                target="_blank"
                className="hover:text-pink hover:underline cursor-pointer"
              >
                Conecty IoT
              </a>
            </li>
            <li>
              <a
                href="https://wifnix.com/"
                rel="noopener noreferrer"
                target="_blank"
                className="hover:text-pink hover:underline cursor-pointer"
              >
                Wifnix
              </a>
            </li>
            <li>
              <a
                href="https://pelis-total.vercel.app/"
                rel="noopener noreferrer"
                target="_blank"
                className="hover:text-pink hover:underline cursor-pointer"
              >
                Pelis DB
              </a>
            </li>
          </ul>
        </div>
      </section>
      <div className="border-t-2 border-neutral-500 w-11/12 m-auto mt-6">
        <p className="py-4 text-pink text-xl font-semibold">
          <span className="text-blue">Lucas Dev</span>{" "}
          <span className="font-normal">©</span>{" "}
          <span className="font-medium">{year}</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
