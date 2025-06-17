import Card from "./card-skills";

const data = [
  {
    title: "javascript",
    color: "next",
    image: "/assets/imagenes/javascript.png",
  },
  {
    title: "react",
    color: "next",
    image: "/assets/imagenes/react.png",
  },
  {
    title: "next",
    color: "next",
    image: "/assets/imagenes/nextjs.png",
  },
  {
    title: "node",
    color: "next",
    image: "/assets/imagenes/nodejs.png",
  },
  {
    title: "nest",
    color: "next",
    image: "/assets/imagenes/nest.png",
  },
  {
    title: "typescript",
    color: "next",
    image: "/assets/imagenes/typescript.webp",
  },
  {
    title: "sql",
    color: "next",
    image: "/assets/imagenes/sql.webp",
  },
  {
    title: "php",
    color: "next",
    image: "/assets/imagenes/php.png",
  },
  {
    title: "laravel",
    color: "next",
    image: "/assets/imagenes/laravel.png",
  },
];

function Grid() {
  return (
    <section className="w-full sm:w-9/12 mb-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 m-auto justify-items-center gap-y-6">
      {data.map((e, index) => (
        <Card key={index} lang={e.title} color={e.color} image={e.image} />
      ))}
    </section>
  );
}

export default Grid;
