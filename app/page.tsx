import { FeaturedWorks } from './components/Feature';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Value } from './components/Value';

export default function Home() {
   return (
      <main className="min-h-screen bg-[#0b0b0f] text-gray-200">
         <Hero mode='impact' />
         <Value />
         <FeaturedWorks />
         <Footer />
      </main>
   );
}
