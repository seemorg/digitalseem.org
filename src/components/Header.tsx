import { config } from "@/lib/config";
import { Logo } from "./icons";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-col justify-between gap-10 sm:flex-row sm:items-center sm:gap-0">
      <Link href="/" className="flex items-center gap-5">
        <Logo className="h-14 w-auto flex-shrink-0" />
        <h2 className="font-sans text-2xl">{config.org}</h2>
      </Link>

      <div className="flex items-center gap-10">
        <Button
          asChild
          className="flex items-center gap-3 text-lg text-primary-100"
          size="lg"
          variant="link"
        >
          <Link href="/careers">Careers</Link>
        </Button>

        <Button
          asChild
          className="flex items-center gap-3 text-lg text-primary-100"
          size="lg"
          variant="link"
        >
          <a href={`mailto:${config.ceo.email}`}>Get In Touch</a>
        </Button>
      </div>
    </div>
  );
}
