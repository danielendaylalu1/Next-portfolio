import { FC } from "react";

import { FaStar } from "react-icons/fa";

import { GoLinkExternal } from "react-icons/go";

export interface TestimonialData {
  rating: number;
  name: string;
  platform: string;
  desc: string;
  links: {
    live: string;
  };
}

export interface TestimonialCardProps {
  testimonialData: TestimonialData;
}

const iconStyle = {
  color: "#f1f1f1",
  fontSize: "1.1rem",
};

const TestimonialCard: FC<TestimonialCardProps> = ({ testimonialData }) => {
  return (
    <div className="flex justify-between gap-4 pl-8">
      <div className="flex gap-1 card-header">
        {[...Array(testimonialData.rating)].map((_, indx) => (
          <FaStar key={indx} style={{ ...iconStyle, color: "#4fab4a" }} />
        ))}
      </div>

      <div className="flex flex-col gap-4 w-[60%] card-content">
        <h3 className="text-base text-primary">{testimonialData.name}</h3>
        <h3 className="text-sm text-tertiary">{testimonialData.platform}</h3>
        <p className="text-sm text-secondary">{testimonialData.desc}</p>
        <div className="flex gap-8">
          <a
            href={testimonialData.links.live}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GoLinkExternal style={iconStyle} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
