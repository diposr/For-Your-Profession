"use client"

import { useState } from "react"
import { Play, Bookmark, Share2, SkipForward, Flame, ChevronUp, Check } from "lucide-react"

interface FeedScreenProps {
  careerTrack: string
}

const careerLabels: Record<string, string> = {
  "data-analyst": "Data Analyst",
  "ui-ux-designer": "UI/UX Designer",
  "digital-marketing": "Digital Marketing",
  "product-manager": "Product Manager",
}

export default function FeedScreen({ careerTrack }: FeedScreenProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)

  const careerLabel = careerLabels[careerTrack] || "Career Track"
  const progress = 68

  return (
    <div 
      className="mx-auto overflow-hidden relative"
      style={{ 
        maxWidth: '390px', 
        height: '844px',
        background: '#0A0A0A'
      }}
    >
      {/* Video Placeholder */}
      <div className="absolute inset-0 z-0 bg-[#111111]" />

      {/* Top Section */}
      <div className="absolute top-0 left-0 right-0 z-10 flex flex-col gap-3 p-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between">
          <span 
            className="px-3 py-1.5 rounded-full text-xs"
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 500,
              letterSpacing: '0.02em',
              background: 'transparent',
              border: '1px solid #FF4D1C',
              color: '#FF4D1C'
            }}
          >
            {careerLabel}
          </span>
          <div className="flex items-center gap-2">
            <span 
              className="px-3 py-1.5 rounded-full text-[10px] uppercase"
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 500,
                background: '#1C1C1C',
                border: '1px solid #FF8C42',
                color: '#FF8C42'
              }}
            >
              SPONSORED
            </span>
            <span 
              className="px-3 py-1.5 rounded-full text-xs"
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 500,
                letterSpacing: '0.02em',
                background: 'transparent',
                border: '1px solid #FFD60A',
                color: '#FFD60A'
              }}
            >
              Level 3
            </span>
          </div>
        </div>

        {/* Filter Row */}
        <div className="flex items-center gap-2 mt-1">
          <button 
            className="rounded-full flex items-center justify-center transition-colors"
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: '11px',
              padding: '4px 12px',
              background: '#FF4D1C',
              color: '#FFFFFF'
            }}
          >
            Semua
          </button>
          <button 
            className="rounded-full flex items-center justify-center transition-colors"
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: '11px',
              padding: '4px 12px',
              background: 'transparent',
              border: '1px solid #444444',
              color: '#444444'
            }}
          >
            Verified Only
          </button>
        </div>
      </div>

      {/* Play Button - Centered */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute z-10"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center transition-all"
          style={{
            background: isPlaying ? 'rgba(28, 28, 28, 0.6)' : '#FF4D1C'
          }}
        >
          {isPlaying ? (
            <div className="flex gap-1.5">
              <div className="w-1.5 h-6 bg-white rounded-full" />
              <div className="w-1.5 h-6 bg-white rounded-full" />
            </div>
          ) : (
            <Play className="h-8 w-8 text-white ml-1" fill="currentColor" />
          )}
        </div>
      </button>

      {/* Bottom Overlay */}
      <div 
        className="absolute left-0 right-0 bottom-0 z-10"
        style={{
          padding: '20px',
          background: 'linear-gradient(transparent, #0A0A0A)'
        }}
      >
        {/* Streak Indicator */}
        <div className="flex items-center gap-1.5 mb-2">
          <Flame className="w-4 h-4 text-[#FF4D1C]" fill="currentColor" />
          <span 
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: '12px',
              color: '#FF4D1C'
            }}
          >
            7 hari streak
          </span>
        </div>

        {/* Video Title */}
        <h3 
          style={{ 
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 700, 
            fontSize: '16px',
            color: '#FFFFFF',
            marginBottom: '4px'
          }}
        >
          SQL untuk Data Analyst
        </h3>
        
        {/* Company Name */}
        <div className="flex items-center gap-1.5">
          <p 
            style={{ 
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontSize: '13px',
              color: '#888888'
            }}
          >
            by Tokopedia Data Team
          </p>
          <div 
            title="Verified Professional"
            className="w-3.5 h-3.5 flex items-center justify-center rounded-full mt-0.5"
            style={{ background: '#FF4D1C' }}
          >
            <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-4 w-full">
          <div 
            className="w-full rounded-full overflow-hidden"
            style={{ height: '4px', background: 'rgba(255,255,255,0.2)' }}
          >
            <div
              className="h-full rounded-full"
              style={{ width: `${progress}%`, background: '#FF4D1C' }}
            />
          </div>
          <div className="flex justify-end mt-1">
            <span 
              style={{ 
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontSize: '12px',
                color: '#FFD60A'
              }}
            >
              {progress}%
            </span>
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="flex items-center justify-center gap-6 mt-4">
          <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            className="w-11 h-11 rounded-full flex items-center justify-center transition-all"
            style={{
              background: isBookmarked ? '#FF4D1C' : '#1C1C1C',
              color: isBookmarked ? '#FFFFFF' : '#888888'
            }}
          >
            <Bookmark className="h-5 w-5" fill={isBookmarked ? "currentColor" : "none"} />
          </button>
          <button 
            className="w-11 h-11 rounded-full flex items-center justify-center transition-colors"
            style={{ background: '#1C1C1C', color: '#888888' }}
          >
            <Share2 className="h-5 w-5" />
          </button>
          <button 
            className="w-11 h-11 rounded-full flex items-center justify-center transition-colors"
            style={{ background: '#1C1C1C', color: '#888888' }}
          >
            <SkipForward className="h-5 w-5" />
          </button>
        </div>

        {/* Swipe Hint - Inside Bottom Overlay */}
        <div className="flex flex-col items-center mt-4">
          <ChevronUp 
            className="w-5 h-5" 
            color="#888888" 
            style={{ animation: 'customPulse 1.5s ease-in-out infinite' }}
          />
          <p 
            className="text-center mt-1"
            style={{ 
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontSize: '12px', 
              color: '#444444' 
            }}
          >
            Geser untuk lanjut
          </p>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes customPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
      `}} />
    </div>
  )
}
