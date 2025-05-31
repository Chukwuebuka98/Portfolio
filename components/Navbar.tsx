'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import HomeIcon from '@/icons/HomeIcon';
import GithubIcon from '@/icons/GithubIcon';
import LinkedInIcon from '@/icons/LinkedInIcon';
import XIcon from '@/icons/XIcon';
import DocsIcon from '@/icons/DocsIcon';

const icons = [
  {
    href: '/',
    icon: HomeIcon,
    label: 'Home',
    hoverColor: 'hover:text-[#178d00] duration-300',
    target: '_self',
  },
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
  {
    href: '/resume.pdf',
    icon: DocsIcon,
    label: 'Resume',
    hoverColor: 'hover:text-[#2b2b2b] duration-300',
    target: '_self',
    download: true,
  },
];

export default function Navbar() {
  return (
    <TooltipProvider>
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="fixed top-8 md:top-12 left-1/2 -translate-x-1/2 z-50 w-full max-w-[350px] md:max-w-[400px] bg-white/2 border border-white/10 hover:bg-black/50 rounded-2xl px-3 py-2.5 md:px-4 md:py-3 shadow-lg flex justify-between items-center backdrop-blur hover:duration-400 "
      >
        {icons.map(
          ({ href, icon: Icon, label, hoverColor, target, download }) => (
            <Tooltip key={href}>
              <TooltipTrigger asChild>
                <Link
                  href={href}
                  aria-label={label}
                  target={target}
                  rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                  download={download || undefined}
                  className={`transition-transform hover:scale-115 hover:bg-white hover:rounded-md hover:duration-300 duration-300 p-2 ${hoverColor}`}
                >
                  <Icon className={`w-5 h-5 md:w-6 md:h-6 `} />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="bottom" sideOffset={6} className="text-xs">
                {label}
              </TooltipContent>
            </Tooltip>
          )
        )}
      </motion.nav>
    </TooltipProvider>
  );
}
