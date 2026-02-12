export default function NameCardSkeleton() {
  return (
    <div className="bg-card rounded-xl border border-border p-5 shadow-card animate-pulse">
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="h-6 w-28 bg-muted rounded-md mb-2" />
          <div className="h-5 w-16 bg-muted rounded-md" />
        </div>
        <div className="flex flex-col items-end gap-1.5">
          <div className="h-5 w-14 bg-muted rounded-full" />
          <div className="h-5 w-12 bg-muted rounded-full" />
        </div>
      </div>
      <div className="h-4 w-full bg-muted rounded-md mb-2" />
      <div className="h-4 w-3/4 bg-muted rounded-md mb-3" />
      <div className="flex items-center gap-2">
        <div className="h-5 w-16 bg-muted rounded-full" />
        <div className="h-5 w-14 bg-muted rounded-full" />
        <div className="h-5 w-18 bg-muted rounded-full" />
      </div>
    </div>
  );
}
