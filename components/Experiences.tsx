import { experience } from '@/data';
import HeaderTitle from './HeaderTitle';
import ExperienceCard from './ExperienceCard';
import MyTechStack from './MyTechstack';

export default function Experiences() {
  return (
    <section className="mt-20 scroll-mt-30 md:scroll-mt-40">
      <HeaderTitle>My Experiences</HeaderTitle>

      <div className="max-w-[900px] flex flex-col md:flex-row md:flex-wrap gap-4 mx-auto mt-4">
        {experience.map(({ thumbnail, title, desc, id, delay, duration }) => (
          <ExperienceCard
            key={id}
            icon={thumbnail}
            title={title}
            description={desc}
            delay={delay}
            duration={duration}
          />
        ))}
      </div>
      <div className="mt-20">
        <MyTechStack />
      </div>
    </section>
  );
}
