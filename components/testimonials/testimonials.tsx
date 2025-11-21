'use client'

import React, { useState } from 'react'
import TestimonialCard from './TestimonialCard'

const testimonialsData = [
  {
    id: 1,
    mainArgument: "The creative developer's cheat code.",
    clientName: "Jordan Gilroy",
    clientRole: "Web Designer",
    clientImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    reviewText: "Osmo is a one-stop shop, offering everything from snippets to help you set up your site to advanced animations and interactions that elevate it to the next level. The resources are so easy to implement, and with some imagination, you can adapt them to create something unique."
  },
  {
    id: 2,
    mainArgument: "Elevating web experiences to new heights.",
    clientName: "Sarah Jenkins",
    clientRole: "Frontend Dev",
    clientImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    reviewText: "The attention to detail and the quality of the code is unmatched. It's not just about making things look good, it's about performance and usability. Highly recommended for anyone looking to step up their game."
  },
  {
    id: 3,
    mainArgument: "A game changer for our agency workflow.",
    clientName: "Marcus Chen",
    clientRole: "Creative Director",
    clientImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    reviewText: "We've been able to deliver projects faster and with more polish than ever before. The library of components is extensive and easy to customize. It's become an essential part of our toolkit."
  }
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length)
  }

  return (
    <div className='flex justify-center items-center relative h-[100vh] w-full overflow-hidden bg-[#f4f4f4] '>
      {/* Background - matching AboutSection */}
      <div className='home-hero__bg'>
        <div className="home-hero__bg-line"></div>
        <div className="home-hero__bg-line-horizontal"></div>
      </div>

      <div className="container mx-auto h-full flex items-center justify-center px-4 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full h-[80%] max-h-[800px]">

          {/* Left Column - Standing Pill Shape */}
          <div className="col-span-1 bg-[#1a1a1a] rounded-[1000px] flex flex-col items-center justify-center text-white p-10 relative overflow-hidden shadow-2xl">
            {/* Content for the left column - mimicking the 'Connect Worldwide' vibe from the image */}
            <div className="absolute top-16 text-center">
              <div className="text-green-400 font-medium mb-1">Connect</div>
              <div className="text-2xl font-grift tracking-wide">Worldwide</div>
            </div>

            {/* Placeholder for the globe/map graphic */}
            <div className="w-full aspect-square rounded-full border border-white/10 flex items-center justify-center relative opacity-50">
              {/* Simple visual representation of the map/globe */}
              <div className="w-[80%] h-[80%] rounded-full border border-dashed border-white/20 animate-spin-slow"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl">🌍</span>
              </div>
            </div>

            <div className="absolute bottom-16 text-center">
              <div className="font-handwriting text-green-400 text-3xl -rotate-6">Osmo's Global</div>
              <div className="font-handwriting text-green-400 text-3xl -rotate-6 ml-8">Community</div>
            </div>
          </div>

          {/* Right Column - Rectangle with Testimonial Card */}
          <div className="col-span-2 bg-[#e8e8e8] rounded-3xl p-8 flex items-center justify-center relative shadow-xl">

            {/* Inner Rectangle / Card Container */}
            <div className="w-full h-full max-w-4xl relative flex items-center justify-center">
              <TestimonialCard
                {...testimonialsData[currentIndex]}
              />
            </div>

            {/* Navigation Indicators (Side) */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-1 h-8 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-[#634bf8] h-12' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials