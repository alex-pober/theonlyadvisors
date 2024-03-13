import type { Metadata } from "next";
import { Inter, Bungee } from "next/font/google";
import "./globals.css";
import { Theme } from '@radix-ui/themes'
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
      <body className={`${inter.variable} ${bungee.variable}`}>
        <Theme>
          {children}
        </Theme>
      </body>
    </html>
  );
}
