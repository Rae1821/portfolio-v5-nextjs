import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProjectsMasonryDemo from '@/components/projects/ProjectsMasonryDemo';

export default function Home() {
  return (
    <div className="min-h-screen px-4">
      <Header />
      <Hero />
      <ProjectsMasonryDemo />
    </div>
  );
}
