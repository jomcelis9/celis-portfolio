import React from "react";

export default function Drowsiness() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-200 font-sans py-20 px-6 md:px-12 flex flex-col items-center">
      <div className="max-w-2xl w-full">
        {/* Header Section */}
        <div className="flex items-start gap-6 md:gap-8">
          <div className="w-14 h-16 md:w-20 md:h-20 bg-transparent rounded-2xl overflow-hidden relative shadow-inner shrink-0 mt-3 md:mt-4">
            <img
              src="https://img.icons8.com/?size=100&id=Rffi8qeb2fK5&format=png&color=000000 "
              alt=""
            />
          </div>
          <h1 className="font-Satoshi text-5xl md:text-7xl lg:text-7xl font-normal tracking-tight text-white leading-[1.05]">
            Drowsiness Detector using YOLOv8
          </h1>
        </div>

        {/* Metadata Section */}
        <div className="mt-24 flex flex-col gap-6 w-full">
          <div className="flex items-baseline w-full">
            <span className="text-white text-lg md:text-xl shrink-0">Year</span>
            <div className="flex-grow border-b border-neutral-700 mx-4 opacity-50 relative top-[-6px]"></div>
            <span className="text-white text-lg md:text-xl shrink-0">2025</span>
          </div>
          <div className="flex items-baseline w-full">
            <span className="font-Satoshi text-white text-lg md:text-xl shrink-0">
              My role
            </span>
            <div className="flex-grow border-b border-neutral-700 mx-4 opacity-50 relative top-[-6px]"></div>
            <span className="text-white text-lg md:text-xl shrink-0">
              Data Scientist, Frontend Developer
            </span>
          </div>
          <div className="flex items-baseline w-full">
            <span className="font-Satoshi text-white text-lg md:text-xl shrink-0">
              See it live!
            </span>
            <div className="flex-grow border-b border-neutral-700 mx-4 opacity-50 relative top-[-6px]"></div>
            <span className="text-white text-lg md:text-xl shrink-0">
              <a
                className="underline decoration-2 text-slate-400 "
                href="https://machine-learning-dsicvy4h5xd83rdjjbqxmr.streamlit.app/"
              >
                DrowsinessDetector
              </a>{" "}
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
            <img src="src/assets/Images/SS_Streamlit_1.png" alt="" />
            <p className="text-neutral-400 text-xs md:text-xl m-10 leading-relaxed">
              This is my first designing a hero section ever.
            </p>
            <img src="src/assets/Images/SS_Streamlit_2.png" alt="" />
            <p className="text-neutral-400 text-xs md:text-xl m-10 leading-relaxed">
              This is my first designing a hero section ever.
            </p>
            <img src="src/assets/Images/SS_Streamlit_4.png" alt="" />
            <p className="text-neutral-400 text-xs md:text-xl m-10 leading-relaxed">
              This is my first designing a hero section ever.
            </p>
            <img src="src/assets/Images/SS_Streamlit_5.png" alt="" />
            <p className="text-neutral-400 text-xs md:text-xl m-10 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate ducimus corporis commodi consectetur voluptates nisi
              officiis repudiandae accusamus inventore dolores in mollitia iure
              labore nihil nulla, odit minus illum molestias?{" "}
            </p>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl text-white mb-6 font-normal tracking-tight">
              Insights
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
