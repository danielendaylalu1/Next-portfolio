import React from "react";
import TestimonialCard, { TestimonialData } from "./TestimonialCard";

const iconStyle = {
  fontSize: "1.5rem",
};

const Testimonials = () => {
  const testimonialsData: TestimonialData[] = [
    {
      rating: 5,
      name: "FRONT END PAGE PREPARATION",
      platform: "Upwork client",
      desc: '"I’ve had the pleasure of working with Daniel for many years—he’s exceptionally talented and always adds a premium touch to every page."',
      links: {
        live: "https://www.upwork.com/ab/g/pub/wom/prx/eyJwZXJzb25VaWQiOiIxNjczMzE2MjcxMjMyNzQ5NTY4IiwiY29udHJhY3RSaWQiOiIzOTE1NDIzOSIsImJhbm5lclR5cGUiOiJjb250cmFjdCIsImJhbm5lclZhcmlhbnQiOiJkZWZhdWx0Iiwid29tIjoiZmx2MiIsInJlZGlyZWN0IjoiZmxfcHJvZmlsZV9wcm9tbyJ9",
      },
    },
    {
      rating: 5,
      name: "React guy to fix a bug",
      platform: "Upwork client",
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
