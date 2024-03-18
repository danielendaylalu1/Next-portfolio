import React, { FC } from "react";

interface CardProps {
  children: React.ReactNode;
}

const Card: FC<CardProps> = ({ children }) => {
  return <div className="flex justify-between gap-4 pl-8">{children}</div>;
};

export default Card;
