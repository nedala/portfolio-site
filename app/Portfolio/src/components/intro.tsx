'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const Intro = () => {
  const { ref } = useSectionInView('Home');

  return (
    <section
      ref={ref}
      id="home"
      className="my-10 flex scroll-mt-96 flex-col items-center gap-4 text-center sm:mt-20"
    >
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl font-extrabold leading-tight tracking-tighter sm:text-6xl text-left max-w"
      >
        <span className="text-blue-500">Data, AI, Analytics, Apps, Cloud</span> Professional
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
        }}
        className="max-w text-xl text-left my-6 text-gray-700 dark:text-gray-200"
      >
        I&apos;m <span className="text-blue-500">Seshu Edala</span>. I lead AI, analytics, and cloud transformation initiatives that scale. My work spans data-driven product innovation, enterprise applications, machine learning, and next-gen artificial intelligence.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="flex flex-row gap-2 items-center justify-center"
      >
        <Button asChild size="lg">
          <Link href="mailto:nedala@gmail.com">
            Email Me<Icons.send className="ml-2 size-4" />
          </Link>
        </Button>
        <Button
          variant="secondary"
          size="lg"
          className="hidden sm:flex text-blue-500"
          asChild
        >
          <a href="/nedala.pdf" target="_resume" rel="noopener noreferrer">
            View CV <Icons.download className="ml-2 size-4" />
          </a>
        </Button>
        <Button variant="secondary" size="icon" asChild>
          <a
            href="https://www.linkedin.com/in/seshu-edala-b91b55123/"
            target="_linkedin"
            aria-label="Linkedin"
            download
          >
            <Icons.linkedin className="size-6" />
          </a>
        </Button>
        <Button variant="secondary" size="icon" asChild>
          <a href="https://github.com/nedala" target='_github' aria-label="Github">
            <Icons.github className="size-6" />
          </a>
        </Button>
        <Button variant="secondary" size="icon" asChild>
          <a
            href="https://fedworks.ai"
            target="_website"
            aria-label="Website"
            download
          >
            <Icons.globe className="size-6" />
          </a>
        </Button>
        <Button variant="secondary" size="icon" asChild>
          <a
            href="https://chatgpt.com/g/g-67bf2be913c88191af0b432c2e108533-jobseshu"
            target="_chatgpt"
            aria-label="ChatGPT Link"
            download
          >
            <Icons.message className="size-6" />
          </a>
        </Button>
      </motion.div>
    </section>
  );
};
