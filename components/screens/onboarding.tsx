"use client"

import { useState } from "react"
import { BarChart3, Palette, Megaphone, Users } from "lucide-react"

interface OnboardingScreenProps {
  onComplete: (career: string) => void
}

const careers = [
  {
    id: "data-analyst",
    name: "Data Analyst",
    subtitle: "Analisis data & insight",
    icon: BarChart3,
    accentColor: "#FF4D1C",
  },
  {
    id: "ui-ux-designer",
    name: "UI/UX Designer",
    subtitle: "Desain produk digital",
    icon: Palette,
    accentColor: "#FF8C42",
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    subtitle: "Strategi pemasaran online",
    icon: Megaphone,
    accentColor: "#FFD60A",
  },
  {
    id: "product-manager",
    name: "Product Manager",
    subtitle: "Manajemen produk",
    icon: Users,
    accentColor: "#FF4D1C",
  },
]

export default function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  const [selectedCareer, setSelectedCareer] = useState<string | null>(null)

  return (
    <div 
      className="min-h-screen flex flex-col px-5 py-12 safe-area-inset-top safe-area-inset-bottom"
      style={{ background: '#0A0A0A' }}
    >
      {/* Header */}
      <div className="text-center mb-10">
        <h1 
          style={{ 
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: '48px',
            color: '#FAFAFA',
            letterSpacing: '-0.03em'
          }}
        >
          FYP
        </h1>
        <p 
          className="mt-2"
          style={{ 
            fontFamily: "'Cabinet Grotesk', sans-serif",
            color: '#888888' 
          }}
        >
          The Most Useful FYP
        </p>
      </div>

      {/* Career Selection */}
      <div className="flex-1">
        <h2 
          className="mb-4"
          style={{ 
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: '18px',
            color: '#FAFAFA',
            letterSpacing: '-0.02em'
          }}
        >
          Pilih jalur karirmu
        </h2>
        
        <div className="grid grid-cols-2 gap-3">
          {careers.map((career) => {
            const Icon = career.icon
            const isSelected = selectedCareer === career.id
            
            return (
              <button
                key={career.id}
                onClick={() => setSelectedCareer(career.id)}
                className="p-4 rounded-xl text-left transition-all"
                style={{
                  background: '#1C1C1C',
                  border: isSelected ? `1px solid ${career.accentColor}` : '0.5px solid #2A2A2A',
                  borderLeft: `3px solid ${career.accentColor}`,
                }}
              >
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                  style={{ 
                    background: `${career.accentColor}15`
                  }}
                >
                  <Icon 
                    className="h-5 w-5" 
                    style={{ color: career.accentColor }}
                  />
                </div>
                <p 
                  className="text-sm"
                  style={{ 
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontWeight: 700,
                    color: '#FAFAFA'
                  }}
                >
                  {career.name}
                </p>
                <p 
                  className="text-xs mt-0.5"
                  style={{ 
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    color: '#888888'
                  }}
                >
                  {career.subtitle}
                </p>
              </button>
            )
          })}
        </div>
      </div>

      {/* CTA Button */}
      <button
        onClick={() => selectedCareer && onComplete(selectedCareer)}
        disabled={!selectedCareer}
        className="w-full h-12 transition-all disabled:opacity-50"
        style={{
          background: '#FF4D1C',
          borderRadius: '12px',
          fontFamily: "'Cabinet Grotesk', sans-serif",
          fontWeight: 700,
          color: '#FFFFFF',
          fontSize: '16px'
        }}
      >
        Mulai Belajar
      </button>
    </div>
  )
}
