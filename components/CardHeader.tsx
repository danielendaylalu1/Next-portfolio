import { FC, ReactNode } from "react";

export interface CardHeaderProps {
  children: ReactNode;
}

const CardHeader: FC<CardHeaderProps> = ({ children }) => {
  return (
    <h3 className="text-sm text-tertiary w-[40%] card-header">{children}</h3>
  );
};

export default CardHeader;
