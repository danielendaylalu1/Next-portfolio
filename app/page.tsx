import React from "react";

import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Wellcome from "@/components/Wellcome";
import Testimonials from "@/components/Testimanials";

const Home = () => {
  return (
    <>
      <Wellcome />
      <div className="flex flex-col gap-20 max-w-[700px]">
        <h1 className="text-center  text-tertiary ">Daniel Endaylalu. </h1>
        {/* header section */}
        <Header />
        {/* about section */}
        <About />
        {/* skills section */}
        <Skills />
        {/* projects section */}
        <Projects />
        {/* testimonials section */}
        <Testimonials />
        {/* contact section */}
        <Contact />
      </div>
    </>
  );
};

export default Home;
