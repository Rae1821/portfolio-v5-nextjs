import React from 'react';
import { Button } from './ui/button';
import Star8 from './stars/s8';

const Hero = () => {
  return (
    <section className="py-44 ">
      <div className="flex flex-col items-center justify-center text-slate-900 relative max-w-[1100px] mx-auto">
        <div className="absolute -top-10 right-20">
          <Star8 size={32} color="orange" />
        </div>
        <div className="absolute bottom-15 left-15">
          <Star8 size={32} color="orange" />
        </div>
        <h1 className="text-2xl text-center md:text-5xl lg:text-6xl font-bold uppercase tracking-wide">
          Rachel Anderson Dooley
        </h1>
        <p className="mt-4 text-sm md:text-base text-center">
          Full Stack Developer, Professional Problem Solver, & Dedicated
          Documenter
        </p>
        <div className="mt-8">
          <Button>View my work</Button>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Hero;
