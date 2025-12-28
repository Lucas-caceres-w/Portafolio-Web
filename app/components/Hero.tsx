'use client';
import { motion } from 'framer-motion';

type HeroProps = {
   mode: 'minimal' | 'impact';
};

export function Hero({ mode }: HeroProps) {
   function ImpactBackground() {
      return (
         <div className="absolute inset-0 overflow-hidden">
            {/* Grid animado */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] bg-[size:40px_40px] animate-grid animate-pulse" />

            {/* Gradientes agresivos */}
            <div className="absolute -top-32 -left-32 h-[600px] w-[600px] animate-pulse duration-75 bg-brand-pink blur-[160px] opacity-40" />
            <div className="absolute bottom-0 -right-32 h-[600px] w-[600px] animate-pulse duration-100 bg-brand-violet blur-[160px] opacity-40" />

            {/* Ruido */}
            <div className="absolute inset-0 bg-[url('/assets/noise.png')] opacity-[0.07] mix-blend-overlay" />
         </div>
      );
   }

   const container = {
      hidden: { opacity: 0, translateY: 10 },
      show: {
         opacity: 1,
         translateY: 0,
         transition: {
            staggerChildren: 0.08, // delay entre hijos
         },
      },
   };

   const item = {
      hidden: { opacity: 0, y: 10 },
      show: { opacity: 1, y: 0 },
   };

   const scrollToProjects = () => {
      const el = document.getElementById('projects');
      if (!el) return;

      el.scrollIntoView({
         behavior: 'smooth',
         block: 'start',
      });
   };

   return (
      <section
         className={`relative min-h-screen flex items-center justify-center transition-all duration-700 ${
            mode === 'minimal' ? 'bg-[#0b0b0f]' : 'bg-[#050507]'
         }`}
      >
         {mode === 'impact' && <ImpactBackground />}

         <div className="relative z-10 text-center max-w-4xl px-6">
            <motion.div variants={container} initial="hidden" animate="show">
               <motion.div variants={item}>
                  <img src={'/assets/logo.png'} className="w-36 m-auto mb-6" />
               </motion.div>

               <motion.div variants={item}>
                  <h1 className="text-5xl md:text-6xl font-extrabold text-white">
                     EMZ <span className="text-brand-pink">MULTIMEDIA</span>
                  </h1>
               </motion.div>
               <motion.div variants={item}>
                  <p className="mt-6 text-lg text-white/80">
                     Diseño, desarrollo y motion para marcas que buscan
                     destacar.
                  </p>
               </motion.div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, y: 5 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
            >
               <button
                  onClick={scrollToProjects}
                  className="mt-10 px-8 py-4 rounded-xl cursor-pointer bg-brand-blue text-white font-semibold hover:scale-105 transition"
               >
                  Ver proyectos
               </button>
            </motion.div>
         </div>
      </section>
   );
}
