import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "./globals.css";
import Responsivenav from "@/Component/Home/Navbar/Responsivenav";
import Scrolltotop from "@/Component/Home/Navbar/Scrolltotop";

const font = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Travel world",
  description: "Travel landing page using next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <Responsivenav/>
        {children}
        <Scrolltotop/>
      </body>
    </html>
  );
}