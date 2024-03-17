import React from "react";
import profileImg from "../assets/images/profile.png";
import Image from "next/image";
import Wellcome from "@/components/Wellcome";

const Home = () => {
  return (
    <>
      {/* <Wellcome /> */}
      <div className="flex flex-col gap-24 max-w-[700px]">
        <h1 className="text-center  text-tertiary ">Daniel Endaylalu.</h1>
        <div className="header flex gap-8 items-center">
          <div className="w-[92px] h-[92px] rounded-full overflow-hidden flex items-center justify-center border border-secondary">
            <Image
              src={profileImg}
              alt="Daniel Endaylalu"
              className="w-[95%]"
            />
          </div>
          {/* header section */}
          <div className="header-content flex flex-col gap-2">
            <h1 className="text-primary text-2xl">Daniel Endaylalu</h1>
            <h3 className="text-secondary text-sm">
              Full-stack web developer.
            </h3>
          </div>
        </div>
        {/* about section */}
        <div className="about flex flex-col gap-8">
          <h2 className="text-primary text-lg">About</h2>
          <p className="text-secondary text-sm">
            I am an experienced Full-stack Developer with a proven track record
            in developing high-quality websites and web applications. My
            expertise lies in developing attractive , dynamic and functional
            website using the latest web frameworks and libraries.
          </p>
          <a href="/about" className="text-sky-400 text-xs">
            Read more
          </a>
        </div>
        {/* skills section */}
        <div className="skills flex flex-col gap-16">
          <h2 className="text-primary text-lg">Skills</h2>
          <div className="skill-card flex justify-between px-6">
            <h3 className="text-sm text-tertiary">Front-end</h3>
            <div className="w-[60%] flex flex-wrap gap-2">
              <p className="text-[0.7rem] text-primary">Html ,</p>
              <p className="text-[0.7rem] text-primary">Css ,</p>
              <p className="text-[0.7rem] text-primary">Javascript ,</p>
              <p className="text-[0.7rem] text-primary">React ,</p>
              <p className="text-[0.7rem] text-primary">Redux ,</p>
              <p className="text-[0.7rem] text-primary">Next.js ,</p>
              <p className="text-[0.7rem] text-primary">Tailwind ,</p>
              <p className="text-[0.7rem] text-primary">Bootstrap ,</p>
            </div>
          </div>
          <div className="skill-card flex justify-between px-6">
            <h3 className="text-sm text-tertiary">Back-end</h3>
            <div className="w-[60%] flex flex-wrap gap-2">
              <p className="text-[0.7rem] text-primary">Node ,</p>
              <p className="text-[0.7rem] text-primary">Express ,</p>
              <p className="text-[0.7rem] text-primary">Mongoose ,</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
