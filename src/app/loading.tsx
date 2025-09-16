import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-3">
          <Skeleton className="h-7 w-40" />
          <Skeleton className="h-10 w-2/3" />
          <Skeleton className="h-5 w-1/2" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="h-40 w-full rounded-lg" />
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
