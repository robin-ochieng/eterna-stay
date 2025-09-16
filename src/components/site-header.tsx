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
    <header className="sticky top-0 z-40 w-full bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-semibold tracking-tight">
            <motion.span whileHover={{ letterSpacing: 1 }} transition={{ duration: 0.2 }}>EternaStay</motion.span>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <motion.div key={item.href} whileHover={{ y: -1 }}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors",
                      active && "text-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              );
            })}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <Button asChild size="lg" className="rounded-xl shadow-sm">
              <Link href="/book">Book Now</Link>
            </Button>
          </div>
          <ThemeToggle />
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="flex flex-col gap-4">
                <nav className="grid gap-1 mt-6">
                  {nav.map((item) => (
                    <Link key={item.href} href={item.href} className="px-2 py-2 rounded-md hover:bg-secondary">
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
