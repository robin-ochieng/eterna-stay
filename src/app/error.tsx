"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    // console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[60vh] items-center justify-center px-6 py-16">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-sm font-medium text-muted-foreground">Something went wrong</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          We hit a snag while loading this page
        </h1>
        <p className="mt-4 text-muted-foreground">
          Try again and if the problem persists, please contact us.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Button onClick={() => reset()}>Try again</Button>
        </div>
      </div>
    </section>
  );
}
