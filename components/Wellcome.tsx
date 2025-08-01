"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useRef } from "react";

const Wellcome = () => {
  const timeline = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    const t1 = gsap.timeline();
    timeline.current = t1;

    t1.to("#wellcome", {
      left: 0,
      duration: 1,
    })
      .fromTo(
        "#wellcome-header",
        { y: -100 },
        {
          delay: 0.5,
          opacity: 1,
          duration: 1.5,
          stagger: 0.5,
          y: 0,
        }
      )
      .fromTo("#wellcome-dot", { x: 100 }, { opacity: 1, duration: 1, x: 0 })
      .to("#wellcome-header", {
        delay: 0.5,
        opacity: 0,
        y: -100,
      })
      .to("#wellcome-dot", {
        delay: 0.2,
        duration: 0.5,
        right: "0%",
        width: "100%",
      })
      .to("#hand", { opacity: 0 })
      .to("#wellcome-dot", {
        delay: 0.1,
        duration: 0.5,
        opacity: 0,
      })
      .to("#wellcome", {
        duration: 0.5,
        opacity: 0,
        delay: 0.5,
      })
      .to("#wellcome", {
        display: "none",
      });
  }, []);

  const skipAnimation = () => {
    timeline.current?.progress(1); // jumps to the end of the timeline
  };

  return (
    <div
      id="wellcome"
      className="wellcome-box flex flex-col gap-5 justify-center items-center absolute top-0 left-[-100%] w-[100%] h-[100%] z-10 bg-slate-950"
      data-splitting
    >
      <Image
        src="/gifs/handwave.gif"
        alt="hand wave"
        width={100}
        height={100}
        className="w-[100px] text-center"
        id="hand"
      />

      <h1
        id="wellcome-header"
        className="sm:text-[4rem] text-[2.25rem] text-white opacity-0"
      >
        Wellcome{" "}
        <span className="text-secondary block sm:text-[1.5rem] text-[1.2rem] text-center">
          Daniel Endaylalu
        </span>
      </h1>

      <span
        id="wellcome-dot"
        className="h-[100%] w-[40px] bg-white text-white opacity-0 absolute top-0 right-0"
      >
        .
      </span>
      {/* Skip Button */}
      <div
        id="wellcome"
        className="wellcome-box flex justify-center items-center absolute top-0 left-[-100%] w-[100%] h-[100%] z-10 bg-slate-950"
        data-splitting
      >
        <Image
          src="/gifs/handwave.gif"
          alt="hand wave"
          width={100}
          height={100}
          className="w-[100px] text-center"
          id="hand"
        />

        <h1
          id="wellcome-header"
          className="sm:text-[4rem] text-[2.25rem] text-white opacity-0"
        >
          Wellcome{" "}
          <span className="text-secondary block sm:text-[1.5rem] text-[1.2rem] text-center">
            Daniel Endaylalu
          </span>
        </h1>

        <span
          id="wellcome-dot"
          className="h-[100%] w-[40px] bg-white text-white opacity-0 absolute top-0 right-0"
        >
          .
        </span>
        {/* Skip Button */}
      </div>
      <button
        onClick={skipAnimation}
        className="z-20 text-white bg-black/50 px-4 py-2 rounded hover:bg-black transition"
      >
        Skip Animation {`>>`}
      </button>
    </div>
  );
};

export default Wellcome;
