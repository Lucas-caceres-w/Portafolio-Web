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
      className={`w-9/12 sm:w-64 h-44 rounded bg-dark-light ${props.color} shadow-md shadow-black2 p-5 flex flex-col justify-around items-center gap-2`}
    >
      <p className="text-xl font-bold text-green-text">{props.lang.toUpperCase()}</p>
      <Image
        className="w-24 drop-shadow-xl"
        width={100}
        height={100}
        src={props.image}
        alt="image"
      />
    </div>
  );
}

export default Card;
