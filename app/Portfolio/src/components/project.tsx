'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);
  const isVideo = website.endsWith('.mp4');
  return (
    <>
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
        <h3 className="my-2 text-lg font-bold text-blue-500">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        <div className="mt-2 flex">
          {isVideo ? (
            <Button
              variant="outline"
              className="mr-2 px-5 text-blue-300"
              onClick={() => setIsModalOpen(true)}
            >
              <Icons.play className="size-5" />
            </Button>
          ) : (
            <Button variant="outline" asChild className="mr-2 px-5 text-blue-300">
              <a href={website} aria-label="website" target="_blank" rel="noopener noreferrer">
                <Icons.globe className="size-5" />
              </a>
            </Button>
          )}
        </div>
      </motion.div>

      {isModalOpen && isVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white dark:bg-gray-900 rounded-lg p-4 max-w-lg w-full">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              onClick={() => setIsModalOpen(false)}
            >
              <Icons.close className="size-5" />
            </button>
            <video
              src={website}
              controls
              autoPlay
              className="w-full rounded mt-6"
            />
          </div>
        </div>
      )}
    </>
  );
};
