export default function NameDetailSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl animate-pulse">
      <div className="h-4 w-32 bg-muted rounded-md mb-6" />

      {/* Hero skeleton */}
      <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="h-12 w-48 bg-primary-foreground/20 rounded-lg mb-2" />
            <div className="h-10 w-24 bg-primary-foreground/10 rounded-lg" />
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="h-6 w-20 bg-primary-foreground/10 rounded-full" />
            <div className="h-4 w-16 bg-primary-foreground/10 rounded-md" />
          </div>
        </div>
        <div className="mt-6 flex items-center gap-4">
          <div className="h-8 w-32 bg-primary-foreground/10 rounded-lg" />
          <div className="h-6 w-16 bg-primary-foreground/10 rounded-full" />
          <div className="h-6 w-14 bg-primary-foreground/10 rounded-full" />
        </div>
      </div>

      {/* Meaning skeleton */}
      <div className="bg-card rounded-xl border border-border p-6 mb-6">
        <div className="h-6 w-24 bg-muted rounded-md mb-3" />
        <div className="h-5 w-48 bg-muted rounded-md mb-2" />
        <div className="h-4 w-full bg-muted rounded-md mb-1" />
        <div className="h-4 w-3/4 bg-muted rounded-md" />
      </div>

      {/* References skeleton */}
      <div className="bg-card rounded-xl border border-border p-6 mb-6">
        <div className="h-6 w-40 bg-muted rounded-md mb-4" />
        <div className="bg-teal-light rounded-lg p-4">
          <div className="h-4 w-full bg-muted/50 rounded-md mb-1" />
          <div className="h-4 w-2/3 bg-muted/50 rounded-md mb-2" />
          <div className="h-3 w-32 bg-muted/50 rounded-md" />
        </div>
      </div>
    </div>
  );
}
