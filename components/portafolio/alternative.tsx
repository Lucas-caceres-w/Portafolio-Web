import Image from "next/image";

interface PropsCards {
  title: string;
  srcImage: string;
  description: string;
  enlace?: string;
  tecs?: string;
  modal: () => void;
  info: ({}) => void;
}

function Alternative(props: PropsCards) {
  const OpenWork = () => {
    props.modal();
    setTimeout(() => {
      props.info({
        titulo: props.title,
        descripcion: props.description,
        imagen: props.srcImage,
        link: props.enlace,
        tecs: props.tecs,
      });
    }, 600);
  };
  return (
    <>
      <Image
        loading="lazy"
        onClick={OpenWork}
        className="object-cover cursor-pointer hover:scale-105 transition-all rounded-md"
        alt={props.title}
        src={props.srcImage}
        width={450}
        height={400}
      />
    </>
  );
}

export default Alternative;
