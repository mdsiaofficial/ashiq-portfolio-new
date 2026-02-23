import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Md Shoriful Islam Ashiq | Portfolio",
  description: "MERN Stack Developer & Competitive Programmer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
