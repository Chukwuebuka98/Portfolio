'use client';
import { BorderTrail } from '@/components/motion-primitives/border-trail';
import Image from 'next/image';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type ExperienceCardProp = {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
  duration?: number;
};

export default function ExperienceCard({
  icon,
  title,
  description,
  delay = 0,
  duration = 2,
}: ExperienceCardProp) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay, duration, ease: 'easeOut' }}
      className="relative flex flex-col rounded-md p-5 border w-full md:w-[calc(50%-0.5rem)]"
      style={{ borderRadius: '12px' }}
    >
      <BorderTrail
        style={{
          boxShadow:
            '0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)',
        }}
        size={100}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />
      <div className="flex gap-6">
        <Image height={100} width={100} src={`/images/${icon}`} alt={title} />
        <div className="space-y-1.5">
          <h3 className="text-lg lg:text-xl font-semibold line-clamp-1 text-gray-300">
            {title}
          </h3>
          <p className="text-sm md:text-[16px] text-[var(--brown-color-2)]">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
