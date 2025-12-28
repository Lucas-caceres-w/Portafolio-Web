'use client';

import { Dispatch, SetStateAction, useState } from 'react';
import { Filtro } from '../types';
import { works } from '@/data/works';

const filters = ['Todos', 'Web', 'Video', 'Branding'] as const;

export default function WorksFilters({
   active,
   setActive,
}: {
   active: string;
   setActive: Dispatch<SetStateAction<Filtro>>;
}) {
   const getCountByFilter = (filter: Filtro) => {
      if (filter === 'Todos') return works.length;
      return works.filter((w) => w.category === filter).length;
   };

   return (
      <div className="mb-12 flex flex-wrap gap-3">
         {filters.map((filter) => {
            const count = getCountByFilter(filter);

            return (
               <button
                  onClick={() => setActive(filter)}
                  key={filter}
                  disabled={count === 0}
                  className={`rounded-full px-5 py-2 text-sm transition
   ${
      count === 0
         ? 'opacity-40 cursor-not-allowed'
         : active === filter
         ? 'bg-brand-pink text-white'
         : 'border border-white/20 text-gray-300 hover:border-white/40'
   }`}
               >
                  {filter} ({count})
               </button>
            );
         })}
      </div>
   );
}
