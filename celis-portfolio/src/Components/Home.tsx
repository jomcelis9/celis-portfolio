import "../index.css";
import profileImage from "../assets/Images/Placeholder1.png";
import meshCircle from "../assets/Images/Mesh Circle.svg";
import meshCircle2 from "../assets/Images/Mesh Circle2.svg";
import {motion, MotionConfig, vw} from "motion/react"


export default function Home(){
    return(
        
    <div className="min-h-screen w-full bg-slate-900 bg-[linear-gradient(to_right,rgba(240,240,240,0.2)_0px,transparent_1px),linear-gradient(to_bottom,rgba(240,240,240,0.2)_0px,transparent_1px)] bg-[size:18rem_12rem] bg-[position:center] items-center">
        <div className=" pt-8 font-Clash mb-2">
                <p className= "text-center text-slate-50 lg:text-7xl sm:text-5xl font-regular ">Jomari Celis</p>
            </div>    

            <div className="mx-5"> 

            <div className="font-Satoshi">
                <p className="text-center text-slate-50 text-xl font-regular">pick a jom!</p>
            </div>

            <MotionConfig>
                
            </MotionConfig>
            <div id="meshCircles" className="flex justify-center items-center gap-x-10 text-white mt-5">
                    {/* Orange Circle */}
                    <div className="flex flex-col items-center">
                        <div>
                            <motion.img 
                                className="lg:w-180 md:w-100" 
                                src={meshCircle2} 
                                initial={{ 
                                    x: "58%"
                                }} 
                                animate={{ 
                                    x: "0"
                                }} 
                                transition={{ delay:2, duration: 2, ease: "linear" }}
                            />  
                        </div>

                            <div className="absolute text-center font-Clash lg:text-7xl md:text-6xl sm:text-5xl lg:bottom-20 m-5 z-10">
                                <p>Multimedia <br /> Portfolio</p>
                            </div> 
                        </div>

                        {/* Blue Circle  */}
                        <div className="flex flex-col items-center">
                            <div>
                                <motion.img 
                                    className="lg:w-180 md:w-100" 
                                    src={meshCircle} 
                                    initial={{ 
                                        
                                        x: "-56.45%"
                                    }} 
                                    animate={{ 
                                        opacity:"100%",
                                        x: "0"
                                    }} 
                                    transition={{ delay:2, duration: 2, ease: "linear" }}
                                />  
                            </div>

                            <div className="absolute text-center font-Clash lg:text-7xl md:text-6xl  sm:text-xl lg:bottom-20 m-5 z-10">
                                <p>Programming <br /> Portfolio</p>
                            </div> 
                        </div>

                        <div className="absolute left-1/2 transform -translate-x-1/2 col-span-2 w-178.5 z-20">
                            <svg className="w-165" viewBox="0 0 984 982" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <motion.circle
                                    initial={{pathLength:0}} 
                                    whileInView={{pathLength:1}}
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
            </div>


    </div>
    )   
}
