import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const poppins = Poppins({
  variable: "--ff-poppins",
  subsets: ["latin"],
  weight: ["600"],
});

const satoshi = localFont({
  variable: "--ff-satoshi",
  src: [
    { path: "../public/fonts/Satoshi-Regular.woff2", weight: "400" },
    { path: "../public/fonts/Satoshi-Medium.woff2", weight: "500" },
    { path: "../public/fonts/Satoshi-Bold.woff2", weight: "700" },
  ],
});

const clashDisplay = localFont({
  variable: "--ff-clash",
  src: "../public/fonts/ClashDisplay-Bold.woff2",
  weight: "700",
});

export const metadata: Metadata = {
  title: "ByteSpace — Hundreds of Courses from Creators",
  description:
    "Unlock your creativity, gain valuable knowledge, and grow your business with ByteSpace's wide range of courses.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${satoshi.variable} ${clashDisplay.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
