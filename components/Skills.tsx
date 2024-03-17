import React from "react";
import { SkillData } from "./SkillCard";
import SkillCard from "./SkillCard";

const Skills = () => {
  const skillsData: SkillData[] = [
    {
      stack: "Front-end",
      skills: [
        "Html",
        "Css",
        "Javascript",
        "React",
        "Redux",
        "Next.js",
        "Tailwind",
        "Bootstrap",
      ],
    },
    {
      stack: "Back-end",
      skills: ["Node", "Express", "Mongoose"],
    },
    {
      stack: "Database management",
      skills: ["MongoDB", "PostgreSQL", "GraphQl"],
    },
  ];
  return (
    <div className="skills flex flex-col gap-16 py-4" id="skills">
      <h2 className="text-primary text-xl">Skills</h2>
      {skillsData.map((skillData, indx) => (
        <SkillCard skillData={skillData} key={indx} />
      ))}
    </div>
  );
};

export default Skills;
