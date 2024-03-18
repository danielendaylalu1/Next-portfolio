import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

import { orbitron } from "./fonts";

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
    <html lang="en" className={`${orbitron.variable}`}>
      <body>
        {/* <Wellcome /> */}
        <div className="flex h-dvh">
          <Navbar />

          <div className="w-[100%] flex justify-center align-middle px-4 py-8 overflow-y-scroll">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
