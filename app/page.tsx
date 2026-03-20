"use client"

import { useState } from "react"
import OnboardingScreen from "@/components/screens/onboarding"
import FeedScreen from "@/components/screens/feed"
import QuestScreen from "@/components/screens/quest"
import ProfileScreen from "@/components/screens/profile"
import BottomNav from "@/components/bottom-nav"

export default function FYPApp() {
  const [activeTab, setActiveTab] = useState<"feed" | "quest" | "profile">("feed")
  const [hasOnboarded, setHasOnboarded] = useState(false)
  const [selectedCareer, setSelectedCareer] = useState<string | null>(null)

  const handleOnboardingComplete = (career: string) => {
    setSelectedCareer(career)
    setHasOnboarded(true)
  }

  if (!hasOnboarded) {
    return <OnboardingScreen onComplete={handleOnboardingComplete} />
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#0A0A0A' }}>
      <main className="flex-1 overflow-hidden">
        {activeTab === "feed" && <FeedScreen careerTrack={selectedCareer!} />}
        {activeTab === "quest" && <QuestScreen />}
        {activeTab === "profile" && <ProfileScreen careerTrack={selectedCareer!} />}
      </main>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}
