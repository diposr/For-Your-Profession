"use client"

import { useEffect, useState } from "react"

/**
 * Client-side controller that hides the server-rendered landing splash
 * after the app has hydrated and is ready to display.
 */
export default function LandingSplashController() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    // Small delay to ensure smooth transition after hydration
    const timer = setTimeout(() => {
      const splash = document.getElementById('landing-splash')
      if (splash) {
        splash.style.transition = 'opacity 0.5s ease-out'
        splash.style.opacity = '0'
        setTimeout(() => {
          splash.style.display = 'none'
          setHidden(true)
        }, 500)
      }
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  return null
}
