import React from 'react'

const Shape = () => {
  return (
    <div className='h-[80vh] w-full flex items-center justify-center relative bg-[#f4f4f4] font-grift'>
      <div className="w-full px-5 h-[715px] grid grid-cols-2 gap-10 mx-6 items-center">

        {/* Left Column - 1fr - Blank Pill */}
        <div className="flex flex-col h-full relative my-2">

          {/* The Pill Shape */}
          <div className="flex-1 bg-[#211d1d] w-full rounded-full h-full">
            {/* Blank */}
          </div>
        </div>

        {/* Right Column - 1fr - Purple Card */}
        <div className="flex flex-col h-full relative my-2">

          {/* Purple Card */}
          <div className="flex-1 bg-[#6841ff] w-full rounded-3xl h-full p-12 flex flex-col justify-between relative overflow-hidden text-[#f4f4f4]">

            {/* Top Section: Avatars + Text */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-300 z-10">
                  <img src="https://i.pravatar.cc/150?u=1" alt="avatar" className="w-full h-full object-cover" />
                </div>
                <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-400 z-9">
                  <img src="https://i.pravatar.cc/150?u=2" alt="avatar" className="w-full h-full object-cover" />
                </div>
                <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-500 z-8">
                  <img src="https://i.pravatar.cc/150?u=3" alt="avatar" className="w-full h-full object-cover" />
                </div>
                <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-600 z-7">
                  <img src="https://i.pravatar.cc/150?u=4" alt="avatar" className="w-full h-full object-cover" />
                </div>
              </div>
              <span className="text-lg font-medium">Join 1.4K+ others</span>
            </div>

            {/* Middle Section: Heading */}
            <div className="flex flex-col gap-2">
              <h2 className="text-[9rem] leading-[0.9] tracking-tighter">
                Ready to <br /> level up?
              </h2>
            </div>

            {/* Bottom Section: CTA */}
            <div className="flex flex-col gap-8">
              <p className="text-xl opacity-90">
                Become a member to unlock the full Osmo toolkit today.
              </p>
              <div className="flex items-center gap-4">
                <button className="bg-[#211d1d] text-[#f4f4f4] px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity cursor-pointer">
                  Become a member
                </button>
                <button className="bg-[#f4f4f4] text-[#211d1d] px-8 py-4 rounded-lg text-lg font-medium hover:opacity-90 transition-opacity cursor-pointer">
                  FAQs
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Shape