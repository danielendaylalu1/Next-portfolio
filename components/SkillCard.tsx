import { FC } from "react";

export interface SkillData {
  stack: string;
  skills: string[];
}

export interface SkillCardProps {
  skillData: SkillData;
}

const SkillCard: FC<SkillCardProps> = ({ skillData }) => {
  return (
    <div className="flex justify-between gap-4 pl-8">
      <h3 className="text-sm text-tertiary w-[40%] card-header">
        {skillData.stack}
      </h3>
      <div className="w-[60%] flex flex-wrap gap-2 card-content">
        {skillData.skills.map((skill) => (
          <p className="text-primary text-sm" key={skill}>
            {skill} ,
          </p>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
