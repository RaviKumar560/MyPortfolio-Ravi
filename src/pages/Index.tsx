
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1E293B]">
      <Navigation />
      <Hero />
      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
};

export default Index;
