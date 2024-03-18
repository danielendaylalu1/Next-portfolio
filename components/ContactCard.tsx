import React, { FC } from "react";
import { GoArrowUpRight } from "react-icons/go";
import Card from "./Card";
import CardHeader from "./CardHeader";
import CardContent from "./CardContent";

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
    <Card>
      <CardHeader>{contactData.name}</CardHeader>
      <CardContent>
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
      </CardContent>
    </Card>
  );
};

export default ContactCard;
