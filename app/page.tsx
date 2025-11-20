import HeroSection from '@/components/hero/HeroSection'
import AboutSection from '@/components/about/AboutSection'
import InfoGridSection from '@/components/info/InfoGridSection'
import React from 'react'


const page = () => {
  return (

    <div className='min-h-screen'>
      <HeroSection />
      <AboutSection />
      <InfoGridSection />
    </div>
  )
}

export default page