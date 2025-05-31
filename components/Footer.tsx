import { Navigation } from 'lucide-react';
import { Button } from './ui/button';
import GithubIcon from '@/icons/GithubIcon';
import XIcon from '@/icons/XIcon';
import LinkedInIcon from '@/icons/LinkedInIcon';

export default function Footer() {
  const icons = [
    {
      href: 'https://github.com/Chukwuebuka98',
      icon: GithubIcon,
      label: 'Github',
      hoverColor: 'hover:text-[#181717] duration-300',
      target: '_blank',
    },
    {
      href: 'https://www.linkedin.com/in/chukwuebuka-igwe-6b8a76117/',
      icon: LinkedInIcon,
      label: 'LinkedIn',
      hoverColor: 'hover:text-[#0077b5] duration-300',
      target: '_blank',
    },
    {
      href: 'https://x.com/TrigahN',
      icon: XIcon,
      label: 'Twitter',
      hoverColor: 'hover:text-[#000000] duration-300',
      target: '_blank',
    },
  ];
  return (
    <footer className="py-12 mt-20  w-full">
      <div className="max-w-[1240px] w-full mx-auto px-4 md:px-12">
        <h3 className="text-center text-lg md:text-2xl lg:text-4xl font-bold mb-4 text-gray-300">
          Looking to bring your ideas to life on the web{' '}
          <br className="hidden md:flex" /> or need a passionate software
          engineer for your team?
        </h3>
        <p className="text-center text-sm md:text-base lg:text-lg text-gray-400 m-6">
          {' '}
          I&apos;m ready to help with clean, effective code and a strong drive
          to contribute. Let&apos;s connect and build something great together.
        </p>
        <a
          href="mailto:chukwuebukaemmanuel242@gmail.com"
          className="flex justify-center mb-6"
        >
          <Button className="cursor-pointer text-base font-bold text-gray-300 bg-[var(--brown-color-1)] hover:bg-[var(--brown-color-2)] duration-300 border border-[var(--brown-color-2)] hover:border-[var(--brown-color-1)] transition-transform hover:scale-105 hover:duration-300">
            Get in touch <Navigation />
          </Button>
        </a>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 py-6 mb-10 md:mb-20">
          <p className="text-center text-sm text-[var(--brown-color-2)]">
            Copyright &copy; {new Date().getFullYear()} Chukwuebuka Emmanuel
          </p>

          <div className="flex justify-center items-center gap-4">
            {icons.map(({ href, icon: Icon, target }, index) => (
              <a
                key={index}
                href={href}
                target={target}
                rel="noopener noreferrer"
              >
                <Icon className="h-8 w-8 outline p-1.5 text-gray-300 bg-[var(--brown-color-1)] hover:bg-[var(--brown-color-2)] duration-300 border border-[var(--brown-color-2)] hover:border-[var(--brown-color-1)] transition-transform hover:scale-110 hover:duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
