import Link from "next/link";
import Container from "@/components/ui/container";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Logo } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/config";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { XMarkIcon } from "@heroicons/react/24/outline";

const links = [
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#projects",
    label: "Projects",
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
        variant === "overlay" && "absolute left-0 right-0 top-0 text-white",
      )}
      style={
        variant === "overlay"
          ? {
              background: `linear-gradient(180deg, rgba(43, 55, 61, 0.00) 0%, rgba(115, 147, 163, 0.00) 100%)`,
              backdropFilter: `blur(17px)`,
            }
          : undefined
      }
    >
      <Container className="flex items-center justify-between border-b border-white/10 py-4">
        <div className="flex-1">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="w-8" />
            <span>
              <strong>Seemore</strong> Foundation
            </span>
          </Link>
        </div>

        <ul className="hidden flex-1 items-center justify-center gap-8 sm:flex">
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

          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="icon"
                variant={variant === "overlay" ? "blur" : "outline"}
                className="group sm:hidden"
              >
                <HamburgerMenuIcon className="size-4 group-data-[state=open]:hidden" />
                <XMarkIcon className="hidden size-4 group-data-[state=open]:block" />
              </Button>
            </DialogTrigger>
            <DialogContent
              className="top-[70px] translate-y-0 rounded-2xl p-4"
              overlayClassName="bg-slate-300/50"
              showCloseButton={false}
            >
              <DialogTitle className="sr-only">Menu</DialogTitle>
              <ul className="flex flex-col gap-2 text-lg ">
                {links.map((link) => (
                  <Link
                    href={link.href}
                    key={link.href}
                    className="block w-full p-2"
                  >
                    {link.label}
                  </Link>
                ))}
              </ul>
            </DialogContent>
          </Dialog>
        </div>
      </Container>
    </nav>
  );
}
