import { getMetadata, getViewport } from "@/lib/config";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Roboto, Scheherazade_New } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-roboto",
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
      <body
        className={cn(
          "relative min-h-screen w-full font-sans antialiased",
          roboto.variable,
          scheherazade.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
