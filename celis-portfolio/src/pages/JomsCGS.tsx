import React from "react";

export default function JomsCGS() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-200 font-sans py-20 px-6 md:px-12 flex flex-col items-center">
      <div className="max-w-2xl w-full">
        {/* Header Section */}
        <div className="flex items-start gap-6 md:gap-8">
          <div className="w-14 h-16 md:w-20 md:h-20 bg-black rounded-2xl overflow-hidden relative shadow-inner shrink-0 mt-3 md:mt-4">
            <img src="src/assets/Images/jomsChili.png" alt="" />
          </div>
          <h1 className="font-Satoshi text-5xl md:text-7xl lg:text-7xl font-normal tracking-tight text-white leading-[1.05]">
            Jom's Chili Garlic Sauce website design
          </h1>
        </div>

        {/* Metadata Section */}
        <div className="mt-24 flex flex-col gap-6 w-full">
          <div className="flex items-baseline w-full">
            <span className="text-white text-lg md:text-xl shrink-0">Year</span>
            <div className="flex-grow border-b border-neutral-700 mx-4 opacity-50 relative top-[-6px]"></div>
            <span className="text-white text-lg md:text-xl shrink-0">2023</span>
          </div>
          <div className="flex items-baseline w-full">
            <span className="font-Satoshi text-white text-lg md:text-xl shrink-0">
              My role
            </span>
            <div className="flex-grow border-b border-neutral-700 mx-4 opacity-50 relative top-[-6px]"></div>
            <span className="text-white text-lg md:text-xl shrink-0">
              Design
            </span>
          </div>
          <div className="font-Satoshi flex items-baseline w-full">
            <span className="text-white text-lg md:text-xl shrink-0">Team</span>
            <div className="flex-grow border-b border-neutral-700 mx-4 opacity-50 relative top-[-6px]"></div>
            <span className="text-white text-lg md:text-xl shrink-0">
              PM, Engineers, Data Analyst
            </span>
          </div>
        </div>

        {/* Content Sections */}
        <div className="mt-20 flex flex-col gap-16">
          <section>
            <h2 className="text-3xl md:text-4xl text-white mb-6 font-normal tracking-tight">
              What's been done
            </h2>
            <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
              Designed the UI using a design system for 3 platforms: iOS,
              Android and web. With the help of data analyst tested my solution
              on a small batch of users. Eventually, rolled out to everyone.
            </p>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl text-white mb-6 font-normal tracking-tight">
              Context
            </h2>
            <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
              OLX is a classifieds where historically one ad = one item. You've
              never been meant to sold more, so people reactived ads/created
              multiple ads.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
