import Card from "./Card";
import CardHeader from "./CardHeader";
import CardContent from "./CardContent";
import { WorkExperianceData } from "./WorkExperiance";
import { FC } from "react";
import Image from "next/image";

export interface WorkExperianceCardProps {
  workExperianceData: WorkExperianceData;
}

const WorkExperianceCard: FC<WorkExperianceCardProps> = ({
  workExperianceData,
}) => {
  return (
    <Card>
      <CardHeader>{workExperianceData.year}</CardHeader>
      <CardContent>
        <div className="flex items-center gap-x-4">
          {/* <div className="w-[50px] h-[50px] overflow-hidden p-2 rounded-full border-2 border-white flex items-center justify-center"> */}
          <Image
            src={workExperianceData.logo}
            alt={workExperianceData.company}
            width={60}
            height={60}
            className="rounded-full"
          />
          {/* </div> */}
          <h3 className="text-base text-primary flex flex-col">
            <a
              href={workExperianceData.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 font-bold"
            >
              {workExperianceData.company}
            </a>
            <span className="text-sm">{workExperianceData.role}</span>{" "}
          </h3>
        </div>
        <p className="text-sm text-secondary">
          {workExperianceData.companyDec}
        </p>
        <p className="text-sm text-secondary">{workExperianceData.roleDesc}</p>
        <div className="flex gap-2 flex-wrap">
          {workExperianceData.skills.map((skill) => (
            <h3 className="text-[.8rem] text-green-300" key={skill}>
              {skill} ,
            </h3>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkExperianceCard;
