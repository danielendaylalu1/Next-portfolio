import Card from './Card';
import CardHeader from './CardHeader';
import CardContent from './CardContent';
import { WorkExperianceData } from './WorkExperiance';
import { FC } from 'react';

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
        <h3 className="text-base text-primary font-bold">
          <span className="underline">{workExperianceData.role}</span> at{' '}
          <a
            href={workExperianceData.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400"
          >
            {workExperianceData.company}
          </a>
        </h3>
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
        <div className="flex gap-8 text-sky-400 text-sm">
          <a
            href={workExperianceData.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {workExperianceData.link}
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkExperianceCard;
