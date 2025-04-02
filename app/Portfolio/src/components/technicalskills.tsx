'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { technicalSkillsData } from '@/lib/data';
import { TechnicalSkill } from '@/components/technicalskill';

export const TechnicalSkills = () => {
  const { ref } = useSectionInView('Skills');

  return (
    <section ref={ref} id="skills" className="my-10 w-full scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        viewport={{ once: true }}
        className="text-center" // Center the title
      >
        <SectionHeading
          bheading="Technical"
          heading="Expertise"
        />
      </motion.div>

      {/* Responsive grid layout with proper alignment */}
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 mt-10">
        <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] text-center">
          {technicalSkillsData.map((skill, index) => (
            <TechnicalSkill
              key={skill.category}
              category={skill.category}
              items={skill.items}
              index={index}
            />
          ))}
        </div>
      </div>

    </section>
  );
};
