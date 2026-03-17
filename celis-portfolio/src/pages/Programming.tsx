import "../index.css";
import meshCircle from "../assets/Images/Mesh Circle.svg";
import meshCircle2 from "../assets/Images/Mesh Circle2.svg";
import AI_Stars from "../assets/Images/AI_Stars.png";
import pfp_profile from "../assets/Images/pfp_profile.png";
import {
  easeInOut,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";
import LogoCard from "../Components/LogoCard";
import WebsiteCard from "../Components/WebsiteCard";
import SectionTag from "../Components/SectionTag";
import Rogos from "../assets/Rogos";

export default function Programming() {
  const logoObject = new Rogos();
  const containerRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef(null);
  const mySkillsRef = useRef(null);
  const myProjectsRef = useRef(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const isAboutMeInView = useInView(aboutMeRef, { amount: 0.2 });
  const isMySkillsInView = useInView(mySkillsRef, { amount: 0.5 });
  const isMyProjectsInView = useInView(myProjectsRef, { amount: 0.5 });
  const isFooterRef = useInView(footerRef, { amount: 0.5 });

  const textGlowAndShadow =
    "[text-shadow:0_0_15px_rgba(255,255,255,0.3),_2px_2px_4px_rgba(0,0,0,0.5)]";

  const { scrollYProgress } = useScroll({
    target: aboutMeRef,
    container: containerRef,
    offset: ["start end", "center center"],
  });

  const circleScale = useTransform(scrollYProgress, [0, 1], [1.6, 1.8]);

  const { scrollYProgress: aboutScrollProgress } = useScroll({
    target: aboutMeRef,
    container: containerRef,
    offset: ["start start", "end end"],
  });

  const p1Opacity = useTransform(aboutScrollProgress, [0, 0.3, 0.4], [1, 1, 0]);
  const p1Y = useTransform(aboutScrollProgress, [0, 0.3, 0.4], [0, 0, -30]);

  const p2Opacity = useTransform(
    aboutScrollProgress,
    [0.35, 0.5, 0.65],
    [0, 1, 0]
  );
  const p2Y = useTransform(
    aboutScrollProgress,
    [0.35, 0.5, 0.65],
    [30, 0, -30]
  );
  // sdsdsds
  const p3Opacity = useTransform(
    aboutScrollProgress,
    [0.6, 0.75, 1],
    [0, 1, 1]
  );
  const p3Y = useTransform(aboutScrollProgress, [0.6, 0.75, 1], [30, 0, 0]);

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
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-black overflow-x-hidden overflow-y-auto scroll-smooth"
    >
      <div>
        <motion.img
          style={{ scale: circleScale }}
          initial={{
            opacity: 1,
            filter: "",
            rotate: 0,
          }}
          animate={{
            opacity:
              isMySkillsInView || isMyProjectsInView || isFooterRef ? 0 : 1,
            rotate: 360,
          }}
          transition={{
            opacity: { duration: 3 },
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
          }}
          className="
            fixed
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[80vw]
            max-w-[1000px]
            z-10
            pointer-events-none
            mix-blend-screen
            "
          src={meshCircle}
          alt="Blue Mesh Circle"
        />
        <div>
          <motion.svg
            initial={{ opacity: 0, filter: "" }}
            animate={{ opacity: isAboutMeInView ? 1 : 0 }}
            transition={{ duration: 0.5, ease: easeInOut }}
            viewport={{ once: true }}
            className="fixed
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-screen
              h-screen
              z-10
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
              strokeWidth="0.1"
              fill="none"
              opacity="0.5"
            />
          </motion.svg>

          <motion.svg
            initial={{ opacity: 0, filter: "" }}
            animate={{ opacity: isAboutMeInView ? 1 : 0 }}
            transition={{ duration: 0.5, ease: easeInOut, delay: 0.5 }}
            viewport={{ once: true }}
            className="fixed
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-screen
              h-screen
              z-10
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
              strokeWidth="0.1"
              fill="none"
              opacity="0.5"
            />
          </motion.svg>

          <motion.svg
            initial={{ opacity: 0, filter: "" }}
            animate={{ opacity: isAboutMeInView ? 1 : 0 }}
            transition={{ duration: 0.5, ease: easeInOut, delay: 1 }}
            viewport={{ once: true }}
            className="fixed
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-screen
              h-screen
              z-10
              pointer-events-none
              mix-blend-screen"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              r="100"
              cx="50"
              cy="50"
              stroke="white"
              strokeWidth="0.1"
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
              z-10
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
"
      />

      <main className="relative font-Satoshi">
        {/* HERO SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex flex-col w-full min-h-screen p-6 sm:p-10 text-white font-Clash overflow-hidden"
          id="Hero"
        >
          <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,transparent_40%,#000_100%)]" />
          <motion.header
            initial={{ color: "#ffffff" }}
            animate={{ color: isFooterRef ? "#000000" : "#ffffff" }}
            transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
            className="font-Satoshi fixed top-0 left-0 z-50 w-full flex justify-between items-center text-sm sm:text-base p-6 mt-6 sm:px-10"
          >
            <a
              href="#Hero"
              className="font-Satoshi cursor-pointer block w-max relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-current after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-500 after:delay-150 after:ease-out"
            >
              back to top
            </a>

            <div className="flex gap-6 sm:gap-10">
              <a
                href="#Projects"
                className="font-Satoshi cursor-pointer block w-max relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-current after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-500 after:delay-150 after:ease-out"
              >
                my projects
              </a>
              <a
                href="#skills"
                className="font-Satoshi cursor-pointer block w-max relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-current after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-500 after:delay-150 after:ease-out"
              >
                skills
              </a>
              <a
                href="#footer"
                className="font-Satoshi cursor-pointer block w-max relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-current after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-500 after:delay-150 after:ease-out"
              >
                contact
              </a>
            </div>
          </motion.header>
          <div className="relative z-20 pt-16 sm:pt-12 md:p-12 lg:ml-48 flex flex-col w-full max-w-7xl flex-grow justify-center">
            <div>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl sm:text-4xl font-Satoshi"
              >
                <i>Hello I'm</i>
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-Tangerine font-[700] text-6xl sm:text-7xl lg:text-BigAss leading-none mb-4"
              >
                Jomari Celis
              </motion.h1>
            </div>
            <div className="font-Satoshi flex flex-wrap flex-row items-center gap-3 sm:gap-5 text-sm sm:text-base">
              <p>Software Designer</p>
              <span className="hidden sm:inline">|</span>
              <motion.div
                animate={{ color: ["#FFFFFF", "#2E6F40", "#FFFFFF"] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="font-semibold tracking-tight"
              >
                <p>Available for work</p>
              </motion.div>
            </div>

            <div className="flex flex-col md:grid md:grid-cols-[1fr_3fr] mt-8 sm:mt-12">
              <div className="hidden md:block ml-2"></div>

              <div>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="font-Satoshi font-[350] text-xl sm:text-2xl lg:text-[3rem] max-w-4xl leading-snug sm:leading-tight tracking-relaxed self-end mt-2"
                >
                  I am a creative technologist focused on building intelligent,
                  user-centered digital systems. My work combines{" "}
                  <b>AI engineering</b>, <b>full-stack development</b>, and{" "}
                  <b>UI/UX design</b>. I develop <b>PERN</b>-stack platforms,
                  database-driven applications, and machine learning systems
                  using PyTorch and computer vision. I <b>lead</b> agile
                  development teams, coordinating developers and designing
                  system architectures to bring ideas from concept to deployment
                  while building technology that blends engineering, data, and
                  thoughtful design.
                </motion.p>
              </div>
            </div>
          </div>
        </motion.section>
        {/* BIO SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex items-start justify-start w-full mb-20 lg:mb-50 h-full min-h-screen p-6 sm:p-10 text-white font-Clash overflow-hidden"
        >
          <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,transparent_40%,#000_100%)]" />
          <div className="relative z-20 pt-16 sm:p-12 sm:ml-12 lg:ml-40 flex flex-col w-full max-w-7xl">
            <div className="flex justify-center w-full">
              <SectionTag
                text="My Principles"
                textColor="#FFFFFF"
                outlineColor="#FFFFFF"
                className="mb-8 sm:mb-5"
              ></SectionTag>
            </div>
            <div className="font-Satoshi font-[350] text-2xl sm:text-4xl lg:text-[3.5rem] max-w-7xl leading-snug sm:leading-tight tracking-relaxed self-end mt-2">
              I approach both my work and daily life by combining leadership,
              problem solving, and a growth mindset. I take initiative in
              guiding teams and ideas forward, tackle challenges with analytical
              thinking and persistence, and continuously seek opportunities to
              learn and improve. Together, these attitudes shape how I build
              solutions, collaborate with others, and grow as a working member
              of society.
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mt-16 sm:mt-10 flex flex-col items-end text-right text-white"
            >
              <p className="font-Tangerine font-bold text-6xl sm:text-7xl md:text-8xl lg:text-BigAss leading-none">
                Virtus
              </p>

              <div className="font-Satoshi mt-4 flex flex-col items-end w-full max-w-md">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-base sm:text-lg italic opacity-70">
                    vir·tus
                  </span>
                  <span className="text-sm sm:text-base italic font-medium">
                    noun
                  </span>
                </div>

                <div className="text-lg sm:text-xl md:text-2xl font-light mb-4">
                  <span className="font-bold mr-2">1.</span>
                  Excellence; moral perfection.
                </div>

                <p className="text-xs sm:text-sm md:text-base font-light italic opacity-60 border-r-2 border-blue-500 pr-3">
                  "Virtus in actione consistit."
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>
        {/* ATTITUDE SECTION */}
        <section
          ref={aboutMeRef}
          className="relative z-20 w-full text-white font-Clash"
        >
          <div className="flex items-start justify-center w-full max-w-6xl mx-auto px-6 h-full">
            <div className="flex flex-col md:flex-row items-start justify-center w-full relative h-full">
              <div className="md:sticky md:top-1/2 md:-translate-y-1/2 flex justify-center w-full md:w-1/2 mb-8 md:mb-0 shrink-0 z-10 pt-[20vh] md:pt-0">
                <motion.img
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  src={pfp_profile}
                  className="w-48 md:w-64 lg:w-120  z-20"
                  alt=""
                />
                {/* <motion.img
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  src={meshCircle2}
                  className="w-48 md:w-64 lg:w-120"
                  alt=""
                /> */}
              </div>

              <div className="relative w-full md:w-1/2 md:ml-10 lg:ml-16 flex flex-col z-20 pb-[20vh]">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex flex-col items-center md:items-start w-full min-h-[80vh] justify-center"
                >
                  <div className="w-10 h-10 mb-3 rounded-md flex items-center justify-center">
                    <img src={AI_Stars} alt="" />
                  </div>
                  <h3 className="font-Satoshi text-5xl md:text-7xl text-center md:text-left font-light mb-3">
                    Leadership
                  </h3>
                  <p className="font-Satoshi text-lg md:text-xl text-center md:text-left leading-relaxed lg:leading-normal font-light">
                    Comfortable leading small teams in agile environments,
                    coordinating developers, managing project timelines, and
                    ensuring technical goals are delivered effectively.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex flex-col items-center md:items-start w-full min-h-[80vh] justify-center"
                >
                  <div className="w-10 h-10 mb-3 rounded-md flex items-center justify-center">
                    <img src={AI_Stars} alt="" />
                  </div>
                  <h3 className="font-Satoshi text-5xl md:text-7xl text-center md:text-left font-light mb-3">
                    Growth Mindset
                  </h3>
                  <p className="font-Satoshi text-lg md:text-xl text-center md:text-left leading-relaxed lg:leading-normal font-light">
                    Continuously learning new tools, technologies, and methods
                    to improve as a developer and engineer while staying
                    adaptable in fast-changing tech environments.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex flex-col items-center md:items-start w-full min-h-[80vh] justify-center"
                >
                  <div className="w-10 h-10 mb-3 rounded-md flex items-center justify-center">
                    <img src={AI_Stars} alt="" />
                  </div>
                  <h3 className="font-Satoshi text-5xl md:text-7xl text-center md:text-left font-light mb-3">
                    Creative Thinking
                  </h3>
                  <p className="font-Satoshi text-lg md:text-xl text-center md:text-left leading-relaxed lg:leading-normal font-light">
                    Combines engineering with creativity to design systems that
                    are both functional and user-focused, integrating UI/UX
                    thinking with modern technologies.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        {/* SKILLS SECTION */}
        <motion.section
          initial={{
            opacity: 0,
            // boxShadow: "inset 0 0 0px 0px rgba(59,130,246,0)",
            // borderColor: "rgba(59,130,246,0)",
          }}
          whileInView={{
            opacity: 1,
            // boxShadow: "inset 0 0 1000px 10px rgba(59,130,246,0.2)",
            // borderColor: "rgba(59,130,246,1)",
          }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          ref={mySkillsRef}
          className="relative z-20 flex items-center justify-center w-full min-h-screen p-10 text-white font-Clash overflow-hidden"
          id="skills"
        >
          <div></div>
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            {[...Array(300)].map((_, i) => (
              <motion.div
                key={`star-${i}`}
                className="absolute bg-blue-400 rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 3 + 1}px`,
                  height: `${Math.random() * 3 + 1}px`,
                }}
                animate={{
                  opacity: [0.1, 1, 0.1],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: Math.random() * 3 + 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 2,
                }}
              />
            ))}

            {[...Array(15)].map((_, i) => {
              const meteorColors = [
                "#ffffff",
                "#ffd700",
                "#ff4500",
                "#00ffff",
                "#ff00ff",
                "#00ff00",
                "#8be6d6",
              ];
              const randomColor =
                meteorColors[Math.floor(Math.random() * meteorColors.length)];

              return (
                <motion.div
                  key={`shooting-star-${i}`}
                  className="absolute h-[2px] w-[150px] rounded-full"
                  style={{
                    top: `${Math.random() * 50}%`,
                    left: `${Math.random() * 100 + 20}%`,
                    rotate: "-45deg",
                    background: `linear-gradient(to right, transparent, ${randomColor})`,
                  }}
                  initial={{
                    opacity: 0,
                    x: 0,
                    y: 0,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    x: -800,
                    y: 800,
                  }}
                  transition={{
                    duration: 1.5,
                    ease: "easeIn",
                    repeat: Infinity,
                    delay: Math.random() * 10 + 2,
                    repeatDelay: Math.random() * 15 + 5,
                  }}
                />
              );
            })}
          </div>

          <div className="relative z-10 flex flex-col w-full max-w-3xl text-center justify-center items-center px-4">
            <div className="w-full">
              <SectionTag
                text="CAPABILITIES"
                textColor="#FFFFFF"
                outlineColor="#FFFFFF"
                className="mb-5"
              ></SectionTag>
              <h2 className="font-Satoshi font-[700] text-5xl md:text-7xl lg:text-8xl text-center mb-8">
                My Skills
              </h2>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                <LogoCard
                  logo={logoObject.python}
                  confidence={90}
                  technology={"Python"}
                />
                <LogoCard
                  logo={logoObject.javaLogo}
                  confidence={90}
                  technology={"Java"}
                />
                <LogoCard
                  logo={logoObject.typeScript}
                  confidence={90}
                  technology={"TypeScript"}
                />
                <LogoCard
                  logo={logoObject.reactLogoBlue}
                  confidence={90}
                  technology={"React"}
                />
                <LogoCard
                  logo={logoObject.figma}
                  confidence={90}
                  technology={"Figma"}
                />
                <LogoCard
                  logo={logoObject.postgres}
                  confidence={90}
                  technology={"postgres"}
                />
                <LogoCard
                  logo={logoObject.claude}
                  confidence={90}
                  technology={"Claude"}
                />
                <LogoCard
                  logo={logoObject.nodeJs}
                  confidence={90}
                  technology={"NodeJs"}
                />
                <LogoCard
                  logo={logoObject.bootstrap}
                  confidence={90}
                  technology={"Tailwind "}
                />
                <LogoCard
                  logo={logoObject.pyTorch}
                  confidence={90}
                  technology={"PyTorch"}
                />
              </div>
            </div>
          </div>
        </motion.section>
        \{/* PROJECTS SECTION */}
        <motion.section
          id="Projects"
          ref={myProjectsRef}
          className="relative z-20 flex items-center justify-center w-full min-h-screen p-6 sm:p-10 text-white font-Clash"
        >
          <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-t from-blue-900/40 via-transparent to-transparent" />
          <div className="relative z-10 flex flex-col max-w-7xl w-full px-0 sm:px-4 lg:px-0">
            <div className="w-full">
              <div className="flex justify-center w-full">
                <SectionTag
                  textColor="#FFFFFF"
                  outlineColor="#FFFFFF"
                  className="mb-6 sm:mb-8"
                ></SectionTag>
              </div>

              <div className="mb-10 sm:mb-14">
                <h2 className="font-Satoshi font-[700] text-5xl md:text-7xl lg:text-8xl mb-5 sm:mb-7 text-center">
                  My Projects
                </h2>
                <p className="font-Satoshi text-center text-sm sm:text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
                  {" "}
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Accusamus omnis quos molestiae facilis alias inventore
                  dignissimos quisquam cum, repudiandae fugit repellendus
                  doloremque in a, aliquam amet temporibus quibusdam atque
                  quasi.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 w-full justify-items-center lg:justify-items-stretch">
                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none">
                  <WebsiteCard
                    title="Jacsons' Website"
                    description="ABCDEFG"
                    imageUrl=""
                    badgeText="dd"
                    glowColor="rgba(83, 255, 166, 0.69)"
                    linkUrl="/jacsons"
                  />
                </div>

                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none">
                  <WebsiteCard
                    title="The Point Website"
                    description="ABCDEFG"
                    imageUrl=""
                    badgeText="dd"
                    glowColor="rgba(246, 83, 255, 0.69)"
                    linkUrl="/thepoint"
                  />
                </div>

                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none">
                  <WebsiteCard
                    title="Jom's CGS"
                    description="A website designed for my first business: Jom's Chili Garlic Sauce!"
                    imageUrl="https://imgur.com/a/rJMseaX"
                    badgeText="Website"
                    glowColor="rgba(255, 195, 74, 0.69)"
                    linkUrl="/jomsCGS"
                  />
                </div>

                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none">
                  <WebsiteCard
                    title="Jacsons' Website"
                    description="ABCDEFG"
                    imageUrl=""
                    badgeText="dd"
                    linkUrl=""
                  />
                </div>

                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none">
                  <WebsiteCard
                    title="Jacsons' Website"
                    description="ABCDEFG"
                    imageUrl=""
                    badgeText="dd"
                    linkUrl=""
                  />
                </div>

                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none">
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
          </div>
        </motion.section>
      </main>
      {/* FOOTER */}
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
        className="relative z-20 overflow-hidden flex flex-col justify-center items-center w-full min-h-screen px-6"
        id="footer"
      >
        <motion.div
          animate={{ opacity: isFooterRef ? 0 : 1 }}
          transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
          className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-blue-900/40 via-transparent to-transparent"
        />

        <div className="font-Satoshi z-10 flex flex-col items-center justify-center gap-10 w-full max-w-5xl mx-auto font-Clash text-center pointer-events-none">
          <motion.h2
            animate={{ color: ["#000000", "#3b82f6", "#000000"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tight"
          >
            Let's Work Together!
          </motion.h2>

          <div className="flex flex-col items-center gap-10 mt-4 pointer-events-auto w-full">
            <motion.p className="text-2xl md:text-3xl font-light opacity-80 pointer-events-none">
              Got a project in mind?
            </motion.p>

            <div className="flex flex-row items-center justify-center gap-8 md:gap-12 text-lg md:text-lg font-small mb-20">
              <a
                href="mailto:jomaricelis@gmail.com"
                className="hover:scale-105 hover:underline hover:opacity-80 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                Email
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 hover:underline hover:opacity-80 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 hover:underline hover:opacity-80 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                GitHub
              </a>
            </div>

            <div className="w-[100vw] h-[1px] bg-current opacity-20 mt-20"></div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
