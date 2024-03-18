import { FC, ReactNode } from "react";

export interface CardContentProps {
  children: ReactNode;
}

const CardContent: FC<CardContentProps> = ({ children }) => {
  return (
    <div className="flex flex-col gap-6 w-[60%] card-content">{children}</div>
  );
};

export default CardContent;
