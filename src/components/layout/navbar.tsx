import Link from "next/link";
import Container from "@/components/ui/container";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Logo } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
          <li>
            <Link href="/#about">About</Link>
          </li>
          <li>
            <Link href="/#projects">Projects</Link>
          </li>
          <li>
            <Link href="/careers">Careers</Link>
          </li>
        </ul>

        <div className="flex flex-1 items-center justify-end gap-4 font-bold">
          <Button variant={variant === "overlay" ? "blur" : "outline"}>
            Contact
          </Button>

          <Button
            size="icon"
            variant={variant === "overlay" ? "blur" : "outline"}
            className="sm:hidden"
          >
            <HamburgerMenuIcon className="size-4" />
          </Button>
        </div>
      </Container>
    </nav>
  );
}
