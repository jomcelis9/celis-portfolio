import React from "react";
import { useNavigate } from "react-router";
import Rogos from "../assets/Rogos";
const logos = new Rogos();

export default function ThePoint() {
  const navigate = useNavigate();

  return (
    <div className=" relative min-h-screen font-Satoshi bg-black text-neutral-200 font-sans py-20 px-6 md:px-12 flex flex-col items-center">
      {/* Gradient Header Background with Noise */}
      <div
        className="absolute top-0 left-0 w-full h-[500px] pointer-events-none z-0 opacity-70 [mask-image:linear-gradient(to_bottom,white,transparent)]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"), linear-gradient(135deg, #7ab4d8 0%, #4a7ab5 50%, #1c3275 100%)`,
          backgroundBlendMode: "overlay",
        }}
      ></div>

      {/* Navigate Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-8 left-6 md:top-12 md:left-12 z-20 flex items-center gap-2 text-white text-sm font-medium font-Satoshi cursor-pointer w-max after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[1px] after:bg-current after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-500 after:delay-150 after:ease-out bg-transparent border-none p-0"
      >
        ← Back to Programming
      </button>

      <div className="max-w-2xl w-full">
        {/* Header Section */}
        <div className="flex items-start gap-6 md:gap-8">
          <div className="w-14 h-16 md:w-20 md:h-20 bg-transparent rounded-2xl overflow-hidden relative shadow-inner shrink-0 mt-3 md:mt-4">
            <img className="w-xl" src="src/assets/Images/thepoint.png" alt="" />
          </div>
          <h1 className="font-Satoshi text-5xl md:text-7xl lg:text-7xl font-normal tracking-tight text-white leading-[1.05]">
            The Point therapy clinic appointment system (Frontend only)
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
                href="https://the-point.vercel.app/"
              >
                The point
              </a>{" "}
            </span>
          </div>
        </div>

        {/* Content Sections */}
        <div className="mt-20 w-full flex flex-col gap-16">
          <section>
            <div>
              <h2 className="text-4xl md:text-4xl text-white mb-6 font-normal tracking-tight">
                Overview:
              </h2>
              <p className="   text-xs md:text-xl m-10 leading-relaxed">
                It's in the name: Drowsiness Detector. You upload a video with
                people's faces, let the machine do it's thing, and viola! You
                have a video with annotations in people's faces.{" "}
              </p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl text-white mb-6 font-normal mt-5 tracking-tight">
                What's been done
              </h2>
            </div>
            <img src="src/assets/Images/hero_thepoint.png" alt="" />
            <p className="   text-xs md:text-xl m-10 leading-relaxed">
              Hero page with video
            </p>
            <img src="src/assets/Images/loc_thepoint.png" alt="" />
            <p className="   text-xs md:text-xl m-10 leading-relaxed">
              This is my first designing a hero section ever.
            </p>
            <img src="src/assets/Images/newClient_thepoint.png" alt="" />
            <p className="   text-xs md:text-xl m-10 leading-relaxed">
              This is my first designing a hero section ever.
            </p>
            <img src="src/assets/Images/cleintDetails_thepoint.png" alt="" />
            <p className="   text-xs md:text-xl m-10 leading-relaxed">
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
            <p className="   text-lg md:text-xl leading-relaxed">
              Creating a fullstack appointment website is super hard work
              There's lots of factors you have to keep in mind, don't even
              mention the deployment -- it's like a whole different app!
              Database design was the single most important thing in this
              project. Without thorough analysis of the business requirements,
              and storage management foresight, the website would likely go
              haywire. Normalized databases and mastering the tech stack is
              essential. Buildding a relational database should be take
              intricate planning and perfect teamwork for things to work.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
