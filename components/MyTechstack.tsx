import FirebaseIcon from '@/icons/FirebaseIcon';
import InfiniteSlider from './InfiniteSlider';
import ReactIcon from '@/icons/ReactIcon';
import NextjsIcon from '@/icons/NextjsIcon';
import GithubIcon from '@/icons/GithubIcon';
import TailwindIcon from '@/icons/TailwindIcon';
import TypescriptIcon from '@/icons/TypescriptIcon';
import ViteIcon from '@/icons/ViteIcon';
import CSSIcon from '@/icons/CSSIcon';
import ReactRouterIcon from '@/icons/ReactRouterIcon';
import ShadcnIcon from '@/icons/Shadcn';
import ZodIcon from '@/icons/ZodIcon';
import HTMLIcon from '@/icons/HTMLIcon';
import GitIcon from '@/icons/GitIcon';
import JavaScriptIcon from '@/icons/JavaScriptIcon';
import FramerMotionIcon from '@/icons/FramerMotionIcon';

export default function MyTechStack() {
  const logos = [
    HTMLIcon,
    CSSIcon,
    TailwindIcon,
    JavaScriptIcon,
    TypescriptIcon,
    ReactIcon,
    NextjsIcon,
    FramerMotionIcon,
    GitIcon,
    GithubIcon,
    ReactRouterIcon,
    FirebaseIcon,
    ViteIcon,
    ShadcnIcon,
    ZodIcon,
    HTMLIcon,
    CSSIcon,
    TailwindIcon,
    JavaScriptIcon,
    TypescriptIcon,
    ReactIcon,
    NextjsIcon,
    FramerMotionIcon,
    GitIcon,
    GithubIcon,
    ReactRouterIcon,
    FirebaseIcon,
    ViteIcon,
    ShadcnIcon,
    ZodIcon,
  ];

  return (
    <InfiniteSlider speed={50} gap="gap-6" className="py-4 my-10">
      {logos.map((LogoIcon, idx) => (
        <LogoIcon
          key={idx}
          className="h-8 md:h-10 w-auto opacity-60 transition hover:opacity-100 hover:scale-110 duration-300 ease-in-out"
        />
      ))}
    </InfiniteSlider>
  );
}
