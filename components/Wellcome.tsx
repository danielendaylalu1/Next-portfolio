"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Wellcome = () => {
  useGSAP(() => {
    const t1 = gsap.timeline();
    t1.to("#wellcome", {
      left: 0,
      duration: 1,
    })
      .fromTo(
        "#wellcome-header",
        {
          y: -100,
        },
        {
          delay: 0.5,
          opacity: 1,
          duration: 1.5,
          stagger: 0.5,
          y: 0,
        }
      )
      .fromTo(
        "#wellcome-dot",
        {
          x: 100,
        },
        {
          opacity: 1,
          duration: 1,
          x: 0,
        }
      )
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
      .to("#wellcome-dot", {
        delay: 0.2,
        duration: 1,
        opacity: 0,
      })
      .to("#wellcome", {
        duration: 1,
        opacity: 0,
        delay: 0.5,
        // borderRadius: "100%",
      })
      .to("#wellcome", {
        display: "none",
      });
  }, []);
  return (
    <div
      id="wellcome"
      className="wellcome-box flex justify-center items-center absolute top-0 left-[-100%] w-[100%] h-[100%] z-10 bg-slate-950"
      data-splitting
    >
      <h1 id="wellcome-header" className="text-[4rem] text-white opacity-0 ">
        Wellcome{" "}
        <span className="text-secondary block text-[1.5rem] text-center">
          Daniel Endaylalu
        </span>
      </h1>
      <span
        id="wellcome-dot"
        className="h-[100%] w-[40px] bg-white text-white opacity-0 absolute top-0 right-0"
      >
        .
      </span>
    </div>
  );
};

export default Wellcome;
