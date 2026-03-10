import "../index.css";
import meshCircle from "../assets/Images/Mesh Circle.svg";
import meshCircle2 from "../assets/Images/Mesh Circle2.svg";
import {
  easeInOut,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";
import LogoCard from "../Components/LogoCard";
import Logos from "../assets/logos";
import WebsiteCard from "../Components/WebsiteCard";

export default function Programming() {
  const logoObject = new Logos();
  const containerRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef(null);
  const mySkillsRef = useRef(null);
  const myProjectsRef = useRef(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const isAboutMeInView = useInView(aboutMeRef, { amount: 0.2 });
  const isMySkillsInView = useInView(mySkillsRef, { amount: 0.5 });
  const isMyProjectsInView = useInView(myProjectsRef, { amount: 0.5 });
  const isFooterRef = useInView(footerRef, { amount: 0.5 });

  const textGlowAndShadow = "[text-shadow:0_0_15px_rgba(255,255,255,0.3),_2px_2px_4px_rgba(0,0,0,0.5)]";

  const { scrollYProgress } = useScroll({
    target: aboutMeRef,
    container: containerRef,
    offset: ["start end", "center center"],
  });

  const circleScale = useTransform(scrollYProgress, [0, 1], [1.3, 1.4]);

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
      className="relative w-full h-screen bg-black overflow-x-hidden overflow-y-auto snap-y snap-proximity scroll-smooth"
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
            z-1
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
              z-0
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
            pointer-events-none
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
          font-Clash
          snap-center  "
        >
          <div className="max-w-5xl overflow-hidden leading-[1] flex flex-col items-center justify-center">
            <h1 className="text-5xl md:text-7xl lg:text-BigAss my-0 lg:my-[-2rem] text-center">
              Jomari Celis
            </h1>
            <p className="text-lg md:text-xl text-center mt-2 lg:mt-0">
              {" "}
              Full-stack Developer
            </p>
          </div>
        </motion.section>

        <section
          ref={aboutMeRef}
          className="relative w-full h-[300vh] snap-start"
        >
          <div className="sticky top-0 h-screen flex items-center justify-center w-full p-10 text-white font-Clash">
            <div className="flex flex-col max-w-6xl px-6 items-center w-full">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              >
                {/* <h2 className="text-5xl md:text-7xl lg:text-8xl mb-12 text-center">
                  Who I am
                </h2> */}
              </motion.div>

              <div className="flex flex-col md:flex-row items-center justify-center w-full">
                <motion.img
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                  src={meshCircle2}
                  className="w-48 md:w-64 lg:w-96 mb-8 md:mb-0 shrink-0"
                  alt=""
                />
                <div className="relative w-full md:ml-10 lg:ml-16 flex items-center justify-center h-[200px] lg:h-[300px]">
                  <motion.p
                    style={{ opacity: p1Opacity, y: p1Y }}
                    className={`absolute text-lg md:text-xl lg:text-4xl text-center md:text-left leading-relaxed lg:leading-normal font-light ${textGlowAndShadow}`}
                  >
                    I’m Jom, a passionate developer who loves building immersive
                    digital experiences. Whether I’m crafting sleek front-end
                    interfaces or experimenting with creative animations, I
                    strive for clean code and compelling visuals. Outside
                    coding, I enjoy learning new technologies and creating
                    inspiring projects.
                  </motion.p>
                  <motion.p
                    style={{ opacity: p2Opacity, y: p2Y }}
                    className={`absolute text-lg md:text-xl lg:text-4xl text-center md:text-left leading-relaxed lg:leading-normal font-light ${textGlowAndShadow}`}
                  >
                    <div className="flex flex-col">
                      <div className="text-5xl">MOTION DESIGN</div>
                      <div>
                        Whether I’m crafting sleek front-end interfaces or
                        experimenting with creative animations, I strive for
                        clean code and compelling visuals.
                      </div>
                    </div>
                  </motion.p>
                  <motion.p
                    style={{ opacity: p3Opacity, y: p3Y }}
                    className={`absolute text-lg md:text-xl lg:text-4xl text-center md:text-left leading-relaxed lg:leading-normal font-light ${textGlowAndShadow}`}
                  >
                    <div className="flex flex-col">
                      <div className="text-5xl">MOTION DESIGN</div>
                      <div>
                        Whether I’m crafting sleek front-end interfaces or
                        experimenting with creative animations, I strive for
                        clean code and compelling visuals.
                      </div>
                    </div>
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <motion.section
          ref={mySkillsRef}
          className="relative flex items-center justify-center w-full min-h-screen p-10 text-white font-Clash overflow-hidden snap-center  "
        >
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            {[...Array(300)].map((_, i) => (
              <motion.div
                key={`star-${i}`}
                className="absolute bg-white rounded-full"
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
              <h2 className="text-5xl md:text-7xl lg:text-8xl text-center mb-8">
                My Skills
              </h2>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                <LogoCard
                  logo={logoObject.reactLogoBlue}
                  confidence={90}
                  technology={"React"}
                />
                <LogoCard
                  logo={logoObject.javaLogo}
                  confidence={90}
                  technology={"Java"}
                />
                <LogoCard
                  logo={logoObject.reactLogoBlue}
                  confidence={90}
                  technology={"React"}
                />
                <LogoCard
                  logo={logoObject.javaLogo}
                  confidence={90}
                  technology={"Java"}
                />
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          ref={myProjectsRef}
          className="relative flex items-center justify-center w-full min-h-screen p-10 text-white font-Clash snap-center  "
        >
          <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-t from-purple-900/40 via-transparent to-transparent" />
          <div className="relative z-10 flex flex-col lg:flex-row max-w-7xl w-full px-4 lg:px-0">
            <div className="w-full">
              <h2 className="text-5xl md:text-7xl lg:text-8xl mb-10 text-center">
                My Projects
              </h2>
              <p className="text-lg"></p>
              <div className="flex flex-col lg:flex-row flex-wrap gap-6 justify-center items-center lg:items-stretch">
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
        initial={{ backgroundColor: "#020617", color: "#ffffff" }}
        animate={{
          backgroundColor: isFooterRef ? "#ffffff" : "#020617",
          color: isFooterRef ? "#020617" : "#ffffff",
        }}
        transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
        className="relative overflow-hidden flex flex-col justify-center items-center w-full min-h-screen snap-center snap-always"
      >
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none"
          initial={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(88, 28, 135, 0.4) 0%, rgba(88, 28, 135, 0) 100%)",
          }}
          animate={{
            backgroundImage: isFooterRef
              ? "linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%)"
              : "linear-gradient(to bottom, rgba(88, 28, 135, 0.4) 0%, rgba(88, 28, 135, 0) 100%)",
          }}
          transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
        />

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
