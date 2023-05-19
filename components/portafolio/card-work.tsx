import { GitHub, LinkTwoTone } from "@mui/icons-material";
import Image from "next/image";

interface PropsCards {
  title: string;
  srcImage: string;
  description: string;
  enlace?: string;
  repository?: string;
}

function Card(props: PropsCards) {
  return (
    <div
      data-aos="fade-left"
      className="bg-black2 w-56 md:w-60 lg:w-64 xl:w-68 h-96 pb-2 shadow-md shadow-black2 rounded-md hover:translate-y-1 transition-all duration-150"
    >
      <div className="h-36 mb-5 overflow-hidden">
        <Image
          width={300}
          height={200}
          className=" object-cover"
          src={props.srcImage}
          alt="image"
        />
      </div>
      <div className="w-11/12 m-auto">
        <p className="text-2xl font-medium text-gray-500">{props.title}</p>
        <div className="h-36">
          <p className="w-10/12 mt-2 text-sm font-thin m-auto text-gray-200 line-clamp-6">
            {props.description}
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-between mt-2 text-gray-50 w-11/12 m-auto items-center">
        <a
          href={props.enlace}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue cursor-pointer"
        >
          <LinkTwoTone className="-rotate-45" />
        </a>
        <a
          href={props.repository}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink"
        >
          {props.repository ? <GitHub /> : null}
        </a>
      </div>
    </div>
  );
}

export default Card;
