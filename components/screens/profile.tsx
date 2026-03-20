"use client"

import { Bookmark, Clock, Settings, Share2, Briefcase, ChevronRight, Video } from "lucide-react"

interface ProfileScreenProps {
  careerTrack: string
}

export default function ProfileScreen({ careerTrack }: ProfileScreenProps) {
  const menuItems = [
    { id: "creator", label: "Become a Creator", icon: <Video className="w-5 h-5" color="#FF8C42" />, badge: "NEW" },
    { id: "portfolio", label: "Skill Portfolio", icon: <Briefcase className="w-5 h-5" color="#FF8C42" /> },
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
      <div className="flex flex-col items-center mt-6 mb-8 gap-2">
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
            AR
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
            Ahmad Rizki
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
            Data Analyst
          </span>
        </div>
      </div>

      {/* Stats Row */}
      <div className="flex gap-3 mb-8">
        <div 
          className="flex-1 flex flex-col items-center justify-center py-4 px-3 rounded-xl gap-1"
          style={{ background: '#1C1C1C' }}
        >
          <span 
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              color: '#888888',
              fontSize: '11px',
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
            14
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
              fontSize: '11px',
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
            5
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
              fontSize: '11px',
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
            3
          </span>
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
                    background: '#FF4D1C',
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
