import "../index.css";
import meshCircle from "../assets/Images/Mesh Circle.svg";
import meshCircle2 from "../assets/Images/Mesh Circle2.svg";
import { easeIn, easeInOut, easeOut, motion } from "motion/react";
import { useAnimate, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";

export default function Programming() {
  return (
    <div className="bg-slate-900 bg-cover fixed">
      <motion.div
        initial={{ opacity: "0%" }}
        transition={{ duration: 0.0, ease: "easeInOut" }}
        animate={{ opacity: "100%" }}
        className="min-h-screen w-full bg-slate-900 bg-[linear-gradient(to_right,rgba(240,240,240,0.2)_0px,transparent_1px),linear-gradient(to_bottom,rgba(240,240,240,0.2)_0px,transparent_1px)] bg-[size:18rem_12rem] bg-[position:center] items-center"
      >
        <div className="pt-8 font-Clash mb-2"></div>

        <div
          id="nibba"
          className="absolute border inset-0 w-screen h-screen z-30 
                    flex flex-row items-center justify-center 
                    font-Clash text-white p-10"
        >
          <div id="nibs" className="flex-1">
            <p className="text-6xl">
              Hello, I'm Jom!
              <br />
              <p className="text-5xl max-w-4xl mt-10">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Veritatis iusto sit quasi asperiores quos harum. Delectus nisi
                doloremque tempore.
              </p>
            </p>
          </div>

          <div className="flex-1 border">Image here</div>
        </div>

        <div className="mx-5">
          <div
            id="meshCircles"
            className="flex flex-col md:flex-row justify-center items-center gap-x-10 text-white mt-5"
          >
            {/* Orange Circle */}
            <div
              id="orangeCircleClass"
              className="flex flex-col items-center relative"
            >
              <div>
                <motion.img
                  id="orangeCircle"
                  initial={{ opacity: 0, x: "50vh" }}
                  className="lg:w-180 md:w-100"
                  src={meshCircle2}
                />
              </div>
            </div>

            {/* Blue Circle  */}
            <div className="flex flex-col items-center relative">
              <div id="blueWrapper">
                <motion.img
                  id="blueCircle"
                  initial={{
                    opacity: 1,
                    x: "-50vh",
                    scale: 2,
                    filter: "blur(15px)",
                  }}
                  className="lg:w-180 md:w-90 sm:w-10"
                  src={meshCircle}
                />
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
