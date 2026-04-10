// Renders inside src/app/layout.tsx — no <html>/<body> needed here.
export default function RootNotFound() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        flexDirection: 'column',
        textAlign: 'center',
        gap: '1rem',
      }}
    >
      <div style={{ fontSize: '5rem', letterSpacing: '0.1em', lineHeight: 1, color: '#f5e6c8', fontFamily: 'var(--font-bebas), monospace' }}>
        404
      </div>
      <div style={{ color: '#8a7560', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.875rem' }}>
        Page not found
      </div>
      <a
        href="/en"
        style={{ color: '#1a3adb', textDecoration: 'underline', fontSize: '0.875rem', marginTop: '1rem' }}
      >
        ← Back to home
      </a>
    </div>
  );
}
