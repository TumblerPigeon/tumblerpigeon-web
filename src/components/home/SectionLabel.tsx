export default function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="editorial-label flex items-center gap-3 text-cream-dim">
      <span className="text-brand-accent">{index}</span>
      <span className="h-px w-8 bg-cream/20" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}
