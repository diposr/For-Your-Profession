"use client"

import { useState } from "react"
import { CheckCircle2, Lock, Trophy, Code, Play, BookOpen, Wrench, Share2, ChevronDown, Flame } from "lucide-react"
import { getCareerContent, QuestTask } from "@/lib/content"
import { useQuestProgress } from "@/hooks/use-quest-progress"

interface QuestScreenProps {
  careerTrack: string
}

const taskTypeIcons: Record<string, React.FC<any>> = {
  watch: Play,
  read: BookOpen,
  quiz: CheckCircle2,
  build: Wrench,
  share: Share2,
}

const taskTypeLabels: Record<string, string> = {
  watch: "Tonton",
  read: "Baca",
  quiz: "Quiz",
  build: "Build",
  share: "Share",
}

export default function QuestScreen({ careerTrack }: QuestScreenProps) {
  const content = getCareerContent(careerTrack)
  const { progress, isHydrated, completeTask, uncompleteTask, isTaskCompleted, getStats } = useQuestProgress()
  const [expandedDay, setExpandedDay] = useState<number | null>(1)

  const stats = getStats(careerTrack)
  const xpEarned = content.weeklyQuest.days
    .flatMap((day) => day.tasks)
    .filter((t) => isTaskCompleted(t.id))
    .reduce((sum, t) => sum + t.xpReward, 0)
  const xpTotal = content.weeklyQuest.days
    .flatMap((day) => day.tasks)
    .reduce((sum, t) => sum + t.xpReward, 0)
  const levelProgress = Math.min(100, Math.round((xpEarned / xpTotal) * 100))

  const handleTaskToggle = (task: QuestTask) => {
    if (isTaskCompleted(task.id)) {
      uncompleteTask(task.id, task.xpReward)
    } else {
      completeTask(task.id, task.xpReward, careerTrack)
    }
  }

  return (
    <div
      className="h-full flex flex-col p-5 safe-area-inset-top overflow-y-auto"
      style={{ background: '#0A0A0A' }}
    >
      {/* Header Section */}
      <div className="mb-6 pt-4">
        <div className="flex items-center justify-between mb-1">
          <h1
            className="text-white"
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: '32px',
              letterSpacing: '-0.03em'
            }}
          >
            Quest
          </h1>
          <div className="flex items-center gap-1.5">
            <Flame className="w-4 h-4" color="#FF4D1C" fill="#FF4D1C" />
            <span
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: '14px',
                color: '#FF4D1C'
              }}
            >
              {progress.currentStreak}
            </span>
          </div>
        </div>
        <p
          style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            color: '#888888',
            fontSize: '14px'
          }}
        >
          {content.weeklyQuest.description}
        </p>

        {/* XP Progress Bar */}
        <div className="mt-5">
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
              {isHydrated ? `${xpEarned}/${xpTotal} XP` : "—"}
            </span>
          </div>
          <div
            className="w-full rounded-full overflow-hidden"
            style={{ height: '6px', background: '#1C1C1C' }}
          >
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${isHydrated ? levelProgress : 0}%`, background: '#FF4D1C' }}
            />
          </div>
        </div>
      </div>

      {/* 7-Day Quest Section */}
      <div className="mb-6">
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
          7-DAY LEARNING STREAK
        </h2>

        <div className="space-y-2">
          {content.weeklyQuest.days.map((day) => {
            const dayCompleted = day.tasks.every((t) => isTaskCompleted(t.id))
            const dayInProgress = day.tasks.some((t) => isTaskCompleted(t.id)) && !dayCompleted
            const isExpanded = expandedDay === day.day
            const completedCount = day.tasks.filter((t) => isTaskCompleted(t.id)).length

            return (
              <div
                key={day.day}
                className="overflow-hidden transition-all"
                style={{
                  background: '#1C1C1C',
                  border: dayCompleted
                    ? '1px solid #FF4D1C40'
                    : '0.5px solid #2A2A2A',
                  borderRadius: '12px'
                }}
              >
                {/* Day Header (clickable) */}
                <button
                  onClick={() => setExpandedDay(isExpanded ? null : day.day)}
                  className="w-full p-4 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    {/* Day Status Icon */}
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background: dayCompleted
                          ? '#FF4D1C'
                          : dayInProgress
                          ? '#FF8C4220'
                          : '#2A2A2A',
                        border: dayInProgress ? '2px solid #FF8C42' : 'none'
                      }}
                    >
                      {dayCompleted ? (
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      ) : dayInProgress ? (
                        <span
                          style={{
                            fontFamily: "'Cabinet Grotesk', sans-serif",
                            fontWeight: 700,
                            fontSize: '12px',
                            color: '#FF8C42'
                          }}
                        >
                          {completedCount}
                        </span>
                      ) : (
                        <Lock className="w-3.5 h-3.5" color="#444444" />
                      )}
                    </div>
                    <div className="text-left">
                      <p
                        style={{
                          fontFamily: "'Cabinet Grotesk', sans-serif",
                          fontWeight: 600,
                          fontSize: '11px',
                          color: '#888888',
                          letterSpacing: '0.05em',
                          textTransform: 'uppercase'
                        }}
                      >
                        {day.dayLabel}
                      </p>
                      <h3
                        style={{
                          fontFamily: "'Cabinet Grotesk', sans-serif",
                          fontWeight: 600,
                          fontSize: '14px',
                          color: dayCompleted ? '#FF4D1C' : '#FFFFFF',
                          marginTop: '2px'
                        }}
                      >
                        {day.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      style={{
                        fontFamily: "'Cabinet Grotesk', sans-serif",
                        fontSize: '11px',
                        color: '#888888'
                      }}
                    >
                      {completedCount}/{day.tasks.length}
                    </span>
                    <ChevronDown
                      className="w-4 h-4 transition-transform"
                      color="#888888"
                      style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    />
                  </div>
                </button>

                {/* Expanded Tasks */}
                {isExpanded && (
                  <div className="px-4 pb-4 space-y-2">
                    {day.tasks.map((task) => {
                      const isCompleted = isTaskCompleted(task.id)
                      const TaskIcon = taskTypeIcons[task.type]

                      return (
                        <div
                          key={task.id}
                          className="p-3 flex items-start gap-3"
                          style={{
                            background: '#0F0F0F',
                            borderRadius: '8px',
                            border: isCompleted ? '1px solid #FF4D1C40' : '1px solid #1C1C1C',
                            opacity: isCompleted ? 0.7 : 1
                          }}
                        >
                          {/* Task Type Icon */}
                          <div
                            className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                            style={{
                              background: isCompleted ? '#FF4D1C' : '#1C1C1C',
                              border: isCompleted ? 'none' : '1px solid #2A2A2A'
                            }}
                          >
                            {isCompleted ? (
                              <CheckCircle2 className="w-4 h-4 text-white" />
                            ) : (
                              <TaskIcon className="w-3.5 h-3.5" color="#888888" />
                            )}
                          </div>

                          {/* Task Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2 mb-1">
                              <h4
                                className={isCompleted ? 'line-through' : ''}
                                style={{
                                  fontFamily: "'Cabinet Grotesk', sans-serif",
                                  fontWeight: 600,
                                  fontSize: '13px',
                                  color: isCompleted ? '#888888' : '#FFFFFF',
                                  lineHeight: '1.3'
                                }}
                              >
                                {task.title}
                              </h4>
                              <span
                                className="px-1.5 py-0.5 rounded text-[10px] shrink-0"
                                style={{
                                  fontFamily: "'Cabinet Grotesk', sans-serif",
                                  fontWeight: 600,
                                  color: isCompleted ? '#888888' : '#FF4D1C',
                                  background: isCompleted ? '#1C1C1C' : '#FF4D1C20',
                                  border: `1px solid ${isCompleted ? '#2A2A2A' : '#FF4D1C40'}`
                                }}
                              >
                                +{task.xpReward} XP
                              </span>
                            </div>
                            <p
                              style={{
                                fontFamily: "'Cabinet Grotesk', sans-serif",
                                fontSize: '11px',
                                color: '#888888',
                                marginBottom: '8px',
                                lineHeight: '1.4'
                              }}
                            >
                              {task.description}
                            </p>
                            <div className="flex items-center gap-2">
                              <span
                                className="px-2 py-0.5 rounded-full text-[10px]"
                                style={{
                                  fontFamily: "'Cabinet Grotesk', sans-serif",
                                  fontWeight: 500,
                                  color: '#888888',
                                  background: '#1C1C1C',
                                  border: '1px solid #2A2A2A'
                                }}
                              >
                                {taskTypeLabels[task.type]}
                              </span>
                              <button
                                onClick={() => handleTaskToggle(task)}
                                className="ml-auto px-3 py-1 rounded-md text-[11px] transition-all active:scale-95"
                                style={{
                                  fontFamily: "'Cabinet Grotesk', sans-serif",
                                  fontWeight: 600,
                                  background: isCompleted ? 'transparent' : '#FF4D1C',
                                  color: isCompleted ? '#FF4D1C' : '#FFFFFF',
                                  border: isCompleted ? '1px solid #FF4D1C' : 'none',
                                }}
                              >
                                {isCompleted ? "Batal" : "Selesai"}
                              </button>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
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
                  fontSize: '18px'
                }}
              >
                {content.weeklyQuest.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  color: '#FF8C42',
                  fontSize: '13px',
                  fontWeight: 500
                }}
              >
                {isHydrated ? `${stats.completedDays}/${stats.totalDays} hari selesai` : "—"}
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
                {isHydrated
                  ? `${stats.completedCount}/${stats.totalTasks} tasks`
                  : "—"}
              </span>
            </div>
            <div
              className="w-full rounded-full overflow-hidden"
              style={{ height: '6px', background: '#2A2A2A' }}
            >
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: isHydrated
                    ? `${(stats.completedCount / stats.totalTasks) * 100}%`
                    : '0%',
                  background: '#FFD60A'
                }}
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
            +{xpTotal} XP · Badge eksklusif
          </div>
        </div>
      </div>

      {/* Premium Lock Section */}
      <div className="mb-4">
        <div className="space-y-3">
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
    </div>
  )
}
