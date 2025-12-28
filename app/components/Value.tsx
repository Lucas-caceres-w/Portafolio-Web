import {
   Code2,
   Palette,
   Film,
   Rocket,
} from "lucide-react";

export function Value() {
   const items = [
      {
         title: "Desarrollo Web",
         desc: "Next.js, React, APIs y plataformas a medida.",
         icon: Code2,
      },
      {
         title: "Diseño & Motion",
         desc: "Identidad visual, animaciones y motion graphics.",
         icon: Palette,
      },
      {
         title: "Edición de Video",
         desc: "Contenido para redes, promos y videos de alto impacto.",
         icon: Film,
      },
      {
         title: "Productos Digitales",
         desc: "Ideas → MVP → producto real listo para escalar.",
         icon: Rocket,
      },
   ];

   return (
      <section className="mx-auto max-w-6xl px-6 py-12 xl:py-24">
         <h2 className="mb-4 text-center text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
            Qué hacemos
         </h2>
         <p className="mx-auto mb-14 max-w-xl text-center text-gray-400">
            Diseño, desarrollo y contenido pensados para marcas que
            quieren destacar.
         </p>

         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item) => {
               const Icon = item.icon;

               return (
                  <div
                     key={item.title}
                     className="
                        group relative overflow-hidden
                        rounded-2xl border border-white/10
                        bg-white/5 p-6 backdrop-blur
                        transition-all duration-300
                        hover:-translate-y-1
                        hover:border-brand-pink/40
                     "
                  >
                     {/* Glow */}
                     <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="absolute -top-24 -left-24 h-48 w-48 bg-brand-blue/20 blur-3xl" />
                     </div>

                     <div className="relative z-10">
                        <Icon className="mb-4 h-8 w-8 text-brand-pink" />

                        <h3 className="text-lg font-semibold text-white">
                           {item.title}
                        </h3>

                        <p className="mt-2 text-sm text-gray-400">
                           {item.desc}
                        </p>
                     </div>
                  </div>
               );
            })}
         </div>
      </section>
   );
}
