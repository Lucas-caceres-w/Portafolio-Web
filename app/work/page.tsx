'use client';
import { works } from '@/data/works';
import Filtros from '@/app/components/Filtros';
import Works from '@/app/components/Works';
import { useState } from 'react';
import { Filtro } from '../types';
import { BackButton } from '../components/ButtonBack';

const filters = ['Todos', 'Web', 'Video', 'Branding'] as const;

export default function WorksPage() {
   const [active, setActive] = useState<Filtro>('Todos');

   return (
      <main className="mx-auto max-w-7xl px-6 py-24">
         {/* HEADER */}

         <BackButton />
         <header className="mb-16 max-w-3xl">
            <h1 className="text-4xl font-bold text-white">Proyectos</h1>
            <p className="mt-4 text-lg text-gray-400">
               Selección de trabajos en desarrollo web, video y diseño digital.
            </p>
         </header>

         {/* FILTROS */}
         <Filtros active={active} setActive={setActive} />

         {/* GRID */}
         <Works filter={active} works={works} />
      </main>
   );
}
