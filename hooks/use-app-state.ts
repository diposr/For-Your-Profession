"use client"

import { useState, useEffect } from "react"

type Tab = "feed" | "quest" | "profile"

interface AppState {
  activeTab: Tab
  hasOnboarded: boolean
  selectedCareer: string | null
}

const STORAGE_KEY = "fyp-app-state"

const DEFAULT_STATE: AppState = {
  activeTab: "feed",
  hasOnboarded: false,
  selectedCareer: null,
}

/**
 * Custom hook for managing app-wide state with localStorage persistence.
 * Handles tab navigation, onboarding status, and career selection.
 */
export function useAppState() {
  const [state, setState] = useState<AppState>(DEFAULT_STATE)
  const [isHydrated, setIsHydrated] = useState(false)

  // Load state from localStorage on mount
  useEffect(() => {
    try {
      const storedState = localStorage.getItem(STORAGE_KEY)
      if (storedState) {
        const parsedState = JSON.parse(storedState)
        setState(parsedState)
      }
    } catch (error) {
      console.error("Failed to load app state from localStorage:", error)
    }
    setIsHydrated(true)
  }, [])

  // Persist state to localStorage whenever it changes
  useEffect(() => {
    if (isHydrated) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
      } catch (error) {
        console.error("Failed to save app state to localStorage:", error)
      }
    }
  }, [state, isHydrated])

  const setActiveTab = (tab: Tab) => {
    setState((prev) => ({ ...prev, activeTab: tab }))
  }

  const completeOnboarding = (career: string) => {
    setState((prev) => ({
      ...prev,
      selectedCareer: career,
      hasOnboarded: true,
      activeTab: "feed", // Auto-navigate to feed after onboarding
    }))
  }

  const resetAppState = () => {
    setState(DEFAULT_STATE)
    localStorage.removeItem(STORAGE_KEY)
  }

  return {
    ...state,
    setActiveTab,
    completeOnboarding,
    resetAppState,
    isHydrated,
  }
}
