import React from 'react'

interface TestimonialCardProps {
  mainArgument: string
  clientName: string
  clientRole?: string
  clientImage: string
  reviewText: string
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  mainArgument,
  clientName,
  clientRole,
  clientImage,
  reviewText,
}) => {
  return (
    <div className="w-[80%] h-[70%] flex flex-col justify-between p-12 bg-[#634bf8] text-white rounded-[1.5rem]">
      {/* Top: Main Argument */}
      <div className="text-5xl font-grift leading-none tracking-wide mb-12 font-600 spacing-2 tracking-tighter">
        {mainArgument}
      </div>

      {/* Bottom Section */}
      <div className="flex items-end justify-between gap-8">
        {/* Left: Client Picture + Name */}
        <div className="flex flex-col items-start gap-3 shrink-0">
          <div className="w-20 h-20 rounded-full overflow-hidden bg-neutral-800 border-2 border-white/20">
            <img
              src={clientImage}
              alt={clientName}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left">
            <div className="font-grift text-xl tracking-wide font-bold">{clientName}</div>
            {clientRole && (
              <div className="text-xs font-bold bg-black text-white px-2 py-1 mt-1 uppercase tracking-wider rounded-sm inline-block">
                {clientRole}
              </div>
            )}
          </div>
        </div>

        {/* Right: Review Text */}
        <div className="flex-1 text-lg font-light opacity-90 leading-snug text-right max-w-[60%]">
          {reviewText}
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
