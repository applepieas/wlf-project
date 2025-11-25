'use client'

import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'

const AboutSection = () => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const wrapper = wrapperRef.current
    const card = cardRef.current
    if (!wrapper || !card) return

    const xTo = gsap.quickTo(card, "x", { duration: 0.4, ease: "power3" })
    const yTo = gsap.quickTo(card, "y", { duration: 0.4, ease: "power3" })

    const handleMouseMove = (e: MouseEvent) => {
      const rect = wrapper.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const dist = Math.hypot(e.clientX - centerX, e.clientY - centerY)
      const threshold = 500 // Distance to trigger the effect (covers the card)

      if (dist < threshold) {
        const rawX = (e.clientX - centerX) * 0.05
        const rawY = (e.clientY - centerY) * 0.05

        // Clamp movement to 10px as requested
        const x = Math.max(-20, Math.min(20, rawX))
        const y = Math.max(-20, Math.min(20, rawY))

        xTo(x)
        yTo(y)
      } else {
        xTo(0)
        yTo(0)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className='flex justify-center items-center relative h-[150vh] pt-20 overflow-hidden'>
      <div className='home-hero__bg'>
      </div>

      <div className="container text-center mt-90">
        <div className="home-hero__content">
          <div className='text-[2.5em] mx-40 leading-tight'>
            WLF is a fast-growing creative marketing studio. Get exclusive access to the ideas, strategies and systems behind high-performing brands and campaigns.
          </div>

          {/* Reel section */}
          <div className="mt-16 relative flex items-center justify-between text-[5rem] font-semibold text-[#e0e0e0] tracking-tight">

            <span className="uppercase font-grift">Play</span>

            {/* Reel placeholder card wrapper for lines */}
            <div ref={wrapperRef} className="relative mx-8">
              {/* Cross lines */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-[1px] bg-[#e1e1e1]"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[200vh] w-[1px] bg-[#e1e1e1]"></div>

              {/* Reel placeholder card */}
              <div ref={cardRef} className="relative z-10 h-64 w-[24rem] rounded-xl bg-black/90 shadow-2xl shadow-black/40 border border-white/10 overflow-hidden flex items-center justify-center text-white text-base">
                <span className="opacity-80 font-grift tracking-normal">Reel preview</span>
              </div>
            </div>

            <span className="uppercase font-grift">Reel</span>
          </div>
        </div>
      </div>
    </div>)
}

export default AboutSection