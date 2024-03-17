import React from "react";

import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
// import Wellcome from "@/components/Wellcome";

const Home = () => {
  return (
    <>
      {/* <Wellcome /> */}
      <div className="flex flex-col gap-24 max-w-[700px]">
        <h1 className="text-center  text-tertiary ">Daniel Endaylalu.</h1>
        {/* header section */}
        <Header />
        {/* about section */}
        <About />
        {/* skills section */}
        <Skills />
      </div>
    </>
  );
};

export default Home;
