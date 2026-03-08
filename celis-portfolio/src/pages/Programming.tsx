import "../index.css";
import meshCircle from "../assets/Images/Mesh Circle.svg";
import meshCircle2 from "../assets/Images/Mesh Circle2.svg";
import { easeInOut, motion, scale, useInView, useScroll } from "motion/react";
import { useState, useRef } from "react";
import LogoCard from "../Components/LogoCard";
import ProjectCard from "../Components/ProjectCard";
import { delay } from "motion";
import Logos from "../assets/logos";
import { footer } from "motion/react-client";
import WebsiteCard from "../Components/WebsiteCard";
import ProjectTemplate from "./ProjectPage";

export default function Programming() {
  const logoObject = new Logos();
  const aboutMeRef = useRef(null);
  const mySkillsRef = useRef(null);
  const myProjectsRef = useRef(null);
  const footerRef = useRef(null);

  const isAboutMeInView = useInView(aboutMeRef, { amount: 0.5 }); // triggers when 50% is visible
  const isMySkillsInView = useInView(mySkillsRef, { amount: 0.5 }); // triggers when 50% is visible
  const isMyProjectsInView = useInView(myProjectsRef, { amount: 0.5 });
  const isFooterRef = useInView(footerRef, { amount: 0.5 });

  return (
    <div className="relative w-full min-h-screen bg-slate-950 overflow-x-hidden">
      {/* Fixed Blue Circle */}
      <div>
        <motion.img
          initial={{
            opacity: 1,
            scale: 1.5,
            filter: "blur(10px)",
          }}
          animate={{
            opacity:
              isMySkillsInView || isMyProjectsInView || isFooterRef ? 0 : 1,
            scale: 1.6,
            // filter: isInView
            //   ? "blur(15px) brightness(0.5) hue-rotate(160deg)" // Changes color
            //   : "blur(15px) brightness(1) hue-rotate(0deg)", // Default color
          }}
          transition={{
            duration: 3,
            // repeat: isMySkillsInView ? 0 : Infinity,
            // repeatType: "mirror",
          }}
          className="
            fixed
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[80vw]
            max-w-[1000px]
            z-1
            pointer-events-none
            mix-blend-screen
            "
          src={meshCircle}
          alt="Blue Mesh Circle"
        />
        <div>
          {/* Ring 1 */}
          <motion.svg
            initial={{ opacity: 0, filter: "blur(5px)" }}
            animate={{ opacity: isAboutMeInView ? 1 : 0 }}
            transition={{ duration: 1, ease: easeInOut }}
            viewport={{ once: true }}
            className="fixed
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-screen
              h-screen
              z-0
              pointer-events-none
              mix-blend-screen"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              r="80"
              cx="50"
              cy="50"
              stroke="white"
              strokeWidth="0.4"
              fill="none"
              opacity="0.5"
            />
          </motion.svg>

          {/* Ring 2 */}
          <motion.svg
            initial={{ opacity: 0, filter: "blur(5px)" }}
            animate={{ opacity: isAboutMeInView ? 1 : 0 }}
            transition={{ duration: 1, ease: easeInOut, delay: 0.5 }}
            viewport={{ once: true }}
            className="fixed
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-screen
              h-screen
              z-0
              pointer-events-none
              mix-blend-screen"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              r="90"
              cx="50"
              cy="50"
              stroke="white"
              strokeWidth="0.4"
              fill="none"
              opacity="0.5"
            />
          </motion.svg>
        </div>

        {/* Ring 3 */}

        <motion.svg
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: isAboutMeInView ? 1 : 0 }}
          transition={{ duration: 1, ease: easeInOut, delay: 1 }}
          viewport={{ once: true }}
          className="fixed
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-screen
              h-screen
              z-0
              pointer-events-none
              mix-blend-screen"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            r="105"
            cx="50"
            cy="50"
            stroke="white"
            strokeWidth="0.1"
            fill="none"
            opacity="0.5"
          />
        </motion.svg>
      </div>

      {/* Fixed Background Grid */}
      <div
        className="
            
            fixed inset-0
            bg-[linear-gradient(to_right,rgba(240,240,240,0.1)_1px,transparent_1px),
                linear-gradient(to_bottom,rgba(240,240,240,0.1)_1px,transparent_1px)]
            bg-[size:18rem_12rem]
            z-10
            "
      />

      {/* Main Page Content */}
      <main className="relative z-20">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex
          items-center
          justify-center 
          w-full
          min-h-screen 
          p-10 
          text-white 
          font-Clash"
        >
          <div className="max-w-5xl overflow-hidden leading[1 item-center justify-center">
            <h1 className="text-BigAss my-[-2rem]">Jomari Celis</h1>
            <p className="text-xl text-center"> Full-stack Developer</p>
          </div>
        </motion.section>

        {/* About Me Section */}
        <motion.section
          ref={aboutMeRef}
          viewport={{ once: true }}
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{ duration: 2, ease: "easeOut", delay: 1 }}
          className="flex items-center justify-center w-full min-h-screen p-10 text-white font-Clash"
        >
          <div className="flex flex-col max-w-3xl ">
            <div>
              <h2 className="text-8xl mb-8 text-center">Who I am</h2>
            </div>
            <div className="flex flex-row items-center">
              <img src={meshCircle2} className="w-100" alt="" />
              <p className="text-xl ml-2 items-center">
                I’m Jom, a passionate developer who loves building immersive
                digital experiences. Whether I’m crafting sleek front-end
                interfaces or experimenting with creative animations, I strive
                for clean code and compelling visuals. Outside coding, I enjoy
                learning new technologies and creating inspiring projects.
              </p>
            </div>
          </div>
        </motion.section>

        {/* My skills section */}

        <motion.section
          ref={mySkillsRef}
          className="flex grid items-center justify-center w-full min-h-screen p-10 text-white font-Clash"
        >
          <div className="flex flex-row max-w-3xl text-center justify-center items-center">
            <div>
              <h2 className="text-8xl text-center ">My Skills</h2>
              <p className="text-lg">
                <div className="flex flex gap-5">
                  <div className="">
                    <LogoCard
                      logo={logoObject.reactLogoBlue}
                      confidence={90}
                      technology={"React"}
                    />{" "}
                  </div>
                  <LogoCard
                    logo={logoObject.javaLogo}
                    confidence={90}
                    technology={"Java"}
                  />{" "}
                  <LogoCard
                    logo={logoObject.reactLogoBlue}
                    confidence={90}
                    technology={"React"}
                  />{" "}
                  <LogoCard
                    logo={logoObject.javaLogo}
                    confidence={90}
                    technology={"Java"}
                  />{" "}
                </div>
              </p>
            </div>
          </div>
        </motion.section>

        {/* Projects section */}

        <motion.section
          ref={myProjectsRef}
          className="flex items-center justify-center w-full min-h-screen p-10 text-white font-Clash"
        >
          <div className="flex flex-row max-w-7xl w-full">
            <div className="w-full">
              <h2 className="text-8xl mb-10 text-center">My Projects</h2>
              <p className="text-lg"></p>
              <div className="flex flex-col lg:flex-row flex-wrap gap-6 justify-center items-stretch">
                <WebsiteCard
                  title="Jacsons' Website"
                  description="ABCDEFG"
                  imageUrl=""
                  badgeText="dd"
                  glowColor="rgba(83, 255, 166, 0.69)"
                  linkUrl="/jacsons"
                />

                <WebsiteCard
                  title="The Point Website"
                  description="ABCDEFG"
                  imageUrl=""
                  badgeText="dd"
                  glowColor="rgba(246, 83, 255, 0.69)"
                  linkUrl=""
                />

                <WebsiteCard
                  title="Jom's CGS"
                  description="ABCDEFG"
                  imageUrl=""
                  badgeText="dd"
                  glowColor="rgba(255, 195, 74, 0.69)"
                  linkUrl=""
                />

                <WebsiteCard
                  title="Jacsons' Website"
                  description="ABCDEFG"
                  imageUrl=""
                  badgeText="dd"
                  linkUrl=""
                />

                <WebsiteCard
                  title="Jacsons' Website"
                  description="ABCDEFG"
                  imageUrl=""
                  badgeText="dd"
                  linkUrl=""
                />

                <WebsiteCard
                  title="Jacsons' Website"
                  description="ABCDEFG"
                  imageUrl=""
                  badgeText="dd"
                  linkUrl=""
                />
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <footer
        ref={footerRef}
        className="bg-black  justify-center items-center "
      >
        <div className="z-2 mt-5 text-white text-6xl text-center text-center font-Clash">
          <p className="p-5"> Let's Work together!</p>
          <div className="m-5">
            <p className="text-2xl">Email Me</p>
          </div>

          <button></button>
        </div>
      </footer>

      {/* <section>
            <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/80 bg-gradient-to-b from-white/60 to-white/30 p-4 transition-[transform,border,background-color] duration-300 hover:scale-110 hover:border-[rgb(70,71,77)] hover:bg-[rgb(33,34,36)] md:h-[70px] md:w-[70px]">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
                className="w-10"
            />
            </span>{" "}
        </section> */}
    </div>
  );
}
