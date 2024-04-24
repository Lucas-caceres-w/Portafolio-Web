import {
  ContactEmergencyOutlined,
  ContactEmergencyRounded,
  HomeOutlined,
  HomeRounded,
  Language,
  MailOutlineOutlined,
  MailRounded,
  WorkOutlineOutlined,
  WorkRounded,
} from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { Idioma } from "../context/languaje";
import Loader from "./loader";

function Nav() {
  const router = useRouter();
  const ruta = router.pathname;
  const { language, changeLanguage, load } = useContext<any>(Idioma);

  const CambiarLang = () => {
    if (language === "es") {
      changeLanguage("en");
    }
    if (language === "en") {
      changeLanguage("es");
    }
  };

  return (
    <nav className="h-20 bg-dark flex items-center">
      <Loader loading={load} />
      <section className="w-full md:w-9/12 m-auto flex flex-row justify-around md:justify-between items-center">
        <div className="w-24 w-min-20">
          <Link href={"/"}>
            <Image
              className="w-full"
              src={"/assets/logos/logo-gris.svg"}
              width={"200"}
              height="50"
              alt="logo"
            />
          </Link>
        </div>
        <div className="text-neutral-500 flex flex-row gap-2 font-semibold items-center sm:gap-6">
          <Link
            className={
              ruta === "/"
                ? "text-pink flex flex-row gap-1"
                : "hover:text-pink flex flex-row gap-1"
            }
            href={"/"}
          >
            <Tooltip title={language === "es" ? "Inicio" : "Home"}>
              <span className="flex flex-row gap-1 items-center">
                {ruta === "/" ? <HomeRounded /> : <HomeOutlined />}
                <p className="hidden sm:block">
                  {language === "es" ? "Inicio" : "Home"}
                </p>
              </span>
            </Tooltip>
          </Link>
          <Link
            className={
              ruta === "/portafolio" ? "text-pink " : "hover:text-pink "
            }
            href={"/portafolio"}
          >
            <Tooltip title={language === "es" ? "Portafolio" : "Portfolio"}>
              <span className="flex flex-row gap-1 items-center">
                {ruta === "/portafolio" ? (
                  <WorkRounded />
                ) : (
                  <WorkOutlineOutlined />
                )}
                <p className="hidden sm:block">
                  {language === "es" ? "Portafolio" : "Portfolio"}
                </p>
              </span>
            </Tooltip>
          </Link>
          <Link
            className={ruta === "/contacto" ? "text-pink" : "hover:text-pink"}
            href={"/contacto"}
          >
            <Tooltip title={language === "es" ? "Contacto" : "Contact"}>
              <span className="flex flex-row gap-1 items-center">
                {ruta === "/contacto" ? (
                  <MailRounded />
                ) : (
                  <MailOutlineOutlined />
                )}
                <p className="hidden sm:block">
                  {language === "es" ? "Contacto" : "Contact"}
                </p>
              </span>
            </Tooltip>
          </Link>
          <div className="rounded-full shadow-sm cursor-pointer hover:shadow-black1 flex items-center gap-1 text-pink p-2" onClick={CambiarLang}>
            <Language />
            <button className="font-bold text-pink">
              {language === "es" ? "EN" : "ES"}
            </button>
          </div>
        </div>
      </section>
    </nav>
  );
}

export default Nav;
