import "./globals.css";
import localFont from "next/font/local";
import type { Metadata } from "next";

const circular = localFont({
  src: [
    {
      path: "../../public/fonts/CircularSpotifyText-Medium.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/CircularSpotifyText-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/CircularSpotifyText-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/CircularSpotifyText-MediumItalic.otf",
      weight: "400",
      style: "italic",
    },
  ],
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
