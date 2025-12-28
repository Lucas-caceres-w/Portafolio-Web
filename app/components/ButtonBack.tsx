'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export function BackButton() {
   const router = useRouter();

   return (
      <button
         onClick={() => router.back()}
         className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
      >
         <ArrowLeft size={16} />
         Volver
      </button>
   );
}
