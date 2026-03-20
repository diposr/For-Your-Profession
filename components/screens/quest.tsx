"use client"

import { CheckCircle2, Lock, Trophy, Code } from "lucide-react"

export default function QuestScreen() {
  return (
    <div 
      className="h-full flex flex-col p-5 safe-area-inset-top overflow-y-auto"
      style={{ background: '#0A0A0A' }}
    >
      {/* Header Section */}
      <div className="mb-8 pt-4">
        <h1 
          className="text-white mb-1"
          style={{ 
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: '32px',
            letterSpacing: '-0.03em'
          }}
        >
          Quest
        </h1>
        <p 
          style={{ 
            fontFamily: "'Cabinet Grotesk', sans-serif",
            color: '#888888',
            fontSize: '14px'
          }}
        >
          Selesaikan tantangan, percepat karirmu
        </p>

        {/* XP Progress Bar */}
        <div className="mt-6">
          <div className="flex justify-between items-end mb-2">
            <span 
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 700,
                color: '#FFD60A',
                fontSize: '14px'
              }}
            >
              Level 3
            </span>
            <span 
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                color: '#888888',
                fontSize: '12px'
              }}
            >
              750/1000 XP
            </span>
          </div>
          <div 
            className="w-full rounded-full overflow-hidden"
            style={{ height: '6px', background: '#1C1C1C' }}
          >
            <div 
              className="h-full rounded-full"
              style={{ width: '75%', background: '#FF4D1C' }}
            />
          </div>
        </div>
      </div>

      {/* Daily Quest Section */}
      <div className="mb-8">
        <h2 
          className="uppercase mb-4"
          style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            color: '#888888',
            fontSize: '11px',
            letterSpacing: '0.1em',
            fontWeight: 600
          }}
        >
          DAILY QUEST
        </h2>
        
        <div className="space-y-3">
          {/* Card 1 (Completed) */}
          <div 
            className="p-4 flex items-center justify-between opacity-50 transition-all"
            style={{
              background: '#1C1C1C',
              border: '0.5px solid #2A2A2A',
              borderRadius: '12px'
            }}
          >
            <div className="flex items-center gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#FF4D1C"/>
                <path d="M7 12.5L10 15.5L17 8.5" stroke="#1C1C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div>
                <h3 
                  className="text-white line-through"
                  style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: '14px'
                  }}
                >
                  Tonton 3 konten SQL
                </h3>
                <p 
                  style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    color: '#888888',
                    fontSize: '12px'
                  }}
                >
                  Selesai hari ini
                </p>
              </div>
            </div>
            <span 
              className="px-2 py-1 rounded text-xs"
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 600,
                color: '#FF4D1C',
                background: '#1C1C1C',
                border: '1px solid #FF4D1C'
              }}
            >
              +50 XP
            </span>
          </div>

          {/* Card 2 (In Progress) */}
          <div 
            className="p-4 flex items-center justify-between transition-all"
            style={{
              background: '#1C1C1C',
              border: '0.5px solid #2A2A2A',
              borderRadius: '12px'
            }}
          >
            <div className="flex items-start gap-3 flex-1 mr-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5">
                <circle cx="12" cy="12" r="10" stroke="#FF8C42" strokeWidth="2" />
                <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22V2Z" fill="#FF8C42" />
              </svg>
              <div className="w-full">
                <h3 
                  className="text-white mb-1"
                  style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: '14px'
                  }}
                >
                  Selesaikan micro-assessment
                </h3>
                <div className="flex flex-col gap-1.5 w-full">
                  <p 
                    style={{
                      fontFamily: "'Cabinet Grotesk', sans-serif",
                      color: '#888888',
                      fontSize: '12px'
                    }}
                  >
                    2 dari 5 selesai
                  </p>
                  <div 
                    className="w-full rounded-full overflow-hidden"
                    style={{ height: '4px', background: '#2A2A2A' }}
                  >
                    <div 
                      className="h-full rounded-full"
                      style={{ width: '40%', background: '#FF8C42' }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <span 
              className="px-2 py-1 rounded text-xs shrink-0"
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 600,
                color: '#FF8C42',
                background: '#1C1C1C',
                border: '1px solid #FF8C42'
              }}
            >
              +100 XP
            </span>
          </div>

          {/* Card 3 (Locked) */}
          <div 
            className="p-4 flex items-center justify-between transition-all"
            style={{
              background: '#1C1C1C',
              border: '0.5px solid #2A2A2A',
              borderRadius: '12px'
            }}
          >
            <div className="flex items-center gap-3">
              <div 
                className="w-6 h-6 rounded-full flex items-center justify-center"
                style={{ background: '#2A2A2A' }}
              >
                <Lock className="w-3.5 h-3.5" color="#444444" />
              </div>
              <div>
                <h3 
                  style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontWeight: 600,
                    color: '#888888',
                    fontSize: '14px'
                  }}
                >
                  Bagikan portfolio ke 1 rekruter
                </h3>
                <p 
                  style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    color: '#444444',
                    fontSize: '12px'
                  }}
                >
                  Selesaikan quest sebelumnya dulu
                </p>
              </div>
            </div>
            <span 
              className="px-2 py-1 rounded text-xs"
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 600,
                color: '#444444',
                background: '#1C1C1C',
                border: '1px solid #2A2A2A'
              }}
            >
              +150 XP
            </span>
          </div>
        </div>
      </div>

      {/* Premium Lock Section */}
      <div className="mb-4">
        <div className="space-y-3">
          {/* Locked Quest Card */}
          <div 
            className="p-4 flex items-center gap-3 transition-all"
            style={{
              background: '#1C1C1C',
              opacity: 0.6,
              borderRadius: '12px'
            }}
          >
            <Lock className="w-5 h-5 shrink-0" color="#444444" />
            <h3 
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 600,
                color: '#888888',
                fontSize: '14px'
              }}
            >
              Akses 50+ quest eksklusif
            </h3>
          </div>

          {/* Upgrade Banner */}
          <div 
            className="p-4 flex items-center justify-between"
            style={{
              background: '#1C1C1C',
              border: '1px solid #FF4D1C',
              borderRadius: '12px'
            }}
          >
            <div>
              <h3 
                className="text-white mb-0.5"
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: '14px'
                }}
              >
                FYP Premium
              </h3>
              <p 
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  color: '#FF8C42',
                  fontSize: '13px'
                }}
              >
                Rp 29.000 / bulan
              </p>
            </div>
            <button 
              className="transition-colors active:opacity-80 shrink-0"
              style={{
                background: '#FF4D1C',
                color: '#FFFFFF',
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: '12px',
                borderRadius: '8px',
                padding: '8px 14px'
              }}
            >
              Upgrade
            </button>
          </div>
        </div>
      </div>

      {/* Weekly Challenge Section */}
      <div className="mb-4">
        <h2 
          className="uppercase mb-4"
          style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            color: '#888888',
            fontSize: '11px',
            letterSpacing: '0.1em',
            fontWeight: 600
          }}
        >
          WEEKLY CHALLENGE
        </h2>
        
        <div 
          className="p-5 flex flex-col gap-4 transition-all"
          style={{
            background: '#1C1C1C',
            border: '1px solid #FFD60A',
            borderRadius: '16px'
          }}
        >
          <div className="flex items-center gap-2">
            <Trophy color="#0A0A0A" fill="#FFD60A" className="w-5 h-5 bg-[#FFD60A] rounded-sm p-0.5" />
            <span 
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 600,
                color: '#FAFAFA',
                fontSize: '14px'
              }}
            >
              Challenge Minggu Ini
            </span>
          </div>
          
          <div className="flex gap-4 items-start">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg shrink-0 mt-1"
              style={{ background: '#2A2A2A' }}
            >
              <Code className="w-6 h-6" color="#FFD60A" />
            </div>

            <div className="flex-1">
              <h3 
                className="text-white mb-1"
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: '20px'
                }}
              >
                Kuasai Python Basics dalam 7 hari
              </h3>
              <p 
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  color: '#FF8C42',
                  fontSize: '13px',
                  fontWeight: 500
                }}
              >
                4 hari tersisa
              </p>
            </div>
          </div>

          <div>
            <div className="flex justify-end mb-2">
              <span 
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  color: '#888888',
                  fontSize: '12px'
                }}
              >
                3/7 hari
              </span>
            </div>
            <div 
              className="w-full rounded-full overflow-hidden"
              style={{ height: '6px', background: '#2A2A2A' }}
            >
              <div 
                className="h-full rounded-full"
                style={{ width: '43%', background: '#FFD60A' }}
              />
            </div>
          </div>

          <div 
            className="pt-2 border-t border-[#2A2A2A]"
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              color: '#888888',
              fontSize: '12px'
            }}
          >
            +500 XP · Badge eksklusif
          </div>
        </div>
      </div>
    </div>
  )
}
