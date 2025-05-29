import Image from 'next/image';
import ProjectCard from './ProjectCard';
import HeaderTitle from './HeaderTitle';
import { InView } from './ui/in-view';
import { projects } from '@/data';
import { AnimatedGroup } from './motion-primitives/animated-group';
import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';
import { Button } from './ui/button';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="mt-20 scroll-mt-30 md:scroll-mt-40 ">
      <InView
        variants={{
          hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
          visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
        }}
        viewOptions={{ margin: '0px 0px -200px 0px' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <HeaderTitle>Here Are Some of My Recent Projects</HeaderTitle>

        <div className="w-full">
          <AnimatedGroup
            preset="scale"
            className="max-w-[900px] grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto"
          >
            {projects.map((project) => (
              <ProjectCard key={project.title}>
                <div className="flex flex-col gap-4 overflow-hidden">
                  <Image
                    src={project.img}
                    alt={project.title}
                    width={500}
                    height={300}
                    style={{ borderRadius: '12px' }}
                    className="object-cover w-full h-full border-[2px]"
                    loading="lazy"
                  />

                  <div className="gap-2 flex flex-col">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-300">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-[16px] leading-5.5 text-[var(--brown-color-2)] line-clamp-2">
                      {project.des}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <TooltipProvider>
                      <div className="flex items-center ml-2">
                        {project.iconLists.map(({ iconName, icon }, index) => (
                          <Tooltip key={index}>
                            <TooltipTrigger
                              style={{
                                transform: `translateX(-${5 * index + 2}px)`,
                              }}
                            >
                              <span>
                                {icon &&
                                  React.createElement(icon, {
                                    className:
                                      'h-6 w-6 md:h-8 md:w-8 bg-black border border-gray-700 rounded-full p-1 md:p-2 hover:bg-gray-800 transition-colors duration-200',
                                  })}
                              </span>
                            </TooltipTrigger>
                            <TooltipContent
                              side="bottom"
                              sideOffset={2}
                              className="text-xs font-medium backdrop:blur-sm p-1.5"
                            >
                              <p>{iconName}</p>
                            </TooltipContent>
                          </Tooltip>
                        ))}
                      </div>
                    </TooltipProvider>

                    <Button
                      asChild
                      className="w-fit self-start bg-[var(--brown-color)] hover:bg-[var(--brown-color-2)] text-white rounded-xl"
                      variant={'outline'}
                    >
                      <Link
                        href={project.link}
                        target="_blank"
                        className="inline-flex items-center group"
                      >
                        View Project
                        <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </ProjectCard>
            ))}
          </AnimatedGroup>
        </div>
      </InView>

      <hr className="my-20 border-t border-white/10" />
    </section>
  );
}
