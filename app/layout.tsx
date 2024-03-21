import type { Metadata } from "next";
import { Inter, Bungee } from "next/font/google";
import "./globals.css";
import { Theme } from '@radix-ui/themes'
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bungee = Bungee({ subsets: ["latin"], weight: '400', variable: "--font-bungee"})

export const metadata: Metadata = {
  title: "The Only Advisors",
  description: "The last and only advisors you'll need",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="root" className={`${inter.variable} ${bungee.variable} bg-toa-1`}>
        <Theme>
          <NavBar />
          {children}
          <Footer />
        </Theme>
        <SpeedInsights/>
      </body>
    </html>
  );
}
