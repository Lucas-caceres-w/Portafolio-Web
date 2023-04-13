interface CardProps {
  lang: string
  color: string
  image: string
}

function Card(props: CardProps) {
  return (
    <div
      data-aos="zoom-in"
      className={`cursor-pointer w-9/12 sm:w-64 h-40 rounded bg-black2 ${props.color} shadow-md shadow-slate-800 p-5 flex flex-col justify-around items-center`}
    >
      <p className="text-xl font-bold">{props.lang.toUpperCase()}</p>
      <img className="w-24 drop-shadow-xl" src={props.image} alt="image" />
    </div>
  )
}

export default Card
