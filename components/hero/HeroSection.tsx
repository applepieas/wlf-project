import React from 'react'
import SpinningCards from './SpinningCards'
import Description from './Description'
import Title from './Title'
import { FaArrowDown } from "react-icons/fa";


const HeroSection = () => {
  return (
    <div className='flex justify-center items-center relative h-screen '>
      <div className='home-hero__bg'>
        <div className="home-hero__bg-line"></div>
      </div>

      <div className="container text-center">
        <div className="home-hero__content">
          <Title />
          <Description />
          <SpinningCards />
          <div className="absolute bottom-10 text-2xl font-bold flex justify-center items-center flex-col gap-4">SCROLL <FaArrowDown className='h-8 animate-bounce-arrow' /></div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection