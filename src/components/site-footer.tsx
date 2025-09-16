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
            <Link href="#" className="text-muted-foreground hover:text-foreground">Instagram</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">Facebook</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">Twitter/X</Link>
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-sm font-semibold">Quick Links</div>
          <nav className="grid gap-2 text-sm">
            <Link href="/stay" className="text-muted-foreground hover:text-foreground">Stay</Link>
            <Link href="/gallery" className="text-muted-foreground hover:text-foreground">Gallery</Link>
            <Link href="/guide" className="text-muted-foreground hover:text-foreground">Mombasa Guide</Link>
            <Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link>
          </nav>
        </div>
        <div className="space-y-2">
          <div className="text-sm font-semibold">Reservations</div>
          <nav className="grid gap-2 text-sm">
            <Link href="/book" className="text-muted-foreground hover:text-foreground">Book Now</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">Special Offers</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">FAQ</Link>
          </nav>
        </div>
        <div className="space-y-2">
          <div className="text-sm font-semibold">Legal</div>
          <nav className="grid gap-2 text-sm">
            <Link href="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">Terms of Service</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">Cookie Policy</Link>
          </nav>
        </div>
      </div>
      <div className="border-t py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} EternaStay. All rights reserved.
      </div>
    </footer>
  );
}
