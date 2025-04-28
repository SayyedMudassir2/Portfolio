import React, { Suspense, lazy } from "react";
import Projects from "./Projects/Projects";

const Hero = lazy(() => import("./Hero/hero"));
const Skills = lazy(() => import("./Skills/Skills"));
// const Projects = lazy(() => import("./Projects/Projects"));
const Testimonials = lazy(() => import("./Testimonials/Testimonials"));
const Contact = lazy(() => import("./Contact"));

const Sections = () => {
  return (
    <main className="flex flex-col gap-[142px] w-full md:max-w-screen-lg pt-[236px] md:pt-60 mx-auto">
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </Suspense>
    </main>
  );
};

export default Sections;
