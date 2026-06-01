import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tolomane Mnyayiza Region | 2026 Local Government Elections",
  description:
    "Official website of the Tolomane Mnyayiza ANC Region — Countdown to the 2026 Local Government Elections, 4 November 2026.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
