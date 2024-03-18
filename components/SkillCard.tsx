import { FC } from "react";
import Card from "./Card";
import CardHeader from "./CardHeader";

export interface SkillData {
  stack: string;
  skills: string[];
}

export interface SkillCardProps {
  skillData: SkillData;
}

const SkillCard: FC<SkillCardProps> = ({ skillData }) => {
  return (
    <Card>
      <CardHeader>{skillData.stack}</CardHeader>
      <div className="w-[60%] flex flex-wrap gap-2 card-content">
        {skillData.skills.map((skill) => (
          <p className="text-green-300 text-sm" key={skill}>
            {skill} ,
          </p>
        ))}
      </div>
    </Card>
  );
};

export default SkillCard;
