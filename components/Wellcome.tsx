"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { SplitText } from "gsap-trial/SplitText";

gsap.registerPlugin(SplitText);

const headerText = new SplitText("#wellcome-header", { type: "chars" });
let chars = headerText.chars;

const Wellcome = () => {
  //   useGSAP(() => {
  //     const t1 = gsap.timeline();
  //     t1.to("#wellcome", {
  //       left: 0,
  //       duration: 1,
  //     })
  //       .fromTo(
  //         chars,
  //         {
  //           y: -100,
  //         },
  //         {
  //           delay: 0.5,
  //           opacity: 1,
  //           duration: 1.5,
  //           stagger: 0.5,
  //           y: 0,
  //         }
  //       )
  //       .fromTo(
  //         "#wellcome-dot",
  //         {
  //           y: -100,
  //         },
  //         {
  //           opacity: 1,
  //           duration: 1,
  //           y: 0,
  //         }
  //       )
  //       .to("#wellcome-header", {
  //         delay: 0.5,
  //         opacity: 0,
  //         y: -100,
  //       })
  //       .to("#wellcome-dot", {
  //         delay: 0.2,
  //         duration: 0.5,
  //         right: "0%",
  //         width: "100%",
  //       })
  //       .to("#wellcome-dot", {
  //         delay: 0.2,
  //         duration: 1,
  //         height: "100%",
  //         opacity: 0,
  //       })
  //       .to("#wellcome", {
  //         duration: 1,
  //         width: "0px",
  //         height: "0px",
  //         top: "50%",
  //         left: "50%",
  //         opacity: 0,
  //         delay: 0.5,
  //         // borderRadius: "100%",
  //       })
  //       .to("#wellcome", {
  //         display: "none",
  //       });
  //   }, []);
  return (
    <div
      id="wellcome"
      className="wellcome-box flex justify-center items-center absolute top-0 left-[-100%] w-[100%] h-[100%] z-10 bg-slate-950"
      data-splitting
    >
      <h1 id="wellcome-header" className="text-[4rem] text-white opacity-0 ">
        Wellcome{" "}
      </h1>
      <span
        id="wellcome-dot"
        className="text-[4rem] bg-white text-white opacity-0 absolute top-0 right-0"
      >
        .
      </span>
    </div>
  );
};

export default Wellcome;
