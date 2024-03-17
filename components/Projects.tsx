import React from "react";
import ProjectCard, { ProjectData } from "./ProjectCard";

const Projects = () => {
  const projectsData: ProjectData[] = [
    {
      year: "2022",
      name: "Story and Review sharing web app. (weshare)",
      desc: "WeShare is a fullstack website that facilitates seamless user interaction by allowing members to post detailed food and place reviews, follow each other, and contribute to vibrant discussions through comments.The platform embodies a user-centric design, prioritizing an intuitive interface for optimal user experience.",
      links: {
        github: "https://github.com/danielendaylalu1/weShare",
        live: "https://weshare-0u15.onrender.com/",
      },
    },
    {
      year: "2024",
      name: "Music Library Management System. (music-explore)",
      desc: "A MERN stack application that allows users to manage their music library. Features include adding, updating and deleting songs, and filtering by genre, artist, and album. The backend is built with Express.js and Node.js, with MongoDB for data storage.",
      links: {
        github: "https://github.com/danielendaylalu1/MusicExplore",
        live: "https://music-explore-eight.vercel.app/",
      },
    },
  ];
  return (
    <div className="flex flex-col gap-16 py-4">
      <h2 className="text-primary text-xl">Projects</h2>
      {projectsData.map((projectData, indx) => (
        <ProjectCard projectData={projectData} key={indx} />
      ))}
    </div>
  );
};

export default Projects;
