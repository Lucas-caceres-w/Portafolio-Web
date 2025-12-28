import { BackButton } from '@/app/components/ButtonBack';
import { works } from '@/data/works';

export default async function WorkPage({
   params,
}: {
   params: { slug: string };
}) {
   const { slug } = await params;
   const work = works.find((w) => w.slug === slug);
   //if (!work) return notFound();

   return (
      <main className="mx-auto max-w-5xl px-6 py-24">
         <BackButton />
         <div>
            <span className="text-sm text-brand-pink">{work?.category}</span>
            <h1 className="mt-2 text-4xl font-bold text-white">
               {work?.title}
            </h1>
         </div>

         <p className="mt-6 text-lg text-gray-300">{work?.description}</p>

         {/* MEDIA */}
         <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 max-h-[480px]">
            {work?.cover.endsWith('.mp4') ? (
               <div className="flex justify-center rounded-2xl border border-white/10 bg-black/40 p-10 backdrop-blur">
                  <video
                     src={work.cover}
                     controls
                     className="max-h-[420px] max-w-full rounded-xl object-contain shadow-xl"
                  />
               </div>
            ) : (
               <img
                  src={work?.cover}
                  alt={work?.title}
                  className="h-full w-full object-cover"
               />
            )}
         </div>

         {/* GALERÍA */}
         {work?.gallery && work.gallery.length > 0 && (
            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
               {work.gallery.map((media, i) => (
                  <div
                     key={i}
                     className="overflow-hidden rounded-xl border border-white/10"
                  >
                     {media.endsWith('.mp4') ? (
                        <video
                           src={media}
                           muted
                           autoPlay
                           loop
                           className="h-full w-full object-cover"
                        />
                     ) : (
                        <img
                           src={media}
                           alt={`${work.title} ${i + 1}`}
                           className="h-full w-full object-cover"
                        />
                     )}
                  </div>
               ))}
            </div>
         )}

         {/* TAGS */}
         <div className="mt-6 flex flex-wrap gap-2">
            {work?.tags.map((tag) => (
               <span
                  key={tag}
                  className="rounded-full bg-white/10 px-3 py-1 text-sm text-gray-300"
               >
                  {tag}
               </span>
            ))}
         </div>

         {/* CTA */}
         <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
            <h3 className="text-2xl font-semibold text-white">
               ¿Querés algo así para tu marca?
            </h3>
            <p className="mt-2 text-gray-400">
               Diseñamos y desarrollamos experiencias que venden.
            </p>

            {work?.link && (
               <a
                  href={work?.link}
                  target="_blank"
                  className="mt-6 inline-block rounded-xl bg-brand-blue px-6 py-3 font-semibold text-white transition hover:opacity-90"
               >
                  Ver proyecto online
               </a>
            )}
         </div>
      </main>
   );
}
