"use client";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "./Icons";
// import { Icons } from "./icons";

export function MainNav() {
  const pathName = usePathname();
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="font-bold ">{siteConfig.name}</span>
      </Link>
      <Link
        href="/blog"
        className={cn(
          "hidden text-sm font-medium transition-colors hover:text-primary sm:inline-block",
          pathName === "/blog" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Blog
      </Link>
      <Link
        href="/about"
        className={cn(
          "hidden text-sm font-medium transition-colors hover:text-primary sm:inline-block",
          pathName === "/about" ? "text-foreground" : "text-foreground/60"
        )}
      >
        About
      </Link>
      <Link
        href="https://iqmalr-docs.vercel.app/"
        target="blank"
        className={cn(
          "hidden text-sm font-medium transition-colors hover:text-primary sm:inline-block",
          pathName === "/about" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Docs
      </Link>
    </nav>
  );
}
