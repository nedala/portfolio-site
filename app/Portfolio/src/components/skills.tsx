'use client';

import { motion } from 'framer-motion';

import { companyIcons } from '@/lib/data'; 

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export const Skills = () => {
  return (
    <div className="mt-10 flex w-full flex-wrap justify-between gap-4 px-5 sm:justify-center sm:px-0">
      {companyIcons.map(({ icon }, index) => (
        <motion.div
          key={index}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={index}
          className="transform transition-transform duration-300 hover:scale-105"
        >
          {icon}
        </motion.div>
      ))}
    </div>
  );
};
