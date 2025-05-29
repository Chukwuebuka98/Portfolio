import Experiences from '@/components/Experiences';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';

export default function Page() {
  return (
    <div className="max-w-[1240px] mx-auto px-4 md:px-12">
      <Hero />
      <Projects />
      <Experiences />
    </div>
  );
}
