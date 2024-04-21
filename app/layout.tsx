import type { Metadata } from "next";
import "@/styles/globals.css";
import localFont from "next/font/local";

const googleSans = localFont({
  src: [
    {
      path: "../public/assets/fonts/GoogleSans-Regular_0.ttf",
      weight: "400",
    },
    {
      path: "../public/assets/fonts/GoogleSans-Bold-v1.27.ttf",
      weight: "700",
    },
  ],
  variable: "--font-google",
});
export const metadata: Metadata = {
  title: "Cloud community days 2024 | GDG Cloud Kolkata",
  description: "CCD 2024 Website of GDG Cloud Kolkata",
  icons: "./favicon.ico",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${googleSans.className}`}>{children}</body>
    </html>
  );
}