import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
    <html lang="en" className="bg-primary" suppressHydrationWarning>
      <body
        className={cn("font-family", calSansFont.variable, familyFont.variable)}
      >
        <div
          className="relative min-h-screen w-full py-16 text-primary-100 antialiased"
          style={{
            fontFeatureSettings: '"liga","dlig"',
          }}
        >
          <Container className="text-2xl font-medium leading-normal sm:text-3xl">
            <Header />
            <div className="h-20" />
            {children}
          </Container>

          <Footer />
        </div>
      </body>
    </html>
  );
}
