import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "For Inayaa ❤️",
  description: "A little surprise made with all my love... just for you, Inayaa."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;1,500;1,600;1,700&family=Quicksand:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-ivory text-blush-700 antialiased">{children}</body>
    </html>
  );
}
