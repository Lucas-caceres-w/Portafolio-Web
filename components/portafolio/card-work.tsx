import { GitHub, LinkTwoTone } from "@mui/icons-material";
import Image from "next/image";

interface PropsCards {
  title: string;
  srcImage: string;
  description: string;
  enlace?: string;
  tecs?: string;
}

function Card(props: PropsCards) {
  return (
    <a
      href={props.enlace}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-black2 min-w-54 w-10/12 sm:w-54 md:w-60 lg:w-64 xl:w-68 h-96 pb-2 shadow-md shadow-black2 rounded-md hover:-translate-y-2 hover:scale-105 transition-all duration-150"
    >
      <div className="h-32 mb-5 overflow-hidden">
        <Image
          width={300}
          height={200}
          className="w-full min-w-54 object-cover"
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
        <p className="text-blue uppercase text-xs">
          {props.tecs?.split(",").join(" , ")}
        </p>
      </div>
    </a>
  );
}

export default Card;
