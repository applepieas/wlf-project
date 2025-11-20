const PricingSection = () => {
  return (
    <section className="relative min-h-[150vh] bg-[#211d1d] py-[8vh] px-[5vw] pb-[10vh] flex flex-col items-center font-['Grift'] max-md:padding-[6vh_4vw_8vh]">
      {/* Handwritten Save Note */}


      {/* Toggle Buttons */}
      <div className="flex gap-0 mb-[4vh] rounded-[50px] overflow-hidden shadow-lg">
        <button className="py-[0.9rem] px-[2rem] text-[0.95rem] font-semibold border-none cursor-pointer transition-all duration-300 bg-[#7c3aed] text-[#f4f4f4] whitespace-nowrap max-sm:py-[0.75rem] max-sm:px-[1.5rem] max-sm:text-[0.85rem]">For Individuals</button>
        <button className="py-[0.9rem] px-[2rem] text-[0.95rem] font-semibold border-none cursor-pointer transition-all duration-300 bg-[#211d1d] text-[#f4f4f4] whitespace-nowrap hover:bg-[#383838] max-sm:py-[0.75rem] max-sm:px-[1.5rem] max-sm:text-[0.85rem]">For Teams</button>
      </div>

      {/* Section Title */}
      <h2 className="text-[clamp(2.5rem,5vw,3.8rem)] font-bold text-[#f4f4f4] my-[2vh] mb-[1.5vh] text-center tracking-tight max-md:text-[2.2rem]">Pricing for Individuals</h2>
      <p className="text-[1.15rem] text-[#b0b0b0] mb-[6vh] text-center font-normal max-md:text-[1rem]">Choose the plan that fits you best</p>

      {/* Pricing Cards Container */}
      <div className="grid grid-cols-2 gap-[3rem] max-w-[1600px] w-[95%] mb-[5vh] max-md:grid-cols-1 max-md:gap-[2rem] max-md:max-w-[500px]">
        {/* Member Card - Left */}
        <div className="rounded-[24px] p-[4rem_3.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.4)] flex flex-col min-h-[80vh] h-[80vh] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_25px_80px_rgba(0,0,0,0.5)] max-sm:p-[2rem_1.8rem] bg-[#f4f4f4]">
          <div className="flex justify-between items-start mb-[1.5rem] min-h-[50px]">
            <span className="bg-[#211d1d] text-[#f4f4f4] px-[0.85rem] py-[0.4rem] rounded-[6px] text-[0.7rem] font-bold tracking-wider">ONE USER</span>
          </div>

          <h3 className="text-[2.8rem] font-bold text-[#211d1d] mb-[1rem] tracking-tight max-sm:text-[2.2rem]">Member</h3>

          <div className="mb-[1.5rem]">
            <span className="text-[2.5rem] font-bold text-[#211d1d] block leading-none mb-[0.3rem] max-sm:text-[2rem]">€25 <span className="text-[1.2rem] font-medium text-[#666666] ml-[0.3rem]">EUR</span></span>
            <span className="text-[0.85rem] font-semibold text-[#666666] tracking-wider block mb-[0.8rem]">PER MONTH</span>

            <div className="h-[38px] inline-flex items-center bg-[#7c3aed] px-[1rem] py-[0.45rem] rounded-[50px] gap-[0.5rem] mt-[0.5rem]">
              <span className="text-[0.7rem] font-bold text-[#f4f4f4] tracking-wider cursor-pointer transition-colors duration-200">QUARTERLY</span>
              <span className="text-[#f4f4f4]/40 font-normal">/</span>
              <span className="text-[0.7rem] font-bold text-[#f4f4f4]/60 tracking-wider cursor-pointer transition-colors duration-200">ANNUALLY</span>
            </div>
          </div>

          <p className="text-[0.95rem] leading-[1.6] text-[#4a4a4a] mb-[1.8rem] grow-0">
            Perfect if you're looking to level up your dev game without any long-term commitments.
          </p>

          <button className="w-full py-[1rem] px-[2rem] text-[1rem] font-semibold border-none rounded-[8px] cursor-pointer transition-all duration-300 mb-[2rem] bg-[#7c3aed] text-[#f4f4f4] shadow-[0_4px_12px_rgba(124,58,237,0.3)] hover:bg-[#6d28d9] hover:shadow-[0_6px_20px_rgba(124,58,237,0.4)] hover:-translate-y-0.5">Become a member</button>

          <div className="mt-auto">
            <h4 className="text-[1rem] font-semibold text-[#211d1d] mb-[1rem]">Benefits:</h4>
            <div className="flex items-center gap-[0.8rem] mb-[1rem]">
              <span className="bg-[#7c3aed] text-[#f4f4f4] px-[0.6rem] py-[0.3rem] rounded-[6px] text-[0.75rem] font-bold shrink-0">123</span>
              <span className="text-[0.9rem] text-[#4a4a4a] leading-[1.4]">Vault resources, and always growing</span>
            </div>
            <a href="#" className="text-[0.9rem] text-[#211d1d] underline cursor-pointer transition-opacity duration-200 hover:opacity-70">View all benefits</a>
          </div>
        </div>

        {/* Lifetime Card - Right */}
        <div className="rounded-[24px] p-[4rem_3.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.4)] flex flex-col min-h-[80vh] h-[80vh] transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_25px_80px_rgba(0,0,0,0.5)] max-sm:p-[2rem_1.8rem] bg-[#7c3aed] relative">
          <div className="flex justify-between items-start mb-[1.5rem] min-h-[50px]">
            <span className="bg-black/30 text-[#f4f4f4] px-[0.85rem] py-[0.4rem] rounded-[6px] text-[0.7rem] font-bold tracking-wider">ONE USER</span>
          </div>

          <h3 className="text-[2.8rem] font-bold text-[#f4f4f4] mb-[1rem] tracking-tight max-sm:text-[2.2rem]">Lifetime</h3>

          <div className="mb-[1.5rem]">
            <span className="text-[2.5rem] font-bold text-[#f4f4f4] block leading-none mb-[0.3rem] max-sm:text-[2rem]">€599 <span className="text-[1.2rem] font-medium text-[#f4f4f4]/80 ml-[0.3rem]">EUR</span></span>
            <span className="text-[0.85rem] font-semibold text-[#f4f4f4]/80 tracking-wider block mb-[0.8rem]">ONE TIME</span>
            <div className="h-[38px] inline-flex items-center bg-[#a1ff62] px-[1rem] py-[0.55rem] rounded-[50px] gap-[0.5rem] mt-[0.5rem]">
              <span className="text-[0.7rem] font-bold text-[#211d1d] tracking-wider cursor-pointer transition-colors duration-200">BONUS INCLUDED</span>
            </div>
          </div>

          <p className="text-[0.95rem] leading-[1.6] text-[#f4f4f4]/90 mb-[1.8rem] grow-0">
            Perfect if you're looking to level up your dev game without any long-term commitments.
          </p>

          <button className="w-full py-[1rem] px-[2rem] text-[1rem] font-semibold border-none rounded-[8px] cursor-pointer transition-all duration-300 mb-[2rem] bg-[#211d1d] text-[#f4f4f4] shadow-lg hover:bg-[#211d1d] hover:shadow-xl hover:-translate-y-0.5">Become a member</button>

          <div className="mt-auto">
            <h4 className="text-[1rem] font-semibold text-[#f4f4f4] mb-[1rem]">Benefits:</h4>
            <div className="flex items-center gap-[0.8rem] mb-[1rem]">
              <span className="bg-[#f4f4f4]/20 text-[#f4f4f4] px-[0.6rem] py-[0.3rem] rounded-[6px] text-[0.75rem] font-bold shrink-0">123</span>
              <span className="text-[0.9rem] text-[#f4f4f4]/95 leading-[1.4]">Vault resources, and always growing</span>
            </div>
            <a href="#" className="text-[0.9rem] text-[#f4f4f4] underline cursor-pointer transition-opacity duration-200 hover:opacity-70">View all benefits</a>
          </div>
        </div>
      </div>

      {/* View Full Pricing Button */}
      <div className="mt-[4vh]">
        <button className="py-[1rem] px-[2.5rem] text-[1rem] font-semibold bg-[#f4f4f4] text-[#211d1d] border-none rounded-[8px] cursor-pointer transition-all duration-300 shadow-lg hover:bg-[#f0f0f0] hover:shadow-xl hover:-translate-y-0.5">View full pricing</button>
      </div>
    </section>
  )
}

export default PricingSection