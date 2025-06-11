import type { Metadata } from "next";
import "./globals.css";

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
      <body className={`antialiased bg-secondary text-gray-900`}>
        {children}
      </body>
    </html>
  );
}

// import { Inter } from 'next/font/google';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import './globals.css';

// const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: 'HR Interview Questions',
//   description: 'A collection of HR interview questions and answers for front-end developers',
//   keywords: 'HR, interview, questions, front-end, preparation',
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={`${inter.className} bg-secondary text-gray-900`}>
//         <Header />
//         <main className="container mx-auto px-4 py-8">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }
