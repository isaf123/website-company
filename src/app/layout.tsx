import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarDesktop from "@/components/NavbarDesktop";
import NavbarMobile from "@/components/NavbarMobile";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarDesktop />
        <NavbarMobile />
        <div className="max-w-[1920px] m-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
