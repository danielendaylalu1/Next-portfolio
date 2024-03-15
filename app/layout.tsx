import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog, faCode, faUpDown } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons/faAddressCard";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daniel E. - Fullstack-developer",
  authors: {
    name: "Daniel Endaylalu",
  },
  description:
    "Daniel Endaylalu Personal portfolio showcasing myself and my projects. React, Next.js , Tailwind, Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const iconStyle = {
    color: "#bbbbbb",
    width: "25px",
    height: "25px",
    cursor: "pointer",
  };
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-dvh">
          <nav className="w-[60px] min-w-[60px]  border-solid border-r border-fourth flex flex-col justify-center items-center gap-[2rem]">
            <div className="relative">
              <FontAwesomeIcon icon={faAddressCard} style={iconStyle} />
              <p className="text-primary absolute text-sm">About</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faCode} style={iconStyle} />
            </div>
            <div>
              <FontAwesomeIcon icon={faBlog} style={iconStyle} />
            </div>
          </nav>
          <div className="w-[100%] flex justify-center align-middle">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
