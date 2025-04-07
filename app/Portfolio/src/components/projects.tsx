'use client';

import { motion } from 'framer-motion';

import { Project } from '@/components/project';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { projectsData } from '@/lib/data';

type TProps = {
  projectsStarsCount: number[];
};

export const Projects = ({ projectsStarsCount }: TProps) => {
  const { ref } = useSectionInView('Inc.');

  return (
    <section ref={ref} id="projects" className="my-10 scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.175,
        }}
        viewport={{
          once: true,
        }}
      >
        <SectionHeading
          bheading="Enterprising AI"
          heading="Ventures"
        />
      </motion.div>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {projectsData.map((project, index) => (
          <Project
            key={project.title}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};
