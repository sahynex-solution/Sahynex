import type { Metadata } from "next";
import { Raleway, Poppins, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";
import TopBar from "@/Components/Topbar";
import ConnectFooter from "@/Components/ConnectFooter";
import BottomBar from "@/Components/BottomBar";
import Footer from "@/Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const raleway = Raleway({ variable: "--font-raleway", subsets: ["latin"] });
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"], // specify weights you need
});

export const metadata: Metadata = {
  title: "Sahynex",
  description: "Sahynex is a leading IT solutions provider, specializing in innovative software development, cloud services, and digital transformation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${raleway.variable} ${poppins.variable} antialiased`}
        style={{ fontFamily: "var(--font-raleway), var(--font-poppins), var(--font-geist-sans), sans-serif" }}
      >
    <TopBar/>
        <Header/>
        {children}
    <ConnectFooter/>
    <Footer/>
    <BottomBar/>
      </body>
    </html>
  );
}
