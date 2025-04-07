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
            <div>I am <span className="text-blue-500 font-bold">#opentowork</span>. My <a href="/nedala.pdf" className="underline-offset-4 hover:underline font-bold text-blue-500" target="_blank">#resume</a>. Email me at {' '}
            <Button
              variant="link"
              className="text-muted-foreground p-0 font-medium text-lg"
            >
              <a
                className="underline-offset-4 hover:underline font-bold text-blue-500"
                href="mailto:nedala@gmail.com&subject=Enquiry from Portfolio"
              >
                nedala@gmail.com
              </a> 
            </Button>{' '}to discuss a career opportunity. Instead, if you wish to discuss or collaborate on an idea, please feel free to reach out too.
            </div></span>
        }
      />
    </motion.section>
  );
};
