import { getMetadata, getViewport } from "@/lib/config";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";

import localFont from "next/font/local";

const calSansFont = localFont({
  src: "../fonts/CalSans-SemiBold.ttf",
  variable: "--font-sans",
});

const familyFont = localFont({
  src: [
    {
      path: "../fonts/family-bold.woff2",
      weight: "700",
    },
    {
      path: "../fonts/family-regular.woff2",
      weight: "400",
    },
  ],
  variable: "--font-family",
});

export const metadata = getMetadata();
export const viewport = getViewport();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-primary">
      <body
        className={cn("font-family", calSansFont.variable, familyFont.variable)}
      >
        {children}
      </body>
    </html>
  );
}
