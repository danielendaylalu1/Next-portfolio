import { FaTelegramPlane } from "react-icons/fa";

import { RiLinkedinFill } from "react-icons/ri";

import ContactCard from "./ContactCard";
import { SiUpwork } from "react-icons/si";
import { BiLogoGmail } from "react-icons/bi";

const Contact = () => {
  const contactsData = [
    {
      name: "LinkedIn",
      link: {
        icon: <RiLinkedinFill style={{ color: "#0077B5" }} />,
        link: "https://www.linkedin.com/in/daniel-endaylalu-43b92326a/",
      },
    },
    {
      name: "Telegram",
      link: {
        icon: <FaTelegramPlane style={{ color: "#0088cc" }} />,
        link: "https://t.me/Daylalu",
      },
    },
    {
      name: "Upwork",
      link: {
        icon: <SiUpwork style={{ color: "#4fab4a" }} />,
        link: "https://www.upwork.com/freelancers/~01985b6133b24027d0?mp_source=share",
      },
    },
    {
      name: "G-Mail",
      link: {
        icon: <BiLogoGmail style={{ color: "#c71610" }} />,
        link: "endaylaludaniel@gmail.com",
      },
    },
  ];
  return (
    <div className="flex flex-col gap-16 py-4">
      <h2 className="text-primary text-xl">Contact</h2>
      <div className="flex flex-col gap-8">
        {contactsData.map((contactData, indx) => (
          <ContactCard contactData={contactData} key={indx} />
        ))}
      </div>
    </div>
  );
};

export default Contact;
