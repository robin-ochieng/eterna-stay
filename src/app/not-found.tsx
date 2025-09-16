import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-6 py-16">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-sm font-medium text-muted-foreground">404 — Page not found</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Oops, we couldn’t find that page
        </h1>
        <p className="mt-4 text-muted-foreground">
          The page you’re looking for may have been moved or no longer exists.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Button asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
