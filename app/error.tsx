"use client"

import { useEffect } from "react"

/**
 * FYP — Branded Error Boundary
 * Shown by Next.js App Router when an unhandled error is thrown
 * inside a route segment. Provides a recoverable failure state with
 * a Reload button that calls the framework-provided reset() to
 * re-render the segment.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  // Log to the browser console so the error is visible during demos
  useEffect(() => {
    console.error("[FYP] Unhandled error:", error)
  }, [error])

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

        {/* Error Heading */}
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
            Something went wrong
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
            FYP hit an unexpected snag. Tap reload to get back on track.
          </p>
        </div>

        {/* Reload Button — calls Next.js reset() to re-render the segment */}
        <button
          onClick={reset}
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
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(255, 77, 28, 0.3)',
          }}
        >
          Reload FYP
        </button>

        {/* Error Digest — only visible if Next.js attached a server-side trace id */}
        {error.digest && (
          <p
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: '11px',
              color: '#444444',
              letterSpacing: '0.05em',
            }}
          >
            Error ID: {error.digest}
          </p>
        )}
      </div>
    </div>
  )
}
