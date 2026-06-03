"use client"

import { useState, useEffect, useCallback } from "react"
import { UserProgress, DEFAULT_PROGRESS, getCareerContent } from "@/lib/content"

const STORAGE_KEY = "fyp-quest-progress"

/**
 * Hook for managing quest completion state with localStorage persistence.
 * Tracks completed tasks, XP, and current streak.
 */
export function useQuestProgress() {
  const [progress, setProgress] = useState<UserProgress>(DEFAULT_PROGRESS)
  const [isHydrated, setIsHydrated] = useState(false)

  // Load progress from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        setProgress(parsed)
      }
    } catch (error) {
      console.error("Failed to load quest progress:", error)
    }
    setIsHydrated(true)
  }, [])

  // Persist progress whenever it changes
  useEffect(() => {
    if (isHydrated) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
      } catch (error) {
        console.error("Failed to save quest progress:", error)
      }
    }
  }, [progress, isHydrated])

  const completeTask = useCallback((taskId: string, xpReward: number, careerTrack: string) => {
    setProgress((prev) => {
      // Don't award XP twice for same task
      if (prev.completedTasks.includes(taskId)) {
        return prev
      }
      return {
        ...prev,
        completedTasks: [...prev.completedTasks, taskId],
        totalXP: prev.totalXP + xpReward,
        lastActiveDate: new Date().toISOString().split("T")[0],
      }
    })
  }, [])

  const uncompleteTask = useCallback((taskId: string, xpReward: number) => {
    setProgress((prev) => {
      if (!prev.completedTasks.includes(taskId)) {
        return prev
      }
      return {
        ...prev,
        completedTasks: prev.completedTasks.filter((id) => id !== taskId),
        totalXP: Math.max(0, prev.totalXP - xpReward),
      }
    })
  }, [])

  const isTaskCompleted = useCallback(
    (taskId: string) => progress.completedTasks.includes(taskId),
    [progress.completedTasks]
  )

  const resetProgress = useCallback(() => {
    setProgress(DEFAULT_PROGRESS)
    localStorage.removeItem(STORAGE_KEY)
  }, [])

  // Get completion stats for a career track
  const getStats = useCallback(
    (careerTrack: string) => {
      const content = getCareerContent(careerTrack)
      const allTaskIds = content.weeklyQuest.days.flatMap((day) =>
        day.tasks.map((t) => t.id)
      )
      const completedCount = allTaskIds.filter((id) => progress.completedTasks.includes(id)).length
      const totalTasks = allTaskIds.length
      const completedDays = content.weeklyQuest.days.filter((day) =>
        day.tasks.every((t) => progress.completedTasks.includes(t.id))
      ).length
      return {
        completedCount,
        totalTasks,
        completedDays,
        totalDays: content.weeklyQuest.days.length,
      }
    },
    [progress.completedTasks]
  )

  return {
    progress,
    isHydrated,
    completeTask,
    uncompleteTask,
    isTaskCompleted,
    resetProgress,
    getStats,
  }
}
