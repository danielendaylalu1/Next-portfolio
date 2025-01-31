import React from 'react';
import WorkExperianceCard from './WorkExperianceCard';

export interface WorkExperianceData {
  year: string;
  company: string;
  companyDec: string;
  role: string;
  roleDesc: string;
  skills: string[];
  link: string;
}

const workExperianceDatas: WorkExperianceData[] = [
  {
    year: 'Jun 21, 2024 - current',
    company: 'Styly.io',
    companyDec:
      'AI Room Design & Interior Design Tool with Free Credits Styly. Redesign your Interior in seconds. Interior design AI: Snap a pic, pick a style, get AI redesigns instantly! 🖌️ Render: Sketches to photorealistic renders.',
    role: 'Front-end developer',
    roleDesc: '',
    skills: ['React', 'Tailwind', 'Antd', 'Redux-toolkit'],
    link: 'https://www.styly.io/',
  },
  {
    year: 'May 17, 2024, - current',
    company: 'Anekonnect',
    companyDec:
      'Anekonnect is a component library with simple drag-and-drop of components in a browser. We’ve removed the need for CAD software, & CAD resources to draw cable assemblies. Application enables Sales/BD managers, survey engineers, planners and  staff members to create professional cable drawings.',
    role: 'Front-end developer',
    roleDesc: '',
    skills: ['React', 'Tailwind', 'Antd', 'Redux'],
    link: 'https://anekonnect.io/',
  },
];

const WorkExperiance = () => {
  return (
    <div className="flex flex-col gap-16 py-4">
      <h2 className="text-primary text-xl">Work Experiance</h2>
      {workExperianceDatas.map((workExperianceData) => {
        return (
          <WorkExperianceCard
            key={workExperianceData.company}
            workExperianceData={workExperianceData}
          />
        );
      })}
    </div>
  );
};

export default WorkExperiance;
