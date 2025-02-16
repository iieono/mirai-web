import type { Metadata } from "next";

import "./globals.css";
import "./fonts.css";

export const metadata: Metadata = {
  title: "Mirai Shop",
  description: "Mirai Shop by iieo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
