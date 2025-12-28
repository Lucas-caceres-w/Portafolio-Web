import type { Work } from '@/data/works';

export default function WorksGrid({
   works,
   filter,
}: {
   works: Work[];
   filter: string;
}) {
   const filteredWorks =
      filter === 'Todos' ? works : works.filter((w) => w.category === filter);

   return (
      <>
         {/* PASAMOS EL SET FILTER DESDE ACA */}
         <div className="hidden" />
         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredWorks.map((work) => (
               <a
                  key={work.slug}
                  href={`/work/${work.slug}`}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:border-[#a20098]/50"
               >
                  {/* MEDIA */}
                  <div className="aspect-video overflow-hidden">
                     {work.cover.endsWith('.mp4') ? (
                        <video
                           src={work.cover}
                           muted
                           loop
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

                  {/* INFO */}
                  <div className="p-6">
                     <span className="text-xs text-brand-blue">
                        {work.category}
                     </span>
                     <h3 className="mt-2 text-xl font-semibold text-white">
                        {work.title}
                     </h3>
                     <p className="mt-2 text-sm text-gray-400">
                        {work.shortDesc}
                     </p>
                  </div>
               </a>
            ))}
         </div>
      </>
   );
}
