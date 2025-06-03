import "../index.css";
import meshCircle from "../assets/Images/Mesh Circle.svg";
import meshCircle2 from "../assets/Images/Mesh Circle2.svg";
import {easeIn, easeInOut, easeOut, motion} from "motion/react"
import { useAnimate, AnimatePresence } from "motion/react";
import {useEffect, useState} from "react";
import { NavLink, useNavigate } from "react-router";





export default function Programming(){

    const navigate = useNavigate();

    const [isExiting, setIsExiting] = useState(false);

    const [isClicked, setIsClick] = useState(false);

    const [scope, animate] = useAnimate();
    
     useEffect( () => {


     const entranceAnimationBlue = async () => {
        //  animate("#blueCircle", { rotate: 360 }, { duration: 30, ease: "linear" });
        await animate("#blueCircle", { opacity: 1 }, { duration: 3, ease: easeInOut });
         await animate("#blueCircle", { x: 0 }, {duration: 3, ease: easeIn})

     };
        entranceAnimationBlue();

     },[animate, scope]);

    return(
    <div ref={scope}  className="bg-slate-900 bg-cover min-h-screen">
        <motion.div initial={{opacity:"0%"}} transition={{duration:1, ease:"easeInOut"}} animate={{opacity:"100%"}} className="min-h-screen w-full bg-slate-900 bg-[linear-gradient(to_right,rgba(240,240,240,0.2)_0px,transparent_1px),linear-gradient(to_bottom,rgba(240,240,240,0.2)_0px,transparent_1px)] bg-[size:18rem_12rem] bg-[position:center] items-center">
            <div className=" pt-8 font-Clash mb-2">
            </div>    
                <div className="mx-5"> 
                    <div id="meshCircles" className="border flex flex-col md:flex-row justify-center items-center gap-x-10 text-white mt-5">
                        {/* Blue Circle  */}
                        <div className="flex flex-col items-center relative cursor-pointer">
                            <div id="blueWrapper">
                                <motion.img
                                id="blueCircle"
                                initial={{ opacity: 0, scale:2, x:"-58%" }}
                                className="lg:w-180 md:w-10"
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