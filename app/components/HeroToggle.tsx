type Props = {
   mode: 'minimal' | 'impact';
   setMode: (mode: 'minimal' | 'impact') => void;
};

export function HeroToggle({ mode, setMode }: Props) {
   return (
      <div className="fixed top-6 right-6 z-50 flex rounded-full bg-white/10 p-1 backdrop-blur">
         <button
            onClick={() => setMode('minimal')}
            className={`px-4 py-2 text-sm rounded-full transition ${
               mode === 'minimal' ? 'bg-white text-black' : 'text-white/70'
            }`}
         >
            Minimal
         </button>

         <button
            onClick={() => setMode('impact')}
            className={`px-4 py-2 text-sm rounded-full transition ${
               mode === 'impact' ? 'bg-[#a20098] text-white' : 'text-white/70'
            }`}
         >
            Impact
         </button>
      </div>
   );
}
