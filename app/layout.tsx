import { Footer, Navbar } from "@/components";
import { NextUIProvider } from "@nextui-org/react";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import * as React from "react";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], preload: false });

export const metadata: Metadata = {
  title: "FashionFlex",
  description: "FashionFlex description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
