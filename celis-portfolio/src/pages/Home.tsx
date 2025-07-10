import "../index.css";
import meshCircle from "../assets/Images/Mesh Circle.svg";
import meshCircle2 from "../assets/Images/Mesh Circle2.svg";
import {easeIn, easeInOut, easeOut, motion} from "motion/react"
import { useAnimate, AnimatePresence } from "motion/react";
import {useEffect, useState} from "react";
import { NavLink, useNavigate } from "react-router";





export default function Home(){

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

     const entranceAnimationOrange = async () => {
        await animate("#orangeCircle", { opacity: 1 }, { duration: 3, ease: easeInOut });
        await animate("#orangeCircle", { x: 0 }, {duration: 3, ease: easeInOut})

     }

        entranceAnimationOrange();
        entranceAnimationBlue();

     },[animate, scope]);

    const handleClickBlue = async () => {
        setIsClick(true);
        
        try {
                animate("#orangeCircleClass", 
                { 
                    opacity: 0 
                }, 
                { 
                    duration: 1 ,
                    delay: 3
                },
            ),

            // First animation group
            await animate("#blueWrapper", { 
                x: "-58%", 
                scale: 2
            }, { 
                duration: 3 
            })
            
            // Second animation group
            await Promise.all([
                animate("#blueWrapper", { 
                    filter: "blur(15px)" 
                }, { 
                    duration: 3, 
                    ease: easeOut 
                })
            ]);

            // Add delay before navigation
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Navigate to next page
            navigate("/Programming");
            
        } catch (error) {
            console.error("Animation error:", error);
        }
    };


     const whiteCircleVariants = {
          entrance: { pathLength: 1 },
          exit: {pathLength: 0}
     };

    return(
    <div ref={scope}  className="bg-slate-900 bg-cover fixed">
        <motion.div initial={{opacity:"0%"}} 
        transition={{duration:1, ease:"easeInOut"}} 
        animate={{opacity:"100%"}} 
        className="min-h-screen w-full bg-slate-900 bg-[linear-gradient(to_right,rgba(240,240,240,0.2)_0px,transparent_1px),linear-gradient(to_bottom,rgba(240,240,240,0.2)_0px,transparent_1px)] bg-[size:18rem_12rem] bg-[position:center] items-center">
            <div className="pt-8 mb-2">
            </div>    
                <div className="mx-5"> 
                        <div id="meshCircles" className="border flex flex-col md:flex-row justify-center items-center gap-x-10 text-white mt-5">
                                {/* Orange Circle */}
                                <div id="orangeCircleClass" className="flex flex-col items-center relative">
                                    <div>
                                        <motion.img
                                            
                                            id="orangeCircle" 
                                            initial= {{opacity:0, x:"50vh"}}
                                            className="lg:w-180 md:w-100" 
                                            src={meshCircle2} 
                                        />  
                                    </div>
                                        <motion.div className="absolute text-center font-Clash lg:text-7xl md:text-6xl sm:text-5xl lg:bottom-20 m-5 z-10"
                                        initial={{opacity:0}}
                                        animate={{opacity:1}}
                                        transition={{delay: 3, duration:1, ease:"easeInOut"}}
                                        >
                                            <p>Multimedia <br /> Portfolio</p>
                                        </motion.div> 
                                </div>

                                    {/* Blue Circle  */}
                                    <div className="flex flex-col items-center relative cursor-pointer" onClick={handleClickBlue}>
                                        <div id="blueWrapper">
                                            <motion.img
                                            id="blueCircle"
                                            initial={{ opacity: 0, x: "-50vh" }}
                                            className="lg:w-180 md:w-10"
                                            src={meshCircle}
                                            />
                                        </div>

                                        <motion.div
                                            className="absolute text-center font-Clash lg:text-7xl md:text-6xl sm:text-xl lg:bottom-20 m-5 z-10"
                                            initial={{ opacity: 0 }}
                                            animate={isClicked ? { opacity: 0 } : { opacity: 1 }}
                                            transition={{ delay: 3, duration: 1, ease: "easeInOut" }}
                                        >
                                            <p>Programming <br /> Portfolio</p>
                                        </motion.div>
                                    </div>


                                        <svg id="whiteCircle" className="lg:w-165 absolute sm:50 " viewBox="0 0 984 982" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <motion.circle
                                                initial={{ pathLength:0 }} 
                                                variants={whiteCircleVariants}
                                                animate={isClicked ? "exit" : "entrance"}
                                                transition={{
                                                    duration: 2,
                                                    ease: 'easeInOut'
                                                }}
                                                
                                                cx="492" 
                                                cy="491" 
                                                r="491" 
                                                stroke="#F8FAFC"/>
                                        </svg>  
                        </div>

                </div>

        </motion.div>
    </div>
    )   
}