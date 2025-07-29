import { FC } from "react";
import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import CardContent from "./CardContent";
import CardHeader from "./CardHeader";
import Card from "./Card";
import Image from "next/image";

export interface ProjectData {
  year: string;
  name: string;
  desc: string;
  skills: string[];
  links: {
    github: string;
    live: string;
  };
  img?: string;
}

export interface ProjectCardProps {
  projectData: ProjectData;
}

const iconStyle = {
  color: "#f1f1f1",
  fontSize: "1.1rem",
};

const ProjectCard: FC<ProjectCardProps> = ({ projectData }) => {
  return (
    <Card>
      <CardHeader>{projectData.year}</CardHeader>
      <CardContent>
        <>
          {projectData.img ? (
            <Image
              src={projectData.img}
              alt={projectData.name}
              width={480}
              height={480}
              className="rounded-md"
            />
          ) : null}
          <h3 className="text-base text-primary">{projectData.name}</h3>
          <p className="text-sm text-secondary">{projectData.desc}</p>
          <div className="flex gap-2 flex-wrap">
            {projectData.skills.map((skill) => (
              <h3 className="text-[.8rem] text-green-300" key={skill}>
                {skill} ,
              </h3>
            ))}
          </div>
          <div className="flex gap-8">
            <a
              href={projectData.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub style={iconStyle} />
            </a>
            <a
              href={projectData.links.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GoLinkExternal style={iconStyle} />
            </a>
          </div>
          <a href="/projects" className="text-sky-400 text-xs self-start">
            See more
          </a>
        </>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
