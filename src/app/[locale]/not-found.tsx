import { Link } from '@/navigation';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="text-xs font-mono text-brand-red uppercase tracking-widest mb-6">
        // 404
      </div>
      <h1 className="font-display text-[clamp(6rem,20vw,14rem)] text-cream tracking-widest leading-none mb-4">
        LOST.
      </h1>
      <p className="text-cream-muted font-body text-base mb-10 max-w-sm">
        This page doesn&apos;t exist. Either the link is dead or you typed something wrong. Happens.
      </p>
      <Link
        href="/"
        className="px-8 py-3 bg-brand-blue text-cream font-mono font-bold text-sm rounded-lg hover:bg-brand-blue-bright active:scale-95 transition-all tracking-widest uppercase"
      >
        Go Home
      </Link>
    </div>
  );
}
