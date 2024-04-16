import React from "react";

const About = () => {
  return (
    <div className="about flex flex-col gap-8 py-4">
      <h2 className="text-primary text-xl">About</h2>
      <p className="text-secondary text-base px-1">
        I am an experienced Full-stack Developer with a proven track record in
        developing high-quality websites and web applications. My expertise lies
        in developing attractive , dynamic and functional website using the
        latest web frameworks and libraries.
      </p>
      <p className="text-secondary text-base px-1">
        I possess in-depth knowledge of popular front end and back end
        frameworks and libraries such as React, Next.js, Express.js, Mongoose
        and more.
      </p>
      <a href="/about" className="text-sky-400 text-sm px-1">
        Read more
      </a>
    </div>
  );
};

export default About;
