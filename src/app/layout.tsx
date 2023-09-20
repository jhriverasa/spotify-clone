import "./globals.css";
import localFont from "@next/font/local";
import type { Metadata } from "next";

const circular = localFont({
  src: [{ path: "../../public/fonts/CircularSpotifyText-Medium.otf" }],
  variable: "--font-circular",
});

export const metadata: Metadata = {
  title: "Spotify",
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
