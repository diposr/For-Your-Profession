"use client"

import { Flame, Zap, User } from "lucide-react"

type Tab = "feed" | "quest" | "profile"

interface BottomNavProps {
  activeTab: Tab
  onTabChange: (tab: Tab) => void
}

export default function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const tabs: { id: Tab; label: string; icon: React.FC<any> }[] = [
    { id: "feed", label: "Feed", icon: Flame },
    { id: "quest", label: "Quest", icon: Zap },
    { id: "profile", label: "Profile", icon: User },
  ]

  return (
    <nav 
      className="px-4 py-2 safe-area-inset-bottom"
      style={{ 
        background: '#0A0A0A', 
        borderTop: '0.5px solid #2A2A2A' 
      }}
    >
      <div className="flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className="flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors"
              style={{ 
                color: isActive ? '#FF4D1C' : '#444444'
              }}
            >
              <Icon 
                className="h-5 w-5 transition-colors" 
                color={isActive ? '#FF4D1C' : '#444444'}
                fill={isActive ? '#FF4D1C' : 'transparent'}
              />
              <span 
                className="text-xs"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 500 }}
              >
                {tab.label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
