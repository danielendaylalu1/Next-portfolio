import { FC } from "react";
import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";

export interface ProjectData {
  year: string;
  name: string;
  desc: string;
  links: {
    github: string;
    live: string;
  };
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
    <div className="flex justify-between gap-4 px-8">
      <h3 className="text-sm text-tertiary">{projectData.year}</h3>
      <div className="flex flex-col gap-4 w-[60%]">
        <h3 className="text-base text-primary">{projectData.name}</h3>
        <p className="text-sm text-secondary">{projectData.desc}</p>
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
        <a href="/projects" className="text-sky-400 text-xs">
          See more
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
