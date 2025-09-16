"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/stay", label: "Stay" },
  { href: "/gallery", label: "Gallery" },
  { href: "/guide", label: "Mombasa Guide" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full bg-[#101316]/50 dark:bg-[#101316]/60 backdrop-blur-md supports-[backdrop-filter]:bg-[#101316]/45 border-b border-white/10 text-white">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-semibold tracking-tight text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-md">
            <motion.span whileHover={{ letterSpacing: 1 }} transition={{ duration: 0.2 }}>EternaStay</motion.span>
          </Link>
          <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <motion.div key={item.href} whileHover={{ y: -1 }} className="relative">
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm font-medium text-white/90 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-md transform-gpu",
                      active && "text-white"
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                  {active && <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-accent rounded-full" aria-hidden="true" />}
                </motion.div>
              );
            })}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <Button asChild size="lg" className="rounded-full px-5 py-2.5 font-semibold bg-gradient-to-tr from-accent/90 to-accent text-ink hover:brightness-110 focus-visible:ring-2 focus-visible:ring-accent/60">
              <Link href="/book">Book Now</Link>
            </Button>
          </div>
          <ThemeToggle />
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Open menu" className="border-white/30 text-white hover:bg-white/10">
                  <Menu className="h-5 w-5" aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="flex flex-col gap-4" aria-label="Mobile menu">
                <nav className="grid gap-1 mt-6" aria-label="Primary">
                  {nav.map((item) => (
                    <Link key={item.href} href={item.href} className="px-2 py-2 rounded-md hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background" aria-current={pathname === item.href ? "page" : undefined}>
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <Button asChild size="lg" className="mt-2 rounded-xl">
                  <Link href="/book">Book Now</Link>
                </Button>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
