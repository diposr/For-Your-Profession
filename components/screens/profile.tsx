"use client"

import { Bookmark, Clock, Settings, Share2, Briefcase, ChevronRight, Video, Award, TrendingUp } from "lucide-react"
import { getCareerContent } from "@/lib/content"
import { useQuestProgress } from "@/hooks/use-quest-progress"

interface ProfileScreenProps {
  careerTrack: string
}

const careerInfo: Record<string, { initials: string; name: string; rank: string }> = {
  "data-analyst": { initials: "AR", name: "Ahmad Rizki", rank: "Top 12% of Data Analysts" },
  "ui-ux-designer": { initials: "SP", name: "Sarah Putri", rank: "Top 8% of UI/UX Designers" },
  "digital-marketing": { initials: "BW", name: "Budi Wijaya", rank: "Top 15% of Digital Marketers" },
  "product-manager": { initials: "DM", name: "Dewi Maharani", rank: "Top 10% of Product Managers" },
}

export default function ProfileScreen({ careerTrack }: ProfileScreenProps) {
  const content = getCareerContent(careerTrack)
  const { progress, isHydrated, getStats } = useQuestProgress()
  const stats = getStats(careerTrack)
  const info = careerInfo[careerTrack] || careerInfo["data-analyst"]

  const earnedBadges = content.badges.filter((b) => b.earned)
  const totalXP = isHydrated ? progress.totalXP : 847

  const menuItems = [
    { id: "creator", label: "Become a Creator", icon: <Video className="w-5 h-5" color="#FF8C42" />, badge: "NEW" },
    { id: "portfolio", label: "Skill Portfolio", icon: <Briefcase className="w-5 h-5" color="#FF8C42" /> },
    { id: "badges", label: "Badge Collection", icon: <Award className="w-5 h-5" color="#FF8C42" />, badge: earnedBadges.length.toString() },
    { id: "jobs", label: "Job Portal", icon: <Briefcase className="w-5 h-5" color="#FF8C42" /> },
    { id: "bookmarks", label: "Bookmarks", icon: <Bookmark className="w-5 h-5" color="#FF8C42" /> },
    { id: "history", label: "Riwayat Belajar", icon: <Clock className="w-5 h-5" color="#FF8C42" /> },
    { id: "settings", label: "Pengaturan", icon: <Settings className="w-5 h-5" color="#FF8C42" /> },
    { id: "share", label: "Bagikan Profil", icon: <Share2 className="w-5 h-5" color="#FF8C42" /> },
  ]

  return (
    <div
      className="h-full flex flex-col p-5 safe-area-inset-top overflow-y-auto"
      style={{ background: '#0A0A0A' }}
    >
      {/* Profile Header */}
      <div className="flex flex-col items-center mt-6 mb-6 gap-2">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center relative"
          style={{ background: '#FF4D1C' }}
        >
          <span
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '24px',
              color: '#FFFFFF'
            }}
          >
            {info.initials}
          </span>
          <div
            className="absolute -bottom-2 px-2 py-0.5 rounded-full text-xs"
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 700,
              background: '#FFD60A',
              color: '#0A0A0A',
              border: '2px solid #0A0A0A'
            }}
          >
            Lv. 3
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <h1
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '20px',
              color: '#FAFAFA',
              letterSpacing: '-0.02em'
            }}
          >
            {info.name}
          </h1>
          <span
            className="px-3 py-1 rounded-full text-xs uppercase"
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 600,
              letterSpacing: '0.05em',
              background: 'transparent',
              border: '1px solid #FF4D1C',
              color: '#FF4D1C'
            }}
          >
            {content.levelTitle}
          </span>
          <div className="flex items-center gap-1.5 mt-1">
            <TrendingUp className="w-3 h-3" color="#FFD60A" />
            <p
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontSize: '11px',
                color: '#FFD60A',
                fontWeight: 500
              }}
            >
              {info.rank}
            </p>
          </div>
        </div>
      </div>

      {/* Career Score Card */}
      <div
        className="p-4 mb-6 rounded-xl"
        style={{
          background: 'linear-gradient(135deg, #FF4D1C15 0%, #1C1C1C 100%)',
          border: '1px solid #FF4D1C40'
        }}
      >
        <div className="flex items-center justify-between mb-2">
          <span
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontSize: '11px',
              color: '#888888',
              fontWeight: 600,
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}
          >
            Career Score
          </span>
          <span
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontSize: '11px',
              color: '#FF4D1C',
              fontWeight: 600
            }}
          >
            {info.rank}
          </span>
        </div>
        <div className="flex items-baseline gap-1">
          <span
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontSize: '32px',
              color: '#FFFFFF',
              fontWeight: 800,
              letterSpacing: '-0.02em'
            }}
          >
            {totalXP.toLocaleString()}
          </span>
          <span
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontSize: '14px',
              color: '#888888',
              fontWeight: 600
            }}
          >
            XP
          </span>
        </div>
      </div>

      {/* Stats Row */}
      <div className="flex gap-3 mb-6">
        <div
          className="flex-1 flex flex-col items-center justify-center py-4 px-3 rounded-xl gap-1"
          style={{ background: '#1C1C1C' }}
        >
          <span
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              color: '#888888',
              fontSize: '10px',
              fontWeight: 500
            }}
          >
            Hari Belajar
          </span>
          <span
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              color: '#FF4D1C',
              fontSize: '20px',
              fontWeight: 700
            }}
          >
            {isHydrated ? progress.currentStreak : 7}
          </span>
        </div>

        <div
          className="flex-1 flex flex-col items-center justify-center py-4 px-3 rounded-xl gap-1"
          style={{ background: '#1C1C1C' }}
        >
          <span
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              color: '#888888',
              fontSize: '10px',
              fontWeight: 500
            }}
          >
            Skill Dikuasai
          </span>
          <span
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              color: '#FF8C42',
              fontSize: '20px',
              fontWeight: 700
            }}
          >
            {content.topSkills.length}
          </span>
        </div>

        <div
          className="flex-1 flex flex-col items-center justify-center py-4 px-3 rounded-xl gap-1"
          style={{ background: '#1C1C1C' }}
        >
          <span
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              color: '#888888',
              fontSize: '10px',
              fontWeight: 500
            }}
          >
            Job Match
          </span>
          <span
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              color: '#FFD60A',
              fontSize: '20px',
              fontWeight: 700
            }}
          >
            {isHydrated ? stats.completedDays : 3}
          </span>
        </div>
      </div>

      {/* Skill Badges Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '14px',
              color: '#FAFAFA'
            }}
          >
            Skill Badges
          </h2>
          <span
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontSize: '11px',
              color: '#888888'
            }}
          >
            {earnedBadges.length}/{content.badges.length}
          </span>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {content.badges.map((badge) => (
            <div
              key={badge.id}
              className="flex-shrink-0 flex flex-col items-center gap-1.5 p-3 rounded-xl"
              style={{
                background: badge.earned ? '#1C1C1C' : '#0F0F0F',
                border: badge.earned ? '1px solid #FF4D1C40' : '1px solid #1C1C1C',
                opacity: badge.earned ? 1 : 0.4,
                minWidth: '72px'
              }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
                style={{
                  background: badge.earned ? '#FF4D1C20' : '#1C1C1C',
                  filter: badge.earned ? 'none' : 'grayscale(1)'
                }}
              >
                {badge.icon}
              </div>
              <p
                className="text-center"
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontSize: '10px',
                  color: badge.earned ? '#FAFAFA' : '#888888',
                  fontWeight: 600,
                  lineHeight: '1.2'
                }}
              >
                {badge.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Top Skills Section */}
      <div className="mb-6">
        <h2
          className="mb-3"
          style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: '14px',
            color: '#FAFAFA'
          }}
        >
          Top Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {content.topSkills.map((skill, i) => (
            <span
              key={skill}
              className="px-3 py-1.5 rounded-full text-xs"
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 600,
                background: i === 0 ? '#FF4D1C' : '#1C1C1C',
                color: i === 0 ? '#FFFFFF' : '#FAFAFA',
                border: i === 0 ? 'none' : '1px solid #2A2A2A'
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Menu List */}
      <div
        className="flex flex-col overflow-hidden"
        style={{
          background: '#1C1C1C',
          borderRadius: '12px'
        }}
      >
        {menuItems.map((item, index) => (
          <button
            key={item.id}
            className="flex items-center justify-between transition-colors active:bg-[#2A2A2A]"
            style={{
              padding: '14px 16px',
              borderBottom: index < menuItems.length - 1 ? '0.5px solid #2A2A2A' : 'none'
            }}
          >
            <div className="flex items-center gap-3">
              {item.icon}
              <span
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: '14px',
                  color: '#FAFAFA'
                }}
              >
                {item.label}
              </span>
              {item.badge && (
                <span
                  className="px-2 py-[2px] rounded-full text-[10px] ml-1"
                  style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    background: item.badge === "NEW" ? '#FF4D1C' : '#FF8C42',
                    color: '#FFFFFF',
                    fontWeight: 700
                  }}
                >
                  {item.badge}
                </span>
              )}
            </div>
            <ChevronRight className="w-5 h-5" color="#444444" />
          </button>
        ))}
      </div>
    </div>
  )
}
