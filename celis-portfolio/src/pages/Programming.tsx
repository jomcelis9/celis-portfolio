import "../index.css";
import meshCircle from "../assets/Images/Mesh Circle.svg";
import meshCircle2 from "../assets/Images/Mesh Circle2.svg";
import {easeIn, easeInOut, easeOut, motion} from "motion/react"
import { useAnimate, AnimatePresence } from "motion/react";
import {useEffect, useState} from "react";
import { NavLink, useNavigate } from "react-router";





export default function Programming(){

    return(
    <div className="bg-slate-900 bg-cover min-h-screen">
        <motion.div initial={{opacity:"0%"}} transition={{duration:0.3, ease:"easeInOut"}} animate={{opacity:"100%"}} className="min-h-screen w-full bg-slate-900 bg-[linear-gradient(to_right,rgba(240,240,240,0.2)_0px,transparent_1px),linear-gradient(to_bottom,rgba(240,240,240,0.2)_0px,transparent_1px)] bg-[size:18rem_12rem] bg-[position:center] items-center">
            <div className=" pt-8 font-Clash mb-2">
            </div>    
                <div className="mx-5"> 
                    <div id="meshCircles" className="flex flex-col md:flex-row justify-center items-center gap-x-10 text-white mt-5">
                        {/* Blue Circle  */}
                        <div className="flex flex-col items-center blur-[15px] relative cursor-pointer">
                            <div id="blueWrapper">
                                <motion.img
                                id="blueCircle"
                                initial={{ opacity: 1, scale: 2 }}
                                className="lg:w-155  md:w-10"
                                src={meshCircle}
                                />
                            </div>
                        </div> 
                    </div>
                </div>
        </motion.div>
    </div>
    )   
}