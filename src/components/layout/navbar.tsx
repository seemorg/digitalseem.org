import Link from "next/link";
import Container from "@/components/ui/container";
import { Logo } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/config";
import MobileMenu from "./mobile-menu";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

type NavLink = {
  href?: string;
  label: string;
  children?: { href: string; label: string }[];
};

const links: NavLink[] = [
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
    label: "Get Involved",
    children: [
      { href: "/careers", label: "Careers" },
      { href: "https://usul.ai/donate", label: "Donate" },
    ],
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
          "fixed top-0 right-0 left-0 text-white backdrop-blur-lg",
      )}
      style={
        variant === "overlay"
          ? {
              background: `linear-gradient(180deg, rgba(43, 55, 61, 0.40) 0%, rgba(115, 147, 163, 0.00) 100%)`,
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
            <li key={link.label} className="group relative text-nowrap">
              {link.children ? (
                <>
                  <button className="inline-flex items-center gap-1">
                    {link.label}
                    <ChevronDownIcon className="size-4" />
                  </button>
                  <div className="invisible absolute left-1/2 z-50 mt-2 w-44 -translate-x-1/2 rounded-md border border-white/10 bg-white/95 p-1 text-sm text-black opacity-0 shadow-lg backdrop-blur transition-all group-hover:visible group-hover:opacity-100">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded px-3 py-2 hover:bg-black/5"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link href={link.href!}>{link.label}</Link>
              )}
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
