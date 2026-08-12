type SectionRibbonsProps = {
  variant: 'about' | 'pigeonarc' | 'merch' | 'social';
};

export default function SectionRibbons({ variant }: SectionRibbonsProps) {
  return (
    <div className={`section-ribbons section-ribbons--${variant}`} aria-hidden="true">
      <span className="section-ribbons__arc" />
      <span className="section-ribbons__band" />
    </div>
  );
}
