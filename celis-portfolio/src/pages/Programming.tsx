import "../index.css";
import meshCircle from "../assets/Images/Mesh Circle.svg";
import meshCircle2 from "../assets/Images/Mesh Circle2.svg";
import { motion } from "motion/react";

export default function Programming() {
  return (
    <div className="relative w-full min-h-screen bg-slate-950 overflow-x-hidden">
      {/* Fixed Blue Circle */}
      <motion.img
        initial={{
          opacity: 1,
          scale: 1.2,
          filter: "blur(15px)",
        }}
        animate={{
          opacity: 0.5,
          scale: 1.1,
        }}
        transition={{
          duration: 5,
          //   repeat: Infinity,
          //   repeatType: "mirror",
        }}
        className="
            fixed
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[80vw]
            max-w-[1000px]
            z-0
            pointer-events-none
            mix-blend-screen
            "
        src={meshCircle}
        alt="Blue Mesh Circle"
      />

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
          className="flex items-center justify-center w-full min-h-screen p-10 text-white font-Clash"
        >
          <div className="max-w-4xl text-left">
            <p className="text-8xl ">Hello, I'm Jom!</p>
            <p className="text-xl"> Full-stack Developer</p>
          </div>
        </motion.section>

        {/* About Me Section */}
        <section className="flex items-center justify-center w-full min-h-screen p-10 text-white font-Clash">
          <div className="flex flex-row max-w-3xl text-left">
            <div>
              <h2 className="text-5xl mb-8">Who I am</h2>
              <p className="text-lg">
                I’m Jom, a passionate developer who loves building immersive
                digital experiences. Whether I’m crafting sleek front-end
                interfaces or experimenting with creative animations, I strive
                for clean code and compelling visuals. Outside coding, I enjoy
                learning new technologies and creating inspiring projects.
              </p>
            </div>
            <img src={meshCircle2} className="w-100" alt="" />
          </div>
        </section>

        <section className="flex items-center justify-center w-full min-h-screen p-10 text-white font-Clash">
          <div className="flex flex-row max-w-3xl text-left">
            <div>
              <h2 className="text-5xl mb-8">My Skills</h2>
              <p className="text-lg">
                <div className="flex flex gap-5">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/80 bg-gradient-to-b from-white/60 to-white/30 p-4 transition-[transform,border,background-color] duration-300 hover:scale-110 hover:border-[rgb(70,71,77)] hover:bg-[rgb(33,34,36)] md:h-[70px] md:w-[70px]">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
                      className="w-10"
                    />
                  </span>

                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/80 bg-gradient-to-b from-white/60 to-white/30 p-4 transition-[transform,border,background-color] duration-300 hover:scale-110 hover:border-[rgb(70,71,77)] hover:bg-[rgb(33,34,36)] md:h-[70px] md:w-[70px]">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
                      className="w-10"
                    />
                  </span>

                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/80 bg-gradient-to-b from-white/60 to-white/30 p-4 transition-[transform,border,background-color] duration-300 hover:scale-110 hover:border-[rgb(70,71,77)] hover:bg-[rgb(33,34,36)] md:h-[70px] md:w-[70px]">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
                      className="w-10"
                    />
                  </span>

                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/80 bg-gradient-to-b from-white/60 to-white/30 p-4 transition-[transform,border,background-color] duration-300 hover:scale-110 hover:border-[rgb(70,71,77)] hover:bg-[rgb(33,34,36)] md:h-[70px] md:w-[70px]">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
                      className="w-10"
                    />
                  </span>
                </div>
              </p>
            </div>
          </div>
        </section>
      </main>

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
