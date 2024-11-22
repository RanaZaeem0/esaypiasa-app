import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "../Provider";
import { AppbarClient } from "../components/AppbarClient";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <AppbarClient />
        <body >{children}</body>
      </Providers>
    </html>
  );
}
