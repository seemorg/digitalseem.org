import { getMetadata, getViewport } from "@/lib/config";
import { cn } from "@/lib/utils";
import { Inter, Scheherazade_New } from "next/font/google";
import Providers from "./providers";

import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-inter",
});

const scheherazade = Scheherazade_New({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-scheherazade",
});

export const metadata = getMetadata();
export const viewport = getViewport();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#F6F6F4]" suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16482232385"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16482232385');
            `,
          }}
        />
      </head>
      <body
        className={cn(
          "relative min-h-screen w-full font-sans antialiased",
          inter.variable,
          scheherazade.variable,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
