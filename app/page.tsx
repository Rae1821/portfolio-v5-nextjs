import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <div className="bg-orange-50 min-h-screen px-4">
      <Header />
      <Hero />
      <Projects />
    </div>
  );
}
