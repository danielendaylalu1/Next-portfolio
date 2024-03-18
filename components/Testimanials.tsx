import React from "react";
import TestimonialCard, { TestimonialData } from "./TestimonialCard";

const iconStyle = {
  fontSize: "1.5rem",
};

const Testimonials = () => {
  const testimonialsData: TestimonialData[] = [
    {
      rating: 5,
      name: "React guy to fix a bug",
      platform: "Upwork",
      desc: '"Highly recommend this developer ,he ables to fix my issues in couple of hours only.Hire him right away!!!."',
      links: {
        live: "https://www.upwork.com/freelancers/~01985b6133b24027d0?mp_source=share",
      },
    },
  ];
  return (
    <div className="flex flex-col gap-16 py-4">
      <h2 className="text-primary text-xl">Testimonials</h2>
      {testimonialsData.map((testimonialData, indx) => (
        <TestimonialCard testimonialData={testimonialData} key={indx} />
      ))}
    </div>
  );
};

export default Testimonials;
