import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Products from '@/components/Products';
import BrandStory from '@/components/BrandStory';
import News from '@/components/News';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Products />
      <BrandStory />
      <News />
      <Footer />
    </main>
  );
}