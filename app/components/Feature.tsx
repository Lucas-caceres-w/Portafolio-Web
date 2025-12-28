import Link from 'next/link';
import { works } from '@/data/works';

export function FeaturedWorks() {
   return (
      <section className="mx-auto max-w-6xl px-6 py-24" id="projects">
         <h2 className="mb-12 text-center text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
            Trabajos destacados
         </h2>

         <div className="grid gap-8 md:grid-cols-2">
            {works.slice(0, 4).map((work) => (
               <Link
                  key={work.slug}
                  href={`/work/${work.slug}`}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
               >
                  {/* COVER */}
                  <div className="aspect-video overflow-hidden">
                     {work.cover.endsWith('.mp4') ? (
                        <video
                           src={work.cover}
                           autoPlay
                           loop
                           muted
                           playsInline
                           className="h-full w-full object-cover transition group-hover:scale-105"
                        />
                     ) : (
                        <img
                           src={work.cover}
                           alt={work.title}
                           className="h-full w-full object-cover transition group-hover:scale-105"
                        />
                     )}
                  </div>

                  {/* OVERLAY */}
                  <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/80 via-black/30 to-transparent p-6 opacity-0 transition group-hover:opacity-100">
                     <span className="text-sm text-brand-pink">
                        {work.category}
                     </span>
                     <h3 className="text-xl font-semibold text-white">
                        {work.title}
                     </h3>
                     <p className="mt-1 text-sm text-gray-300">
                        {work.shortDesc}
                     </p>
                  </div>
               </Link>
            ))}
         </div>
         <div className="mt-16 text-center">
            <p className="mb-6 text-gray-400">
               Explorá más proyectos y casos reales
            </p>

            <a
               href="/work"
               className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-8 py-4 text-white transition hover:border-brand-pink hover:bg-white/5"
            >
               Ver todos los proyectos
               <span className="text-brand-pink">→</span>
            </a>
         </div>
      </section>
   );
}
