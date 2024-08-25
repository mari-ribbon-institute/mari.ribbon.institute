import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mari",
  description: "Software Company by Ribbon Institute",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth container mx-auto text-paragraph text-light-foreground bg-light-background dark:text-dark-foreground dark:bg-dark-background">
      <body className={inter.className}>
        <Header />
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
