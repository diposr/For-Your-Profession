import Link from "next/link"

/**
 * FYP — Branded 404 Page
 * Shown by Next.js App Router when a route is not found
 * (e.g., mistyped URL, stale link, or any path outside the app's routes).
 * Keeps the user on-brand and gives them a single-tap path back to the app.
 */
export default function NotFound() {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center px-6"
      style={{ background: '#131313' }}
    >
      <div className="flex flex-col items-center text-center max-w-sm w-full gap-6">
        {/* FYP Wordmark */}
        <h1
          style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: '48px',
            color: '#FAFAFA',
            letterSpacing: '-0.03em',
            lineHeight: 1,
          }}
        >
          FYP
        </h1>

        {/* Accent Divider */}
        <div
          style={{
            width: '48px',
            height: '3px',
            borderRadius: '999px',
            background: '#FF4D1C',
            boxShadow: '0 0 12px rgba(255, 77, 28, 0.5)',
          }}
        />

        {/* 404 Heading — Indonesian, matching the app's primary language */}
        <div>
          <h2
            className="mb-2"
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '22px',
              color: '#FAFAFA',
              letterSpacing: '-0.01em',
            }}
          >
            Halaman tidak ditemukan
          </h2>
          <p
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 400,
              fontSize: '14px',
              color: '#888888',
              lineHeight: 1.5,
            }}
          >
            Tautan ini tidak tersedia di FYP. Ayo kembali ke beranda.
          </p>
        </div>

        {/* Return Button — uses next/link for client-side navigation to / */}
        <Link
          href="/"
          className="w-full max-w-xs transition-transform active:scale-95"
          style={{
            background: '#FF4D1C',
            color: '#FFFFFF',
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: '15px',
            letterSpacing: '0.02em',
            padding: '14px 24px',
            borderRadius: '12px',
            textDecoration: 'none',
            display: 'inline-block',
            boxShadow: '0 8px 24px rgba(255, 77, 28, 0.3)',
          }}
        >
          Kembali ke FYP
        </Link>
      </div>
    </div>
  )
}
