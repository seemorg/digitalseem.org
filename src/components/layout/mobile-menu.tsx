"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "../ui/dialog";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { Button } from "../ui/button";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

type MobileLink = { href?: string; label: string; children?: { href: string; label: string }[] };

export default function MobileMenu({
  variant,
  links,
}: {
  variant: "overlay" | "default";
  links: MobileLink[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  const Icon = isOpen ? XMarkIcon : Bars3Icon;

  return (
    <>
      <Button
        size="icon"
        variant={variant === "overlay" ? "blur" : "outline"}
        className={cn(
          "group z-[51] md:hidden",
          isOpen && "bg-white text-black",
        )}
        onClick={() => setIsOpen(true)}
      >
        <Icon className="size-4 " />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          className="top-[70px] w-full max-w-[calc(100%-2rem)] translate-y-0 rounded-2xl p-4"
          overlayClassName="bg-slate-300/50"
          showCloseButton={false}
        >
          <DialogTitle className="sr-only">Menu</DialogTitle>
          <DialogDescription className="sr-only">Mobile menu</DialogDescription>
          <ul className="flex flex-col gap-2 text-lg ">
            {links.map((link) => (
              <li key={link.label}>
                {link.children ? (
                  <div className="flex flex-col">
                    <span className="block w-full p-2 font-semibold">{link.label}</span>
                    <div className="ml-2 flex flex-col border-l border-black/10 pl-2">
                      {link.children.map((child) => (
                        <Link
                          href={child.href}
                          key={child.href}
                          className="block w-full rounded p-2 hover:bg-black/5"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href!}
                    className="block w-full p-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </DialogContent>
      </Dialog>
    </>
  );
}
