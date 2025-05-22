import "../index.css";
import profileImage from "../assets/Images/Placeholder1.png";
import meshCircle from "../assets/Images/Mesh Circle.svg";
import meshCircle2 from "../assets/Images/Mesh Circle2.svg";
import {easeIn, easeInOut, easeOut, motion, MotionConfig, spring} from "motion/react"
import { div } from "motion/react-m";
import { delay } from "motion";
import { useAnimate } from "motion/react";
import {useEffect, useState} from "react";




export default function Home(){

    const [isClicked, setIsClick] = useState(false);

    const [scope, animate] = useAnimate();
    
     useEffect( () => {


     const entranceAnimationBlue = async () => {
        
      await animate("#blueCircle", { opacity: 1}, { duration: 3, ease: easeInOut });
      await animate("#blueCircle", { x: 0 }, {duration: 3, ease: easeInOut})

     };

     const entranceAnimationOrange = async () => {
        await animate("#orangeCircle", { opacity: 1 }, { duration: 3, ease: easeInOut });
        await animate("#orangeCircle", { x: 0 }, {duration: 3, ease: easeInOut})

     }

        entranceAnimationOrange();
        entranceAnimationBlue();

     },[animate, scope]);

     const handleClick = () =>{
        setIsClick(true)

        animate("#blueCircle", {x: "-58%", filter: "blur(25px)" ,scale: 1.5}, {duration: 3})
        
        animate("#orangeCircleClass", { opacity: 0 }, {duration: 3})

        animate("#myName", { opacity: 0 })



     }

     

    return(
    <div ref={scope}  className="bg-slate-900 bg-cover fixed">
        <motion.div initial={{opacity:"0%"}} transition={{duration:1, ease:easeIn}} animate={{opacity:"100%"}} className="min-h-screen w-full bg-slate-900 bg-[linear-gradient(to_right,rgba(240,240,240,0.2)_0px,transparent_1px),linear-gradient(to_bottom,rgba(240,240,240,0.2)_0px,transparent_1px)] bg-[size:18rem_12rem] bg-[position:center] items-center">
            <div className=" pt-8 font-Clash mb-2">
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
                                    <div className="flex flex-col items-center relative">
                                        <div>
                                            <motion.img
                                                
                                                id="blueCircle"
                                                initial= {{ opacity: 0, x: "-50vh" }}
                                                className="lg:w-180 md:w-10" 
                                                src={meshCircle} 
                                                onClick={handleClick}

                                            />  
                                        </div>

                                        <motion.div className="absolute text-center font-Clash lg:text-7xl md:text-6xl  sm:text-xl lg:bottom-20 m-5 z-10"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{delay: 3, duration: 1, ease: "easeInOut"}}
                                        >
                                            <p>Programming <br /> Portfolio</p>
                                        </motion.div> 
                                    </div>

                                        <svg className="lg:w-165 absolute sm:50 " viewBox="0 0 984 982" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <motion.circle
                                                initial={{ pathLength:0 }} 
                                                whileInView={{ pathLength:1 }}
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