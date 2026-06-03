"use client"

import { useAppState } from "@/hooks/use-app-state"
import { useDemoMode } from "@/hooks/use-demo-mode"
import OnboardingScreen from "@/components/screens/onboarding"
import FeedScreen from "@/components/screens/feed"
import QuestScreen from "@/components/screens/quest"
import ProfileScreen from "@/components/screens/profile"
import BottomNav from "@/components/bottom-nav"

/**
 * Demo mode overlay — small floating badge with a progress bar.
 * Shown only when ?demo=1 is in the URL. Auto-cycles tabs and shows
 * the judge a visible countdown of when the next tab will activate.
 */
function DemoOverlay({
  activeTab,
  timeRemaining,
  totalDuration,
}: {
  activeTab: "feed" | "quest" | "profile"
  timeRemaining: number
  totalDuration: number
}) {
  const progress =
    totalDuration > 0
      ? Math.max(0, Math.min(1, 1 - timeRemaining / totalDuration))
      : 0
  const tabLabel =
    activeTab === "feed"
      ? "Feed"
      : activeTab === "quest"
        ? "Quest"
        : "Profile"
  return (
    <div
      className="fixed z-50 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      style={{ top: "max(12px, env(safe-area-inset-top, 12px))" }}
      aria-hidden="true"
    >
      <div
        className="flex items-center gap-2 px-3 py-1.5 rounded-full shadow-lg"
        style={{
          background: "rgba(13, 27, 42, 0.85)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          border: "1px solid rgba(255, 77, 28, 0.4)",
        }}
      >
        <span
          className="inline-block w-2 h-2 rounded-full animate-pulse"
          style={{ background: "#FF4D1C" }}
        />
        <span
          style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: "11px",
            letterSpacing: "0.12em",
            color: "#FF4D1C",
            textTransform: "uppercase",
          }}
        >
          DEMO MODE
        </span>
        <span
          style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: "11px",
            fontWeight: 500,
          }}
        >
          · {tabLabel}
        </span>
      </div>
      {/* Progress bar */}
      <div
        className="rounded-full overflow-hidden"
        style={{
          width: "140px",
          height: "3px",
          background: "rgba(255, 255, 255, 0.08)",
        }}
      >
        <div
          style={{
            width: `${progress * 100}%`,
            height: "100%",
            background:
              "linear-gradient(90deg, #FF4D1C 0%, #FF8C42 100%)",
            transition: "width 0.1s linear",
          }}
        />
      </div>
    </div>
  )
}

/**
 * FYP App Root Component
 * Orchestrates the complete user flow:
 * 1. Hydration Guard - Ensures client-side state is ready
 * 2. Onboarding - Career track selection
 * 3. Main Dashboard - Tab-based navigation between Feed, Quest, and Profile
 * Fully persistent with localStorage and production-ready
 */
export default function FYPApp() {
  const appState = useAppState()
  const demo = useDemoMode()

  // In demo mode, override real state. Real state is left untouched.
  const activeTab = demo.isDemo ? demo.activeTab : appState.activeTab
  const hasOnboarded = demo.isDemo ? true : appState.hasOnboarded
  const selectedCareer = demo.isDemo
    ? demo.selectedCareer
    : appState.selectedCareer
  const setActiveTab = demo.isDemo
    ? () => {
        /* no-op: demo mode drives tab changes via its own timer */
      }
    : appState.setActiveTab
  const completeOnboarding = demo.isDemo
    ? () => {
        /* no-op: demo mode pre-onboards via demo.selectedCareer */
      }
    : appState.completeOnboarding
  const isHydrated = demo.isDemo ? true : appState.isHydrated

  // ==============================
  // 1. HYDRATION GUARD - Loading State
  // ==============================
  if (!isHydrated) {
    return (
      <div
        className="min-h-screen w-full flex items-center justify-center"
        style={{ background: '#0A0A0A' }}
      >
        {/* Stylized Loading Spinner */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-16 h-16">
            <div
              className="absolute inset-0 rounded-full animate-spin"
              style={{
                background: 'conic-gradient(from 0deg, #FF4D1C 0%, transparent 70%)',
                border: '2px solid transparent',
              }}
            />
            <div
              className="absolute inset-1 rounded-full"
              style={{ background: '#0A0A0A' }}
            />
          </div>
          <p
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 500,
              color: '#FF4D1C',
              fontSize: '14px',
              letterSpacing: '0.05em',
            }}
          >
            INITIALIZING
          </p>
        </div>
      </div>
    )
  }

  // ==============================
  // 2. ONBOARDING FLOW
  // ==============================
  // On mobile (<md): render fullscreen — OnboardingScreen already uses min-h-screen + w-full.
  // On desktop (>=md): wrap in a centered 390x844 phone frame for a prototype demo look.
  if (!hasOnboarded) {
    return (
      <div
        className="min-h-screen w-full md:flex md:items-center md:justify-center md:px-4"
        style={{ background: '#0A0A0A' }}
      >
        {/* Desktop-only centered Mobile Frame */}
        <div
          className="hidden md:block w-full max-w-sm shadow-2xl overflow-hidden"
          style={{
            width: '390px',
            height: '844px',
            borderRadius: '40px',
            border: '8px solid #1A1A1A',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8)',
            background: '#0A0A0A',
          }}
        >
          <OnboardingScreen onComplete={completeOnboarding} />
        </div>

        {/* Mobile: fullscreen, no frame */}
        <div className="md:hidden w-full min-h-screen">
          <OnboardingScreen onComplete={completeOnboarding} />
        </div>
      </div>
    )
  }

  // ==============================
  // 3. MAIN DASHBOARD - Tab-Based Navigation
  // ==============================
  // Same responsive strategy as onboarding.
  return (
    <div
      className="min-h-screen w-full md:flex md:items-center md:justify-center md:px-4 md:py-8"
      style={{ background: '#0A0A0A' }}
    >
      {/* Demo mode overlay (only visible when ?demo=1) */}
      {demo.isDemo && (
        <DemoOverlay
          activeTab={activeTab}
          timeRemaining={demo.timeRemaining}
          totalDuration={demo.totalDuration}
        />
      )}
      {/* Desktop-only centered Mobile Frame */}
      <div
        className="hidden md:flex w-full max-w-sm flex-col shadow-2xl overflow-hidden"
        style={{
          width: '390px',
          height: '844px',
          borderRadius: '40px',
          border: '8px solid #1A1A1A',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8)',
          background: '#0A0A0A',
        }}
      >
        {/* Content Area - Tab Conditional Rendering */}
        <main className="flex-1 overflow-y-auto scrollbar-hide">
          {/* Feed Tab */}
          {activeTab === "feed" && (
            <FeedScreen careerTrack={selectedCareer!} isFullscreen={false} />
          )}

          {/* Quest Tab - Gamification */}
          {activeTab === "quest" && (
            <QuestScreen careerTrack={selectedCareer!} isFullscreen={false} />
          )}

          {/* Profile Tab */}
          {activeTab === "profile" && (
            <ProfileScreen careerTrack={selectedCareer!} isFullscreen={false} />
          )}
        </main>

        {/* Bottom Navigation Bar */}
        <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      {/* Mobile: fullscreen, no frame */}
      <div className="md:hidden flex flex-col w-full min-h-screen">
        <main className="flex-1 overflow-y-auto scrollbar-hide">
          {/* Feed Tab */}
          {activeTab === "feed" && (
            <FeedScreen careerTrack={selectedCareer!} isFullscreen />
          )}

          {/* Quest Tab - Gamification */}
          {activeTab === "quest" && (
            <QuestScreen careerTrack={selectedCareer!} isFullscreen />
          )}

          {/* Profile Tab */}
          {activeTab === "profile" && (
            <ProfileScreen careerTrack={selectedCareer!} isFullscreen />
          )}
        </main>

        {/* Bottom Navigation Bar */}
        <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </div>
  )
}
