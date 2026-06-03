/**
 * FYP — Branded Loading State
 * Shown by Next.js App Router while the React bundle downloads
 * and before the first client-side render. Replaces the blank flash
 * with an on-brand splash screen using the FYP wordmark and accent color.
 */
export default function Loading() {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center"
      style={{ background: '#131313' }}
    >
      <div className="flex flex-col items-center gap-6">
        {/* FYP Wordmark */}
        <h1
          style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: '56px',
            color: '#FAFAFA',
            letterSpacing: '-0.03em',
            lineHeight: 1,
          }}
        >
          FYP
        </h1>

        {/* Animated Accent Bar — pulses using the FYP primary color */}
        <div
          className="relative overflow-hidden"
          style={{
            width: '64px',
            height: '3px',
            borderRadius: '999px',
            background: '#2A2A2A',
          }}
        >
          <div
            className="absolute inset-y-0 left-0 animate-loading-bar"
            style={{
              width: '40%',
              background: '#FF4D1C',
              borderRadius: '999px',
              boxShadow: '0 0 12px rgba(255, 77, 28, 0.6)',
            }}
          />
        </div>

        {/* Subtle Status Label */}
        <p
          style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 500,
            color: '#888888',
            fontSize: '12px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          Loading
        </p>
      </div>

      {/* Keyframes — defined as a global style so we don't depend on tailwind config */}
      <style>{`
        @keyframes loading-bar-slide {
          0%   { transform: translateX(-100%); }
          50%  { transform: translateX(150%); }
          100% { transform: translateX(150%); }
        }
        .animate-loading-bar {
          animation: loading-bar-slide 1.4s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }
      `}</style>
    </div>
  )
}
