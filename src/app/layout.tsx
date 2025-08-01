import type { Metadata } from "next";
import { Raleway, Poppins, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";
import TopBar from "@/Components/Topbar";
import ConnectFooter from "@/Components/ConnectFooter";
import BottomBar from "@/Components/BottomBar";
import Footer from "@/Components/Footer";
import ScrollToHash from "@/Components/scrollToHash";
import TransitionWrapper from "@/Components/TransitionWrapper";


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
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sahynex",
  description:
    "Sahynex is a leading IT solutions provider, specializing in innovative software development, cloud services, and digital transformation.",
  openGraph: {
    title: "Sahynex - Innovative IT Solutions",
    description:
      "Explore Sahynex's software services, cloud solutions, and digital expertise tailored to transform businesses.",
    url: "https://sahynex.com",
    siteName: "Sahynex",
    images: [
      {
        url: "https://sahynex.vercel.app/logo/sahynex.svg", // Replace with actual image URL
        width: 1200,
        height: 630,
        alt: "Sahynex - Innovative IT Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahynex - Innovative IT Solutions",
    description:
      "Explore Sahynex's software services, cloud solutions, and digital expertise tailored to transform businesses.",
    images: ["https://sahynex.vercel.app/logo/sahynex.svg"], // Replace with actual image URL
    creator: "@sahynex", // Optional: your Twitter handle
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${raleway.variable} ${poppins.variable} antialiased`}
        style={{
          fontFamily:
            "var(--font-raleway), var(--font-poppins), var(--font-geist-sans), sans-serif",
        }}
      >
        <div className="sticky top-0 z-50">
          <TopBar />
          <Header />
        </div>

        <ScrollToHash />
        
        <TransitionWrapper>{children}</TransitionWrapper>


        <ConnectFooter />
        <Footer />
        <BottomBar />
      </body>
    </html>
  );
}

