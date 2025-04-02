'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading bheading="About" heading="Me" />
      <div className="flex max-w-6xl flex-col md:flex-row gap-12 items-center justify-between">
        {/* Left Section */}
        <div className="flex-2 text-left text-lg max-w-4xl text-foreground">
          <p className="mb-4">
            I am Narasimha <span className="text-blue-500">&quot;Seshu&quot;</span> Edala, a technology leader with over 25 years of experience driving innovation across
            <span className="text-blue-500"> AI, data, analytics, cloud, and enterprise applications</span>. I&apos;ve led transformative initiatives at
            <span className="text-blue-500"> Microsoft, Google, Intel, Raytheon, HPE</span>, and served in executive roles within the
            <span className="text-blue-500"> U.S. federal sector</span>. My portfolio includes scaling data platforms, engineering real-time AI systems, and launching
            state-of-the-art, enterprise-grade solutions across mission-critical domains.
          </p>
          <p className="mb-4">
            I specialize in turning complexity into clarity: delivering real-world, data-driven outcomes by merging deep technical insight with a
            <span className="text-blue-500"> hands-on, product-first</span> mindset. With over <span className="text-blue-500"> a dozen granted patents</span> in AI and information systems,
            my work bridges R&D innovation and business impact.
          </p>
          <p>
            As the founder of <span className="text-blue-500"> multiple AI ventures</span> and a trusted advisor to both public and private sectors, I thrive at the intersection of strategy, architecture, and applied machine intelligence. I’m always open to transformative collaborations that push boundaries and deliver measurable value.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex mt-0 md:mt-0 max-w-2xl">
          <img
            src="/seshu_guilloche.png"
            alt="Narasimha Seshu Edala"
            width="100%"
            height="100%"
            loading="lazy"
            className="w-72 h-72 rounded-lg border-6 dark:border-gray-500 shadow-xl object-cover"
          />
        </div>
      </div>
      <Skills />
    </motion.section>
  );
};
