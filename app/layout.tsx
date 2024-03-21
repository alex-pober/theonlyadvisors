import type { Metadata } from "next";
import { Inter, Bungee } from "next/font/google";
import "./globals.css";
import { Theme } from '@radix-ui/themes'
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bungee = Bungee({ subsets: ["latin"], weight: '400', variable: "--font-bungee"})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.theonlyadvisors.com"),
  title: "The Only Advisors",
  description: "The last and only advisors you'll need",
  openGraph: {
    siteName: "The Only Advisors | TOA",
    type: "website",
    url: "https://www.theonlyadvisors.com",
    locale: "en_US",
    images: [{
      url: "https://www.theonlyadvisors.com/logo.png",
      }],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow"
  },
  applicationName: "The Only Advisors | TOA",
  appleWebApp: {
    title: "The Only Advisors | TOA",
    statusBarStyle: "default",
    capable: true
  },
  icons: {
    icon: [
      {
        url: "/icon.ico",
        type: "image/x-icon"
      }
      // add favicon-32x32.png, favicon-96x96.png, android-chrome-192x192.png
    ],
    shortcut: [
      {
        url: "/favicon.ico",
        type: "image/x-icon"
      }
    ],
  },

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
        <Analytics />
      </body>
    </html>
  );
}
