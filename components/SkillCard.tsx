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
    <div className="flex justify-between gap-4 px-8">
      <h3 className="text-sm text-tertiary">{skillData.stack}</h3>
      <div className="w-[60%] flex flex-wrap gap-2">
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
