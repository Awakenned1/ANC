import type { Metadata } from "next";
import { Bebas_Neue, Outfit, Dancing_Script } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  weight: "400",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  weight: "700",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tolomane Mnyayiza Region | 2026 Local Government Elections",
  description:
    "Official website of the Tolomane Mnyayiza ANC Region — Countdown to the 2026 Local Government Elections, 4 November 2026.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bebasNeue.variable} ${outfit.variable} ${dancingScript.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
