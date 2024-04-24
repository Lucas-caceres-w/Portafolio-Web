import { Check } from "@mui/icons-material";
import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";
import { useContext } from "react";
import { Idioma } from "../context/languaje";
import Button from "../layout/boton";
import axios from "axios";

function Form() {
  const [form, setForm] = useState({
    asunto: "",
    email: "",
    mensaje: "",
  });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { language } = useContext<any>(Idioma);

  const HandleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((e) => ({
      ...form,
      [name]: value,
    }));
    console.log(form);
  };

  const TextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((e) => ({
      ...form,
      [name]: value,
    }));
  };

  const OnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("/api/email/mailer", {
        asunto: form.asunto,
        email: form.email,
        mensaje: form.mensaje,
      });
      const json = await res.data;
      if (res.status === 200) {
        formRef.current?.reset();
        setLoading(false);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 2000);
      }
      console.log(json);
    } catch (err) {
      setLoading(false);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex justify-center pt-6 h-[600px] w-full md:w-full lg:w-5/12 xl:w-4/12 bg-dark">
      <div className="flex flex-col items-center w-11/12 h-10/12 justify-between">
        <Image
          className="py-4"
          src={"/assets/logos/logo-pink.svg"}
          alt="Logo"
          width={120}
          height={120}
        />
        <form
          ref={formRef}
          onSubmit={OnSubmit}
          className="flex flex-col justify-evenly h-full w-11/12 md:w-8/12 relative"
        >
          <div className="w-full relative">
            <input
              id="asunto"
              className="rounded-sm placeholder:text-transparent bg-dark-light w-full py-2 border-b-2 border-pink shadow-md shadow-neutral-700 outline-none text-neutral-400 peer"
              type={"text"}
              name="asunto"
              onChange={HandleChange}
              placeholder=" "
            />
            <label
              htmlFor="asunto"
              className="absolute ml-2 text-sm -top-5 left-0 text-green-text peer-focus:text-sm 
              peer-focus:-top-5 transition-all peer-focus:text-green-text  
              font-medium pointer-events-none 
              peer-placeholder-shown:top-1 
              peer-placeholder-shown:text-base
              peer-placeholder-shown:text-neutral-400"
            >
              {language === "es" ? "Asunto *" : "Subject *"}
            </label>
          </div>
          <div className="w-full relative">
            <input
              className="rounded-sm placeholder:text-transparent bg-dark-light w-full py-2 border-b-2 border-pink shadow-md shadow-neutral-700 outline-none text-neutral-400 peer"
              type={"email"}
              name="email"
              onChange={HandleChange}
              placeholder=" "
            />
            <label
              htmlFor="mensaje"
              className="absolute ml-2 text-sm -top-5 left-0 text-green-text peer-focus:text-sm 
              peer-focus:-top-5 transition-all peer-focus:text-green-text  
              font-medium pointer-events-none 
              peer-placeholder-shown:top-1 
              peer-placeholder-shown:text-base
              peer-placeholder-shown:text-neutral-400"
            >
              {language === "es" ? "Correo *" : "Email *"}
            </label>
          </div>
          <div className="w-full relative">
            <textarea
              name="mensaje"
              placeholder="nada"
              onChange={TextAreaChange}
              className="h-36 w-full placeholder:text-transparent resize-none rounded-sm bg-dark-light border-b-2 border-pink shadow-md shadow-neutral-700 outline-none text-neutral-400 peer"
            ></textarea>
            <label
              htmlFor="mensaje"
              className="absolute ml-2 text-sm -top-5 left-0 text-green-text peer-focus:text-sm 
              peer-focus:-top-5 transition-all peer-focus:text-green-text  
              font-medium pointer-events-none 
              peer-placeholder-shown:top-1 
              peer-placeholder-shown:text-base
              peer-placeholder-shown:text-neutral-400"
            >
              {language === "es" ? "Mensaje *" : "Message *"}
            </label>
          </div>
          {/* <button className="bg-pink hover:bg-fuchsia-800 py-2 rounded text-white shadow-md shadow-neutral-700"></button> */}
          <Button className="w-full">
            {language === "es" ? "Enviar" : "Submit"}
          </Button>
          {success && (
            <div className="bg-green-500/70 p-2 text-emerald-900 rounded text-center flex flex-row items-center justify-around">
              <Check />
              <p className="font-medium text-sm">
                {language === "es"
                  ? "Mensaje enviado correctamente!"
                  : "Message sent successfully!"}
              </p>
            </div>
          )}
          {loading === true && (
            <div className="w-full flex justify-center">
              <img className="w-12" src="/assets/loader.svg" alt="loading" />
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default Form;
