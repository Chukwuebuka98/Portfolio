import React from 'react';
import { Button } from './ui/button';
import { MoveDown } from 'lucide-react';
import Link from 'next/link';
import { TextEffect } from './motion-primitives/text-effect';
import { AnimatedGroup } from './motion-primitives/animated-group';

const Hero = () => {
  return (
    <section className="mt-30 md:mt-35 scroll-mt-30 md:scroll-mt-35 ">
      <AnimatedGroup
        variants={{
          container: {
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
              },
            },
          },
          item: {
            hidden: { opacity: 0, y: 40, filter: 'blur(4px)' },
            visible: {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              transition: {
                duration: 1.2,
                type: 'spring',
                bounce: 0.3,
              },
            },
          },
        }}
      >
        <h1 className="text-[clamp(2rem,10vw,8rem)] font-bold leading-none tracking-tight uppercase max-w-[1240px] mx-auto">
          <TextEffect
            per="char"
            delay={0.5}
            variants={{
              container: {
                hidden: {
                  opacity: 0,
                },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              },
              item: {
                hidden: {
                  opacity: 0,
                  rotateX: 90,
                  y: 10,
                },
                visible: {
                  opacity: 1,
                  rotateX: 0,
                  y: 0,
                  transition: {
                    duration: 0.2,
                  },
                },
              },
            }}
          >
            Creative
          </TextEffect>
          <TextEffect
            per="char"
            delay={1.5}
            className="text-[var(--brown-color)]"
          >
            Developer
          </TextEffect>
        </h1>

        <TextEffect
          per="char"
          delay={2.5}
          preset="blur"
          className="font-mono text-xs md:text-sm lg:text-base text-white/80 px-1"
        >
          Chukwuebuka Emmanuel / Frontend Engineer
        </TextEffect>

        <hr className="border border-white/10 my-5 md:my-10 lg:mt-15" />

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-5 lg:mb-0">
          <div className="flex gap-4 items-center mb-0 md:mb-5 lg:mb-0">
            <a href="mailto:chukwuebukaemmanuel242@gmail.com">
              <Button className="cursor-pointer hover:scale-102 hover:bg-[var(--brown-color-2)] duration-300 border border-[var(--brown-color-2)] hover:border-[var(--brown-color-1)] transition-transform hover:duration-300 text-sm md:text-base lg:text-lg font-bold text-white bg-[var(--brown-color-1)]">
                Hire Me
              </Button>
            </a>

            <div className="h-9 bg-[#e1f9dc] text-[#178d00] rounded-full text-sm px-4 py-2 inline-flex items-center gap-4">
              <div className="relative">
                {/* Ping circle */}
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-[#178d00] opacity-75 animate-ping"></span>

                {/* Solid dot */}
                <span className="relative inline-flex size-2.5 rounded-full bg-[#178d00]"></span>
              </div>
              Available for work
            </div>
          </div>
          <p className="font-mono text-xs md:text-sm lg:text-base text-[var(--brown-color-2)] px-1 max-w-[400px] md:max-w-[600px] text-justify md:leading-6 hidden md:block">
            <TextEffect as="span" per="line" preset="fade-in-blur">
              Frontend Developer & Creative Technologist focused on crafting
              fast, accessible, and visually engaging web experiences.
              Passionate about performance, security, and pushing the limits of
              modern frontend technologies. Experienced in building responsive,
              maintainable interfaces with an eye for detail and usability.
            </TextEffect>
          </p>
        </div>

        <p className="font-mono text-xs text-[var(--brown-color-2)] px-1 max-w-[400px] lg:max-w-[600px] text-justify leading-5 md:leading-5 md:hidden">
          {/* <TextEffect as="span" per="char" preset="fade">
          Frontend Developer Crafting fast, accessible, and secure web
          experiences with a focus on performance and clean design.
        </TextEffect> */}

          <TextEffect as="span" per="line" preset="fade-in-blur">
            Frontend Developer & Creative Technologist focused on crafting fast,
            accessible, and visually engaging web experiences. Passionate about
            performance, security, and pushing the limits of modern frontend
            technologies. Experienced in building responsive, maintainable
            interfaces with an eye for detail and usability.
          </TextEffect>
        </p>

        <Button
          variant="ghost"
          size="sm"
          className="my-5 text-xs md:text-sm font-serif text-[var(--brown-color-3)] rounded-sm px-4 py-2 transition-all duration-300 ease-in-out uppercase"
          asChild
        >
          <Link href="#projects" scroll={true}>
            Explore my work{' '}
            <MoveDown className=" size-3 inline animate-bounce-slow" />
          </Link>
        </Button>
      </AnimatedGroup>
    </section>
  );
};

export default Hero;
