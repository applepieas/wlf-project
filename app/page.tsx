import HeroSection from '@/components/hero/HeroSection'
import AboutSection from '@/components/about/AboutSection'
import React from 'react'


const page = () => {
  return (

    <div className='h-[200vh]'>
      <HeroSection />
      <AboutSection />
    </div>
  )
}

export default page