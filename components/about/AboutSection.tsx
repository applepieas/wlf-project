import React from 'react'

const AboutSection = () => {
  return (
    <div className='flex justify-center items-center relative h-screen'>
      <div className='home-hero__bg'>
        <div className="home-hero__bg-line"></div>
        <div className="home-hero__bg-line-horizontal"></div>
      </div>

      <div className="container text-center">
        <div className="home-hero__content">
          <div className='text-[2.5em] mx-40 leading-tight'>
            WLF is a fast-growing creative marketing studio. Get exclusive access to the ideas, strategies and systems behind high-performing brands and campaigns.
          </div>

          {/* Reel section */}
          <div className="mt-16 flex items-center justify-between text-[5rem] font-semibold text-neutral-300/60 tracking-tight">
            <span className="uppercase font-grift">Play</span>

            {/* Reel placeholder card */}
            <div className="mx-8 h-64 w-[24rem] rounded-xl bg-black/90 shadow-2xl shadow-black/40 border border-white/10 overflow-hidden flex items-center justify-center text-white text-base">
              <span className="opacity-80 font-grift tracking-normal">Reel preview</span>
            </div>

            <span className="uppercase font-grift">Reel</span>
          </div>
        </div>
      </div>
    </div>)
}

export default AboutSection