'use client'

import React, { useState } from 'react';

const Footer = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="w-full bg-[#f4f4f4] text-[#211d1d] font-grift flex flex-col justify-between min-h-screen">
      {/* Top Section */}
      <div className="w-full p-6 md:p-10 lg:p-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
        {/* Left Column: Newsletter */}
        <div className="flex flex-col gap-8">
          <h3 className="text-3xl md:text-4xl font-medium">
            Subscribe to the WLF Newsletter
          </h3>

          <form className="flex flex-col gap-4 w-full max-w-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name"
                className="bg-[#e5e5e5] p-4 text-lg placeholder:text-gray-400 outline-none focus:ring-1 focus:ring-[#211d1d]"
              />
              <input
                type="email"
                placeholder="yourname@email.com"
                className="bg-[#e5e5e5] p-4 text-lg placeholder:text-gray-400 outline-none focus:ring-1 focus:ring-[#211d1d]"
              />
            </div>

            <div className="flex items-center gap-3 mt-2 cursor-pointer" onClick={() => setIsChecked(!isChecked)}>
              <div
                className={`w-6 h-6 rounded-full border border-[#211d1d] flex items-center justify-center transition-colors duration-200 ${isChecked ? 'bg-[#211d1d]' : 'bg-transparent'}`}
              >
                {isChecked && <div className="w-2 h-2 bg-[#f4f4f4] rounded-full" />}
              </div>
              <span className={`text-lg select-none transition-colors duration-200 ${isChecked ? 'text-[#211d1d] font-bold' : 'text-[#211d1d]'}`}>
                I agree to the <span className="underline">Privacy Policy</span>
              </span>
            </div>

            <button className="bg-[#211d1d] text-[#f4f4f4] px-8 py-4 mt-4 w-fit uppercase text-base tracking-wide hover:bg-[#6841ff] transition-colors duration-300">
              Get updates
            </button>
          </form>
        </div>

        {/* Right Column: Links */}
        <div className="flex flex-col justify-between gap-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-[#211d1d]">
            {/* Product */}
            <div className="flex flex-col gap-2">
              <h4 className="text-2xl font-medium mb-2">Product</h4>
              <a href="#" className="text-xl hover:opacity-70 transition-opacity">The Vault</a>
              <a href="#" className="text-xl hover:opacity-70 transition-opacity flex items-center gap-2">
                Page Transition Course
                <span className="bg-[#6841ff] text-white text-xs px-1.5 py-0.5 rounded-sm">WIP</span>
              </a>
              <a href="#" className="text-xl hover:opacity-70 transition-opacity">Icon Library</a>
              <a href="#" className="text-xl hover:opacity-70 transition-opacity">Community</a>
              <a href="#" className="text-xl hover:opacity-70 transition-opacity flex items-center gap-2">
                Easings <span className="bg-[#e5e5e5] text-gray-500 text-xs px-1.5 py-0.5 rounded-sm">SOON</span>
              </a>
            </div>

            {/* Community */}
            <div className="flex flex-col gap-2">
              <h4 className="text-2xl font-medium mb-2">Community</h4>
              <a href="#" className="text-xl hover:opacity-70 transition-opacity">Showcase</a>
              <a href="#" className="text-xl hover:opacity-70 transition-opacity">About Osmo</a>
              <a href="#" className="text-xl hover:opacity-70 transition-opacity">Slack Community</a>
            </div>

            {/* Membership */}
            <div className="flex flex-col gap-2">
              <h4 className="text-2xl font-medium mb-2">Membership</h4>
              <a href="#" className="text-xl hover:opacity-70 transition-opacity">Updates</a>
              <a href="#" className="text-xl hover:opacity-70 transition-opacity">Pricing</a>
              <a href="#" className="text-xl hover:opacity-70 transition-opacity">FAQs</a>
              <a href="#" className="text-xl hover:opacity-70 transition-opacity">Support</a>
            </div>
          </div>

          {/* Socials & Actions */}
          <div className="flex flex-wrap items-center gap-4 mt-auto">
            <button className="bg-[#211d1d] text-[#f4f4f4] px-8 py-4 rounded-full text-base hover:bg-[#6841ff] transition-colors">
              Login
            </button>
            <button className="bg-[#ff4d4d] text-white px-8 py-4 rounded-sm text-base hover:bg-[#ff3333] transition-colors">
              Join Osmo
            </button>

            <div className="flex gap-2 ml-auto md:ml-4">
              {['in', 'ig', 'x'].map((social) => (
                <div key={social} className="w-12 h-12 bg-[#e5e5e5] flex items-center justify-center rounded-sm hover:bg-[#d4d4d4] cursor-pointer transition-colors">
                  <span className="uppercase text-sm font-bold">{social}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Giant Logo & Credits */}
      <div className="w-full flex flex-col">
        <div className="w-full overflow-hidden leading-none flex justify-center items-end">
          <h1 className="text-[28vw] font-bold tracking-tighter text-[#211d1d] translate-y-[5%]">
            WLF
          </h1>
        </div>

        <div className="w-full flex justify-between items-center px-6 py-4 text-xs md:text-sm uppercase tracking-wider border-t border-[#211d1d]/10">
          <div className="flex gap-4">
            <span>Licensing</span>
            <span>T&Cs</span>
            <span>Privacy</span>
            <span>Cookies</span>
          </div>

          <div className="hidden md:block">
            Used for training purposes
          </div>

          <div className="flex items-center gap-1">
            <span>Developed by</span>
            <span className="bg-[#6841ff] text-white px-2 py-0.5 rounded-sm">ME</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;