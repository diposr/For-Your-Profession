"use client"

import { useAppState } from "@/hooks/use-app-state"
import OnboardingScreen from "@/components/screens/onboarding"
import FeedScreen from "@/components/screens/feed"
import QuestScreen from "@/components/screens/quest"
import ProfileScreen from "@/components/screens/profile"
import BottomNav from "@/components/bottom-nav"

/**
 * FYP App Root Component
 * Orchestrates the complete user flow:
 * 1. Hydration Guard - Ensures client-side state is ready
 * 2. Onboarding - Career track selection
 * 3. Main Dashboard - Tab-based navigation between Feed, Quest, and Profile
 * Fully persistent with localStorage and production-ready
 */
export default function FYPApp() {
  const {
    activeTab,
    hasOnboarded,
    selectedCareer,
    setActiveTab,
    completeOnboarding,
    isHydrated,
  } = useAppState()

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
  if (!hasOnboarded) {
    return (
      <div
        className="min-h-screen w-full flex items-center justify-center px-4"
        style={{ background: '#0A0A0A' }}
      >
        {/* Centered Mobile Frame for Onboarding */}
        <div
          className="w-full max-w-sm shadow-2xl overflow-hidden"
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
      </div>
    )
  }

  // ==============================
  // 3. MAIN DASHBOARD - Tab-Based Navigation
  // ==============================
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center px-4 py-8"
      style={{ background: '#0A0A0A' }}
    >
      {/* Centered Mobile Frame */}
      <div
        className="w-full max-w-sm flex flex-col shadow-2xl overflow-hidden"
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
            <FeedScreen careerTrack={selectedCareer!} />
          )}

          {/* Quest Tab - Gamification */}
          {activeTab === "quest" && (
            <QuestScreen careerTrack={selectedCareer!} />
          )}

          {/* Profile Tab */}
          {activeTab === "profile" && (
            <ProfileScreen careerTrack={selectedCareer!} />
          )}
        </main>

        {/* Bottom Navigation Bar */}
        <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </div>
  )
}
