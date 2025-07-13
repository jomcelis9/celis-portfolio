import "../index.css";
import meshCircle from "../assets/Images/Mesh Circle.svg";
import { motion } from "motion/react";

export default function Programming() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-slate-900">
      {/* Blue Circle */}
      <motion.img
        initial={{
          opacity: 1,
          scale: 1.2,
          filter: "blur(15px)",
        }}
        animate={{
          opacity: 0.5,
          scale: 1,
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="
          absolute
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

      {/* Background Grid */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(to_right,rgba(240,240,240,0.1)_1px,transparent_1px),
               linear-gradient(to_bottom,rgba(240,240,240,0.1)_1px,transparent_1px)]
          bg-[size:18rem_12rem]
          z-10
        "
      />

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-20 flex items-center justify-center w-full min-h-screen p-10 text-white font-Clash"
      >
        <div className="max-w-4xl text-center">
          <p className="text-6xl mb-10">Hello, I'm Jom!</p>
          <p className="text-5xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            iusto sit quasi asperiores quos harum. Delectus nisi doloremque
            tempore.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
