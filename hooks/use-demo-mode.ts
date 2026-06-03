"use client"

import { useEffect, useRef, useState } from "react"

type Tab = "feed" | "quest" | "profile"

interface DemoState {
  isDemo: boolean
  activeTab: Tab
  /** Seconds remaining until the next tab switch (for the progress bar) */
  timeRemaining: number
  /** Duration of the current tab in seconds */
  totalDuration: number
  /** Pre-selected career track used in demo mode */
  selectedCareer: string
}

// Tab durations in seconds (must match the spec: Feed 8s, Quest 6s, Profile loops back)
const TAB_DURATIONS: Record<Tab, number> = {
  feed: 8,
  quest: 6,
  profile: 6,
}

// Order in which demo mode cycles through tabs
const DEMO_SEQUENCE: Tab[] = ["feed", "quest", "profile"]

/**
 * Custom hook that powers ?demo=1 auto-demo mode for hackathon judges.
 *
 * - Reads `?demo=1` from the URL on mount
 * - Pre-selects "Data Analyst" as the career track
 * - Auto-cycles Feed → Quest → Profile → Feed with a 100ms-tick timer
 * - Returns a `timeRemaining` / `totalDuration` pair to drive a progress bar
 *
 * Critically, demo mode does NOT touch the real `useAppState` hook or
 * localStorage, so the normal user experience is completely unaffected
 * when `?demo=1` is absent from the URL.
 */
export function useDemoMode(): DemoState {
  const [isDemo, setIsDemo] = useState(false)
  const [activeTab, setActiveTab] = useState<Tab>("feed")
  const [timeRemaining, setTimeRemaining] = useState(TAB_DURATIONS.feed)

  // Refs to keep the interval stable across re-renders without restarting it
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Detect ?demo=1 on mount. window is guarded because the component is
  // "use client" but Next.js still SSRs the initial paint.
  useEffect(() => {
    if (typeof window === "undefined") return
    const params = new URLSearchParams(window.location.search)
    if (params.get("demo") === "1") {
      setIsDemo(true)
    }
  }, [])

  // Drive the auto-advance timer whenever demo mode is on
  useEffect(() => {
    if (!isDemo) return

    // Initialize for the current tab
    setTimeRemaining(TAB_DURATIONS[activeTab])

    intervalRef.current = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev > 0.1) {
          // Tick down by 0.1s for a smooth progress bar
          return +(prev - 0.1).toFixed(1)
        }
        // Time's up — advance to next tab in the sequence
        setActiveTab((current) => {
          const idx = DEMO_SEQUENCE.indexOf(current)
          const next = DEMO_SEQUENCE[(idx + 1) % DEMO_SEQUENCE.length]
          return next
        })
        // Reset will happen on the next render via the effect above
        return 0
      })
    }, 100) // 100ms tick → smooth progress bar

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [isDemo, activeTab])

  if (!isDemo) {
    // In non-demo mode, return a sentinel object — page.tsx will use
    // the real useAppState values instead.
    return {
      isDemo: false,
      activeTab: "feed",
      timeRemaining: 0,
      totalDuration: 0,
      selectedCareer: "",
    }
  }

  return {
    isDemo: true,
    activeTab,
    timeRemaining,
    totalDuration: TAB_DURATIONS[activeTab],
    selectedCareer: "data-analyst",
  }
}
