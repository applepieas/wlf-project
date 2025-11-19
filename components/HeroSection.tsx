import React from 'react'
import SpinningCards from './SpinningCards'
import Description from './Description'
import Title from './Title'

const HeroSection = () => {
  return (
    <div className='flex justify-center items-center relative h-screen'>
      <div className='home-hero__bg'>
        <div className="home-hero__bg-line"></div>
      </div>

      <div className="container text-center">
        <div className="home-hero__content">
          <Title />
          <Description />
          <SpinningCards />
        </div>
      </div>
    </div>
  )
}

export default HeroSection