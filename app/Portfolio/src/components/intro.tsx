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
      className="relative h-screen scroll-mt-96 flex flex-col justify-center items-center text-center px-4 overflow-hidden"
    >
      {/* 🔷 SVG Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <svg
          viewBox="0 0 1024 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-3/4 opacity-5 dark:opacity-20"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1e3a8a" />
            </linearGradient>
          </defs>
          <path
            fill="url(#grad)"
            d="M0,192 C256,384 768,0 1024,192 L1024,1024 L0,1024 Z"
          />
          <path
            fill="url(#grad)"
            opacity="0.2"
            d="M0,512 C256,704 768,320 1024,512 L1024,1024 L0,1024 Z"
          />
        </svg>
      </div>
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
        transition={{ delay: 0.2 }}
        className="max-w text-xl text-left my-6 text-gray-700 dark:text-gray-200"
      >
        I&apos;m <span className="text-blue-500">Seshu Edala</span>. I lead AI, analytics, and cloud transformation initiatives that scale. My work spans data-driven product innovation, enterprise applications, machine learning, and next-gen artificial intelligence.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-row flex-wrap gap-2 items-center justify-center"
      >
        <Button asChild size="lg">
          <Link href="mailto:nedala@gmail.com">
            Email Me<Icons.send className="ml-2 size-4" />
          </Link>
        </Button>
        <Button
          variant="secondary"
          size="lg"
          className="hidden sm:flex text-blue-500 dark:text-blue-500 border border-blue-500 bg-white/10 hover:bg-white/20 backdrop-blur-md"
          asChild
        >
          <a
            href="/nedala.pdf"
            target="_resume"
            rel="noopener noreferrer"
          >
            View CV <Icons.download className="ml-2 size-4" />
          </a>
        </Button>

        <Button
          variant="secondary"
          size="lg"
          className="hidden sm:flex text-blue-500 dark:text-blue-500 border border-blue-500 bg-white/10 hover:bg-white/20 backdrop-blur-md"
          asChild
        >
          <a
            href="https://chatgpt.com/g/g-67bf2be913c88191af0b432c2e108533-jobseshu"
            target="_chatgpt"
            rel="noopener noreferrer"
            aria-label="ChatGPT Link"
          >
            ResumeGPT <Icons.message className="ml-2 size-4" />
          </a>
        </Button>

        <Button size="lg" className="hidden sm:flex" asChild>
          <a
            href="#contact"
            rel="noopener noreferrer"
            aria-label="ChatGPT Link"
            onClick={(e) => {
              e.preventDefault();
              const flowise = document.querySelector('flowise-chatbot');
              const openButton = flowise?.shadowRoot?.querySelector('button') || flowise?.querySelector('button');
              if (openButton) openButton.click();
              else console.warn('Chatbot button not found inside <flowise-chatbot>.');
            }}
          >
            Local RAG Bot <Icons.message className="ml-2 size-4" />
          </a>
        </Button>
        <Button variant="secondary" size="icon" asChild className="hidden sm:flex dark:text-blue-500 border border-blue-500 bg-white/10 hover:bg-white/20 backdrop-blur-md">
          <a href="https://www.linkedin.com/in/seshu-edala-b91b55123/" target="_linkedin" aria-label="Linkedin">
            <Icons.linkedin className="size-6" />
          </a>
        </Button>
        <Button variant="secondary" size="icon" asChild className="hidden sm:flex dark:text-blue-500 border border-blue-500 bg-white/10 hover:bg-white/20 backdrop-blur-md">
          <a href="https://github.com/nedala" target="_github" aria-label="Github">
            <Icons.github className="size-6" />
          </a>
        </Button>
      </motion.div>
    </section>
  );
};
