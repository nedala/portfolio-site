import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { Experience } from '@/components/experience';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Intro } from '@/components/intro';
import { Projects } from '@/components/projects';
import { SectionDivider } from '@/components/section-divider';
import { ThemeToggle } from '@/components/theme-toggle';
import { TechnicalSkills } from '@/components/technicalskills';

const HomePage = async () => {
  return (
    <>
      <div className="container flex flex-col items-center">
        <Header />
        <Intro />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Projects projectsStarsCount={[]} />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <TechnicalSkills />
        <SectionDivider />
        <Contact />
        <Footer />
      </div>
      <ThemeToggle className="hidden sm:fixed sm:bottom-8 sm:right-8 sm:flex" />
    </>
  );
};

export default HomePage;
