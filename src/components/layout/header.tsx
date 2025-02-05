import { siteConfig } from "@/lib/config";
import { Logo } from "../ui/icons";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-col justify-between gap-10 sm:flex-row sm:items-center sm:gap-0">
      <Link href="/" className="flex items-center gap-5">
        <Logo className="h-14 w-auto flex-shrink-0" />
        <h2 className="font-sans text-2xl">{siteConfig.org}</h2>
      </Link>

      <div className="flex items-center gap-10">
        <Button
          asChild
          className="text-primary-100 flex items-center gap-3 text-lg"
          size="lg"
          variant="link"
        >
          <Link href="/careers">Careers</Link>
        </Button>

        <Button
          asChild
          className="text-primary-100 flex items-center gap-3 text-lg"
          size="lg"
          variant="link"
        >
          <a href={`mailto:${siteConfig.ceo.email}`}>Get In Touch</a>
        </Button>
      </div>
    </div>
  );
}
