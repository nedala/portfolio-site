'use client';

import { motion } from 'framer-motion';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { projectsData } from '@/lib/data';

type TProject = (typeof projectsData)[number];

type TProps = {
  project: TProject;
  index: number;
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

export const Project = ({ project, index }: TProps) => {
  const { icon, title, description, website } = project;

  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
      className="bg-gray-100 dark:bg-gray-800 flex flex-col items-center rounded p-5 text-center md:w-1/3"
    >
      <div className="bg-muted w-fit rounded-full p-4 dark:text-blue-300 text-blue-400">{icon}</div>
      <a href={website} aria-label="website" target="_blank" rel="noopener noreferrer"><h3 className="my-2 text-lg font-bold text-blue-500">{title}</h3></a>
      <p className="text-muted-foreground">{description}</p>
      <div className="mt-2 flex">
        <Button variant="outline" asChild className="mr-2 px-5 text-blue-300">
          <a href={website} aria-label="website" target="_blank" rel="noopener noreferrer">
            <Icons.globe className="size-5" />
          </a>
        </Button>
      </div>
    </motion.div>
  );
};
