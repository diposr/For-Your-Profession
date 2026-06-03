/**
 * Landing Splash - Server-rendered branded intro screen
 * Shows immediately on page load before client hydration completes.
 * Displays FYP branding, tagline, and "Mulai Belajar" call-to-action.
 */
export default function LandingSplash() {
  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center px-4"
      style={{ background: '#131313' }}
    >
      {/* Logo/Wordmark */}
      <div className="flex flex-col items-center gap-6 mb-8">
        <h1
          className="text-7xl font-bold tracking-tight"
          style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            color: '#FFFFFF',
            letterSpacing: '-0.02em',
          }}
        >
          FYP
        </h1>

        {/* Tagline */}
        <p
          className="text-xl text-center max-w-md"
          style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            color: '#A0A0A0',
            fontWeight: 400,
            lineHeight: '1.5',
          }}
        >
          Turn Doom Scrolling into<br />Career Capital
        </p>

        {/* Accent line */}
        <div
          className="w-16 h-1"
          style={{ background: '#FF4D1C', borderRadius: '2px' }}
        />
      </div>

      {/* Call to Action */}
      <button
        className="px-8 py-4 rounded-full font-medium transition-all duration-200 hover:scale-105 active:scale-95"
        style={{
          fontFamily: "'Cabinet Grotesk', sans-serif",
          background: '#FF4D1C',
          color: '#FFFFFF',
          fontSize: '16px',
          letterSpacing: '0.02em',
          boxShadow: '0 8px 24px rgba(255, 77, 28, 0.3)',
        }}
      >
        Mulai Belajar
      </button>

      {/* Footer */}
      <div
        className="absolute bottom-8"
        style={{ color: '#404040', fontSize: '12px' }}
      >
        <span style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
          For Your Profession
        </span>
      </div>
    </div>
  )
}
