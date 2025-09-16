import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t mt-16">
      <div className="container py-10 grid gap-10 md:grid-cols-4">
        <div className="space-y-3">
          <div className="text-lg font-semibold">EternaStay</div>
          <p className="text-sm text-muted-foreground">Mombasa, Kenya</p>
          <p className="text-sm text-muted-foreground">hello@eternastay.com</p>
          <p className="text-sm text-muted-foreground">+254 700 000 000</p>
          <div className="flex gap-3 pt-2">
            <Link href="#" className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md">Instagram</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md">Facebook</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md">Twitter/X</Link>
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-sm font-semibold">Quick Links</div>
          <nav className="grid gap-2 text-sm" aria-label="Quick links">
            <Link href="/stay" className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md">Stay</Link>
            <Link href="/gallery" className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md">Gallery</Link>
            <Link href="/guide" className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md">Mombasa Guide</Link>
            <Link href="/contact" className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md">Contact</Link>
          </nav>
        </div>
        <div className="space-y-2">
          <div className="text-sm font-semibold">Reservations</div>
          <nav className="grid gap-2 text-sm" aria-label="Reservations">
            <Link href="/book" className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md">Book Now</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md">Special Offers</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md">FAQ</Link>
          </nav>
        </div>
        <div className="space-y-2">
          <div className="text-sm font-semibold">Legal</div>
          <nav className="grid gap-2 text-sm" aria-label="Legal">
            <Link href="#" className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md">Privacy Policy</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md">Terms of Service</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md">Cookie Policy</Link>
          </nav>
        </div>
      </div>
      <div className="border-t py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} EternaStay. All rights reserved.
      </div>
    </footer>
  );
}
