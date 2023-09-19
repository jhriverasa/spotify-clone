import "./globals.css";
import localFont from "@next/font/local";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const circular = localFont({
  src: [{ path: "../../public/fonts/CircularSpotifyText-Medium.otf" }],
  variable: "--font-circular",
});

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "Clone for Spotify with NextJS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={circular.className}>{children}</body>
    </html>
  );
}
