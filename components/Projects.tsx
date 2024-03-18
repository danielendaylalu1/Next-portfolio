import React from "react";
import ProjectCard, { ProjectData } from "./ProjectCard";

const Projects = () => {
  const projectsData: ProjectData[] = [
    {
      year: "Mar 15, 2024",
      name: "Personal portfolio website. (D.E)",
      skills: ["Next.js", "Tailwind", "Gsap"],
      desc: "D.E is my personal portfolio a digital canvas where I showcase my tech journey. Explore my projects, dive into my skills, and read tech-focused blog posts. Crafted with Next.js, styled with Tailwind, and sprinkled with Gsap magic.",
      links: {
        github: "https://github.com/danielendaylalu1/Next-portfolio",
        live: "/",
      },
    },
    {
      year: "Feb 2, 2024",
      name: "Music Library Management System. (music-explore)",
      skills: [
        "React",
        "Redux-toolkit",
        "Redux-Saga",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      desc: "A MERN stack application that allows users to manage their music library. Features include adding, updating and deleting songs, and filtering by genre, artist, and album. The backend is built with Express.js and Node.js, with MongoDB for data storage.",
      links: {
        github: "https://github.com/danielendaylalu1/MusicExplore",
        live: "https://music-explore-eight.vercel.app/",
      },
    },
    {
      year: "Nov 1, 2023",
      name: "Story and Review sharing web app. (weshare)",
      skills: ["React", "Redux-toolkit", "Node.js", "Express", "MongoDB"],
      desc: "WeShare is a fullstack website that facilitates seamless user interaction by allowing members to post detailed food and place reviews, follow each other, and contribute to vibrant discussions through comments.The platform embodies a user-centric design, prioritizing an intuitive interface for optimal user experience.",
      links: {
        github: "https://github.com/danielendaylalu1/weShare",
        live: "https://weshare-0u15.onrender.com/",
      },
    },
    {
      year: "Jun 22, 2023",
      name: "Movie and Tvshow descovoring web app. (movie-watch)",
      skills: ["Next.js", "Redux", "Bootstrap"],
      desc: "Movie-Watch is your gateway to cinematic wonders. Discover movies and TV shows based on ratings, latest releases, and trending buzz. With a sleek and intuitive UI, users can navigate effortlessly and find their entertainment gems. Explore titles, dive into descriptions, and travel through time all in one place.",
      links: {
        github: "https://github.com/danielendaylalu1/movie-watch",
        live: "https://movie-watch-pi.vercel.app/",
      },
    },
    {
      year: "May 29, 2023",
      name: "Shoes store landing page. (chama-store)",
      skills: ["React", "Redux-toolkit", "Bootstrap"],
      desc: "A simple shoes tore landing page website with a user friendly and responsive design implementation.",
      links: {
        github: "https://github.com/danielendaylalu1/chamaStore",
        live: "https://chamastore.onrender.com/",
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
