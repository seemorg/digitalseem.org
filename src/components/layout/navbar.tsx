import Link from "next/link";
import Container from "@/components/ui/container";
import { Logo } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/config";
import MobileMenu from "./mobile-menu";

const links = [
  {
    href: "/#about",
    label: "About",
  },
  {
    href: "/#projects",
    label: "Projects",
  },
  {
    href: "/#team",
    label: "Team",
  },
  {
    href: "/careers",
    label: "Careers",
  },
];

export default function Navbar({
  variant = "default",
}: {
  variant?: "overlay" | "default";
}) {
  return (
    <nav
      className={cn(
        variant === "overlay" &&
          "absolute left-0 right-0 top-0 text-white backdrop-blur-lg",
      )}
      style={
        variant === "overlay"
          ? {
              background: `linear-gradient(180deg, rgba(43, 55, 61, 0.00) 0%, rgba(115, 147, 163, 0.00) 100%)`,
            }
          : undefined
      }
    >
      <Container className="flex items-center justify-between border-b border-white/10 py-4">
        <div className="flex-1">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="w-6 sm:w-8" />
            <span className="text-sm sm:text-base">
              <strong>Seemore</strong> Foundation
            </span>
          </Link>
        </div>

        <ul className="hidden flex-1 items-center justify-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-1 items-center justify-end gap-4 font-bold">
          <Button asChild variant={variant === "overlay" ? "blur" : "outline"}>
            <a href={siteConfig.contact.mailto}>Contact</a>
          </Button>

          <MobileMenu variant={variant} links={links} />
        </div>
      </Container>
    </nav>
  );
}
