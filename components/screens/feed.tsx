"use client"

import { useState, useRef } from "react"
import { Play, Bookmark, Share2, SkipForward, Flame, ChevronUp, Check, BookOpen, Sparkles } from "lucide-react"
import { getCareerContent, FeedItem } from "@/lib/content"

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
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(new Set())
  const [filter, setFilter] = useState<"all" | "verified">("all")
  const startY = useRef(0)

  const content = getCareerContent(careerTrack)
  const filteredItems = filter === "verified"
    ? content.feed.filter((item) => item.isVerified)
    : content.feed

  const currentItem = filteredItems[currentIndex] || filteredItems[0]
  const careerLabel = careerLabels[careerTrack] || "Career Track"

  const handleNext = () => {
    setIsPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % filteredItems.length)
  }

  const handlePrev = () => {
    setIsPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)
  }

  const handleBookmark = () => {
    if (!currentItem) return
    setBookmarkedIds((prev) => {
      const next = new Set(prev)
      if (next.has(currentItem.id)) {
        next.delete(currentItem.id)
      } else {
        next.add(currentItem.id)
      }
      return next
    })
    setIsBookmarked(bookmarkedIds.has(currentItem.id))
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    startY.current = e.touches[0].clientY
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = startY.current - e.changedTouches[0].clientY
    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext()
      else handlePrev()
    }
  }

  if (!currentItem) {
    return (
      <div
        className="mx-auto overflow-hidden flex items-center justify-center"
        style={{ maxWidth: '390px', height: '844px', background: '#0A0A0A' }}
      >
        <p style={{ color: '#888888' }}>No content available</p>
      </div>
    )
  }

  const isBookmarkedCurrent = bookmarkedIds.has(currentItem.id)
  const progress = isPlaying ? Math.min(100, (currentIndex + 1) * (100 / filteredItems.length)) : Math.round((currentIndex / filteredItems.length) * 100)

  return (
    <div
      className="mx-auto overflow-hidden relative"
      style={{
        maxWidth: '390px',
        height: '844px',
        background: '#0A0A0A'
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Content Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: currentItem.type === "video"
            ? `linear-gradient(135deg, #1A1A1A 0%, #0A0A0A 100%)`
            : currentItem.type === "skill"
            ? `linear-gradient(135deg, #FF4D1C15 0%, #0A0A0A 60%)`
            : `linear-gradient(135deg, #FFD60A10 0%, #0A0A0A 60%)`
        }}
      />

      {/* Type Icon Watermark */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-5">
        {currentItem.type === "video" && <Play className="w-64 h-64" />}
        {currentItem.type === "skill" && <Sparkles className="w-64 h-64" />}
        {currentItem.type === "article" && <BookOpen className="w-64 h-64" />}
      </div>

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
            {currentItem.isSponsored && (
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
            )}
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
            onClick={() => { setFilter("all"); setCurrentIndex(0) }}
            className="rounded-full flex items-center justify-center transition-colors"
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: '11px',
              padding: '4px 12px',
              background: filter === "all" ? '#FF4D1C' : 'transparent',
              border: `1px solid ${filter === "all" ? '#FF4D1C' : '#444444'}`,
              color: filter === "all" ? '#FFFFFF' : '#888888'
            }}
          >
            Semua ({content.feed.length})
          </button>
          <button
            onClick={() => { setFilter("verified"); setCurrentIndex(0) }}
            className="rounded-full flex items-center justify-center transition-colors"
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: '11px',
              padding: '4px 12px',
              background: filter === "verified" ? '#FF4D1C' : 'transparent',
              border: `1px solid ${filter === "verified" ? '#FF4D1C' : '#444444'}`,
              color: filter === "verified" ? '#FFFFFF' : '#888888'
            }}
          >
            Verified ({content.feed.filter(i => i.isVerified).length})
          </button>
        </div>
      </div>

      {/* Center Content */}
      <div className="absolute inset-0 z-0 flex flex-col items-center justify-center px-8">
        {/* Type Badge */}
        <div className="mb-6">
          <span
            className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider"
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 600,
              background: currentItem.type === "skill" ? '#FF4D1C20' : '#FFD60A20',
              color: currentItem.type === "skill" ? '#FF4D1C' : '#FFD60A',
              border: `1px solid ${currentItem.type === "skill" ? '#FF4D1C' : '#FFD60A'}40`
            }}
          >
            {currentItem.type === "skill" ? "✦ SKILL OF THE DAY" : currentItem.type === "video" ? "▶ VIDEO" : "📄 ARTICLE"}
          </span>
        </div>

        {/* Skill Tag */}
        <div
          className="px-4 py-1.5 rounded-full mb-4"
          style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontSize: '12px',
            fontWeight: 600,
            background: '#1C1C1C',
            color: '#FFFFFF',
            border: '1px solid #2A2A2A'
          }}
        >
          {currentItem.skillTag}
        </div>

        {/* Play Button for video type */}
        {currentItem.type === "video" && (
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="mb-4"
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
        )}

        {/* Skill icon for skill type */}
        {currentItem.type === "skill" && (
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mb-4"
            style={{ background: '#FF4D1C20', border: '2px solid #FF4D1C' }}
          >
            <Sparkles className="w-10 h-10" color="#FF4D1C" />
          </div>
        )}

        {/* Article icon for article type */}
        {currentItem.type === "article" && (
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mb-4"
            style={{ background: '#FFD60A20', border: '2px solid #FFD60A' }}
          >
            <BookOpen className="w-10 h-10" color="#FFD60A" />
          </div>
        )}
      </div>

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

        {/* Content Title */}
        <h3
          style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: '17px',
            color: '#FFFFFF',
            marginBottom: '4px',
            lineHeight: '1.3'
          }}
        >
          {currentItem.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontSize: '12px',
            color: '#A0A0A0',
            marginBottom: '8px',
            lineHeight: '1.4'
          }}
        >
          {currentItem.description}
        </p>

        {/* Creator Name */}
        <div className="flex items-center gap-1.5">
          <p
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontSize: '12px',
              color: '#888888'
            }}
          >
            {currentItem.duration} · by {currentItem.creator}
          </p>
          {currentItem.isVerified && (
            <div
              title="Verified Professional"
              className="w-3.5 h-3.5 flex items-center justify-center rounded-full mt-0.5"
              style={{ background: '#FF4D1C' }}
            >
              <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
            </div>
          )}
        </div>

        {/* Progress Bar */}
        <div className="mt-4 w-full">
          <div
            className="w-full rounded-full overflow-hidden"
            style={{ height: '4px', background: 'rgba(255,255,255,0.2)' }}
          >
            <div
              className="h-full rounded-full transition-all"
              style={{ width: `${progress}%`, background: '#FF4D1C' }}
            />
          </div>
          <div className="flex justify-between items-center mt-1">
            <span
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontSize: '11px',
                color: '#888888'
              }}
            >
              {currentIndex + 1} / {filteredItems.length}
            </span>
            <span
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontSize: '12px',
                color: '#FFD60A',
                fontWeight: 600
              }}
            >
              +{currentItem.xpReward} XP
            </span>
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="flex items-center justify-center gap-6 mt-4">
          <button
            onClick={handleBookmark}
            className="w-11 h-11 rounded-full flex items-center justify-center transition-all"
            style={{
              background: isBookmarkedCurrent ? '#FF4D1C' : '#1C1C1C',
              color: isBookmarkedCurrent ? '#FFFFFF' : '#888888'
            }}
          >
            <Bookmark className="h-5 w-5" fill={isBookmarkedCurrent ? "currentColor" : "none"} />
          </button>
          <button
            className="w-11 h-11 rounded-full flex items-center justify-center transition-colors"
            style={{ background: '#1C1C1C', color: '#888888' }}
          >
            <Share2 className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-11 h-11 rounded-full flex items-center justify-center transition-colors"
            style={{ background: '#1C1C1C', color: '#888888' }}
          >
            <SkipForward className="h-5 w-5" />
          </button>
        </div>

        {/* Swipe Hint */}
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
