import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "HR Interview Questions",
  description:
    "A collection of HR interview questions and answers for front-end developers",
  keywords: "HR, interview, questions, front-end, preparation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` bg-secondary grid min-h-screen grid-rows-[80px_1fr_auto] text-gray-900`}
      >
        <Header />
        <main className="container mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
