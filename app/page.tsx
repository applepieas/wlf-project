import React from 'react'

const page = () => {
  return (
    <div className='flex justify-center items-center relative h-screen'>
      <div className='home-hero__bg'>
        <div className="home-hero__bg-line"></div>
      </div>

      <div className="container text-center">
        <div className="home-hero__content">
          <div className="home-hero__title-row font-grift font-medium text-[#211d1d] text-[120px]">
            Dev ToolKit Build to Flex
          </div>
          <div className="home-hero__description-p font-ttCommons font-normal text-[24px]">
            Platform packed with Webflow & HTML resources, icons, easings and a page transition course
          </div>
        </div>
      </div>
    </div>
  )
}

export default page