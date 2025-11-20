import React from 'react'

const InfoGridSection = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center relative bg-[#f4f4f4]'>
      <div className="w-full px-5 h-[90%] grid grid-cols-5 gap-10 py-20 mx-40">

        {/* Left Column - 1fr */}
        <div className="col-span-2 flex flex-col h-full relative pt-8 my-5">
          {/* Gray line above */}
          <div className="absolute top-0 w-full h-[1px] bg-[#e1e1e1]"></div>

          {/* Card */}
          <div className="flex-1 bg-neutral-200/50 w-full rounded-xl h-[600px] max-h-[80vh]">
            {/* Content placeholder */}
          </div>
        </div>

        {/* Right Column - 2fr */}
        <div className="col-span-3 flex flex-col h-full relative pt-8 my-5">
          {/* Gray line above */}
          <div className="absolute top-0 w-full h-[1px] bg-[#e1e1e1]"></div>

          {/* Card with pill shape */}
          <div className="flex-1 bg-neutral-200/50 w-full rounded-full h-[600px] max-h-[80vh]">
            {/* Content placeholder */}
          </div>
        </div>

      </div>
    </div>
  )
}

export default InfoGridSection
