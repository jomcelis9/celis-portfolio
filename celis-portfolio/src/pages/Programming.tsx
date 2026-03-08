import "../index.css";
import meshCircle from "../assets/Images/Mesh Circle.svg";
import meshCircle2 from "../assets/Images/Mesh Circle2.svg";
import { easeInOut, motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import LogoCard from "../Components/LogoCard";
import Logos from "../assets/logos";
import WebsiteCard from "../Components/WebsiteCard";

export default function Programming() {
  const logoObject = new Logos();
  const aboutMeRef = useRef(null);
  const mySkillsRef = useRef(null);
  const myProjectsRef = useRef(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const isAboutMeInView = useInView(aboutMeRef, { amount: 0.5 });
  const isMySkillsInView = useInView(mySkillsRef, { amount: 0.5 });
  const isMyProjectsInView = useInView(myProjectsRef, { amount: 0.5 });
  const isFooterRef = useInView(footerRef, { amount: 0.5 });

  const [footerMousePos, setFooterMousePos] = useState({ x: "50%", y: "50%" });
  const [isFooterHovering, setIsFooterHovering] = useState(false);

  const handleFooterMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!footerRef.current) return;
    const rect = footerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setFooterMousePos({ x: `${x}px`, y: `${y}px` });
  };

  return (
    <div className="relative w-full min-h-screen bg-slate-950 overflow-x-hidden">
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
          }}
          transition={{
            duration: 3,
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

      <div
        className="
            fixed inset-0
            bg-[linear-gradient(to_right,rgba(240,240,240,0.1)_1px,transparent_1px),
                linear-gradient(to_bottom,rgba(240,240,240,0.1)_1px,transparent_1px)]
            bg-[size:18rem_12rem]
            z-10
            "
      />

      <main className="relative z-20">
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
          <div className="max-w-5xl overflow-hidden leading-[1] items-center justify-center">
            <h1 className="text-BigAss my-[-2rem]">Jomari Celis</h1>
            <p className="text-xl text-center"> Full-stack Developer</p>
          </div>
        </motion.section>

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

        <motion.section
          ref={mySkillsRef}
          className="flex grid items-center justify-center w-full min-h-screen p-10 text-white font-Clash"
        >
          <div className="flex flex-row max-w-3xl text-center justify-center items-center">
            <div>
              <h2 className="text-8xl text-center ">My Skills</h2>
              <p className="text-lg">
                <div className="flex gap-5">
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

      <motion.footer
        ref={footerRef}
        onMouseMove={handleFooterMouseMove}
        onMouseEnter={() => setIsFooterHovering(true)}
        onMouseLeave={() => setIsFooterHovering(false)}
        initial={{ backgroundColor: "#000000", color: "#ffffff" }}
        animate={{
          backgroundColor: isFooterRef ? "#ffffff" : "#000000",
          color: isFooterRef ? "#000000" : "#ffffff",
        }}
        transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
        className="relative overflow-hidden flex flex-col justify-center items-center w-full min-h-[50vh]"
      >
        <div
          className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-300"
          style={{
            opacity: isFooterHovering ? 1 : 0,
            background: `radial-gradient(500px circle at ${footerMousePos.x} ${footerMousePos.y}, rgba(0,0,0,0.15), transparent 60%)`,
          }}
        />

        <div className="z-10 mt-5 text-6xl text-center font-Clash relative pointer-events-none">
          <p className="p-5"> Let's Work together!</p>
          <div className="m-5">
            <p className="text-2xl">Email Me</p>
          </div>
          <button className="pointer-events-auto"></button>
        </div>
      </motion.footer>
    </div>
  );
}
