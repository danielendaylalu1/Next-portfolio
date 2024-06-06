import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

import { orbitron } from "./fonts";

export const metadata: Metadata = {
  title: "Fullstack Developer Portfolio - Daniel Endaylalu.",
  authors: {
    name: "Daniel Endaylalu",
  },
  description:
    "Daniel Endaylalu’s personal portfolio showcasing React, Next.js, and Tailwind projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${orbitron.variable}`}>
      <body>
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
