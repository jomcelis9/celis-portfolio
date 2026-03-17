import React from "react";
import Rogos from "../assets/Rogos";
const logos = new Rogos();
export default function JomsCGS() {
  return (
    <div className="min-h-screen font-Satoshi bg-[#0a0a0a] text-neutral-200 font-sans py-20 px-6 md:px-12 flex flex-col items-center">
      <div className="max-w-5xl w-full">
        {/* Header Section */}
        <div className="flex items-start gap-6 md:gap-8">
          <div className="w-14 h-16 md:w-20 md:h-20 bg-black rounded-2xl overflow-hidden relative shadow-inner shrink-0 mt-3 md:mt-4">
            <img src={logos.jomsCgs} alt="" />
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
        <div className="mt-20 w-full flex flex-col gap-16">
          <section>
            <div>
              <h2 className="text-3xl md:text-4xl text-white mb-6 font-normal tracking-tight">
                What's been done
              </h2>
            </div>

            <img src="src/assets/Images/Hero_CGS.png" alt="" />
            <div>
              <p className="text-neutral-400 text-xs md:text-xl leading-relaxed">
                This is my first designing a hero section ever. 
              </p>
            </div>
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
