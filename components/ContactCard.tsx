import React, { FC } from "react";
import { GoArrowUpRight } from "react-icons/go";

export interface ContactData {
  name: string;
  link: {
    icon: React.ReactNode;
    link: string;
  };
}

export interface ContactCardProps {
  contactData: ContactData;
}

const ContactCard: FC<ContactCardProps> = ({ contactData }) => {
  return (
    <div className="flex justify-between items-center gap-4 px-8">
      <h3 className="text-sm text-tertiary">{contactData.name}</h3>
      <div className="flex flex-col gap-7 w-[60%] card-content">
        <a
          href={contactData.link.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg self-start flex"
        >
          {contactData.link.icon}{" "}
          <GoArrowUpRight
            style={{
              fontSize: ".85rem",
              color: "#f1f1f1",
              marginLeft: "0.5rem",
            }}
          />
        </a>
      </div>
    </div>
  );
};

export default ContactCard;
