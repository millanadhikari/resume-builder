import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = DM_Sans({ subsets: ['latin'] });


export const metadata: Metadata = {
  title: "Resume Builder",
  description: "Free online resume builder.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Header/> */}
        {children}</body>
    </html>
  );
}
