'use client';

import { motion } from 'framer-motion';

import { Button } from '@/components/button';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const Contact = () => {
  const { ref } = useSectionInView('Contact');

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="my-10 w-full scroll-mt-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading
        bheading="Contact"
        heading="Me"
        content={
          <span className="max-w-4xl text-lg align-left text-left">
            <div className="mt-12">I am <span className="text-blue-500 font-bold">open to work</span>. I am a <span className="text-blue-500 font-bold">US citizen with the Top Security Clearance</span> having worked for the federal government (GS-15) until Mar 2025. I am open to relocating from <span className="text-blue-500 font-bold">Austin, TX</span> for the "right" opportunity (aka right leader with a purposeful inclusive growth mindset). Link to my <a href="/nedala.pdf" className="underline-offset-4 hover:underline font-bold text-blue-500" target="_blank">resume</a>. Email me at {' '}
            <a
                className="hover:underline font-bold text-blue-500"
                href="mailto:nedala@gmail.com&subject=Enquiry from Portfolio"
              >
                nedala@gmail.com
              </a> {' '}
            to <span className="text-blue-500 font-bold">discuss a career opportunity.</span> <p className="mt-12">Instead, if you wish to discuss or collaborate on an enterprising idea, please feel free to reach out too.</p>
            </div></span>
        }
      />
    </motion.section>
  );
};
