import Image from "next/image";

interface CardProps {
  lang: string;
  color: string;
  image: string;
}

function Card(props: CardProps) {
  return (
    <div
      data-aos="zoom-in"
      className={`cursor-pointer w-9/12 sm:w-64 h-40 rounded bg-black2 ${props.color} shadow-md shadow-slate-800 p-5 flex flex-col justify-around items-center`}
    >
      <p className="text-xl font-bold">{props.lang.toUpperCase()}</p>
      <Image className="w-24 drop-shadow-xl" width={100} height={100} src={props.image} alt="image" />
    </div>
  );
}

export default Card;
