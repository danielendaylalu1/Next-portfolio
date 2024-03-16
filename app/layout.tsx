import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog, faCode, faRocket } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons/faAddressCard";
import Navbar from "@/components/Navbar";
import Wellcome from "@/components/Wellcome";
import { syncopate } from "./fonts";

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
  return (
    <html lang="en" className={`${syncopate.variable}`}>
      <body className={inter.className}>
        <Wellcome />
        <div className="flex h-dvh">
          <Navbar />
          <div className="w-[100%] flex justify-center align-middle">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
