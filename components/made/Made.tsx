import React from 'react'

const features = [
  {
    title: "Build faster and better",
    description: "Our resources save you hours of rebuilding from scratch. Each one is made for real-world projects, so you can focus on shipping work that stands out."
  },
  {
    title: "Speed up your process",
    description: "These aren't stripped-down templates. Every resource is built to be fast, flexible, and production-ready, so you can ship beautiful work without trading quality for time."
  },
  {
    title: "A living and growing system",
    description: "We keep adding new resources, ideas, and techniques every week. The Vault evolves with you and your needs, so your toolkit never stops expanding."
  }
]

const Made = () => {
  return (
    <div className='w-full min-h-screen bg-[#f4f4f4] flex items-center justify-center py-20'>
      <div className="container mx-auto px-4 md:px-10 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 h-full">

          {/* Left Column - 2fr (2/5 cols) */}
          <div className="lg:col-span-2 flex flex-col justify-between">
          </div>

          {/* Right Column - 3fr (3/5 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-12">

            {/* Header Section */}
            <div className="relative">
              {/* Annotation */}
              <div className="absolute -left-32 top-0 hidden lg:block">
                <div className="font-handwriting text-[#ff4d4d] text-3xl -rotate-12 relative">
                  Why Osmo?
                  <svg className="absolute top-full left-1/2 w-8 h-8 text-[#ff4d4d] transform -translate-x-1/2 translate-y-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 3c-2 5-5 8-8 10" />
                    <path d="M2 13l4 4" />
                  </svg>
                </div>
              </div>

              <h2 className="text-5xl md:text-6xl lg:text-7xl font-grift font-medium tracking-tight text-[#1a1a1a] leading-[0.95]">
                Level up your game and join a community of creatives who love building great websites as much as you do.
              </h2>
            </div>

            {/* Feature List */}
            <div className="flex flex-col font-grift">
              {features.map((feature, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-t border-neutral-300">
                  <div className="md:col-span-1">
                    <h3 className="text-xl font-grift  font-medium text-[#1a1a1a]">{feature.title}</h3>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-lg text-neutral-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
              {/* Bottom Border */}
              <div className="border-t border-neutral-300"></div>
            </div>

            {/* Footer Badge */}
            <div className="flex items-center gap-4 mt-auto">
              <div className="inline-flex items-center bg-[#e0e0e0] rounded-full px-1 py-1">
                <span className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-neutral-500">
                  Trusted by
                </span>
              </div>
              <div className="inline-flex items-center bg-[#e0e0e0] rounded-full px-1 py-1">
                <span className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-neutral-500">
                  Industry Giants
                </span>
              </div>

              <div className="h-[1px] flex-1 bg-neutral-300"></div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Made