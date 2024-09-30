import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
// import { Icons } from "./Icons";
// import { MainNav } from "../main-nav";
// import { MobileNav } from "../mobile-nav";
// import { ModeToggle } from "../mode-toggle";
// import { Icons } from "./Icons";
import { Icons } from "./Icons";
import { MainNav } from "./MainNav";
import { MobileNav } from "./MobileNav";
import { ModeToggle } from "./ModeToggle";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "hidden w-10 px-0 transition-colors hover:text-primary sm:inline-flex"
                )}
              >
                <Icons.gitHub className="h-4 w-4" />
                <span className="sr-only ">Github</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "hidden w-10 px-0 transition-colors hover:text-primary sm:inline-flex"
                )}
              >
                <Icons.linkedIn className="h-4 w-4" />
                <span className="sr-only ">LinkedIn</span>
              </div>
            </Link>

            <ModeToggle />
            <MobileNav />
          </nav>
        </div>
      </div>
    </header>
  );
};
