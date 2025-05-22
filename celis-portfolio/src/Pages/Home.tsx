    import "../index.css";
    import profileImage from "../assets/Images/Placeholder1.png";
    import meshCircle from "../assets/Images/Mesh Circle.svg";
    import meshCircle2 from "../assets/Images/Mesh Circle2.svg";
    import { easeIn, easeInOut, motion, MotionConfig, spring } from "motion/react";
    import { div } from "motion/react-m";
    import { delay } from "motion";
    import { useState, useEffect } from "react";
    import { useAnimate } from "framer-motion";

    export default function Home() {
        const [isClicked, setIsClicked] = useState(false);
        const [scope, animate] = useAnimate();

        useEffect(() => {
            const runSequence = async () => {
                // Animate opacity 0 -> 1
                await animate(scope.current, { opacity: 1 }, { duration: 0.8, ease: easeInOut });

                // Then animate x to 0
                await animate(scope.current, { x: 0 }, { duration: 0.6, ease: easeInOut });
            };

            runSequence();
        }, [animate, scope]);

        const handleClick = () => {
            setIsClicked(true);
            animate(
                scope.current,
                {
                    x: "50%",
                    y: "-50%",
                    scale: 1.2,
                    zIndex: 30,
                },
                { duration: 0.6, ease: easeInOut }
            );
        };

        const circleVariants = {
            initial: {
                opacity: 0,
                x: "-56.45%",
            },
            center: {
                x: "50%",
                y: "-50%",
                scale: 1.2,
                opacity: 1,
                zIndex: 30,
                transition: { duration: 0.5, ease: "easeInOut" },
            },
        };

        return (
            <div className="bg-slate-900">
                <motion.div
                    initial={{ opacity: "0%" }}
                    transition={{ duration: 1, ease: easeIn }}
                    animate={{ opacity: "100%" }}
                    className="min-h-screen w-full bg-slate-900 bg-[linear-gradient(to_right,rgba(240,240,240,0.2)_0px,transparent_1px),linear-gradient(to_bottom,rgba(240,240,240,0.2)_0px,transparent_1px)] bg-[size:18rem_12rem] bg-[position:center] items-center"
                >
                    <div className="pt-8 font-Clash mb-2">
                        <p className="text-center text-slate-50 lg:text-7xl sm:text-5xl font-regular">
                            Jomari Celis
                        </p>
                    </div>
                    <div className="mx-5">
                        <div className="font-Satoshi">
                            <p className="text-center text-slate-50 text-xl font-regular">pick a jom!</p>
                        </div>

                        <MotionConfig transition={{ delay: 2, duration: 2, ease: easeInOut }}>
                            <div
                                id="meshCircles"
                                className="flex flex-col md:flex-row justify-center items-center gap-x-10 text-white mt-5"
                            >
                                {/* Orange Circle */}
                                <div className="flex flex-col items-center">
                                    <div>
                                        <motion.img
                                            className="lg:w-180 md:w-100"
                                            src={meshCircle2}
                                            initial={{
                                                opacity: "0%",
                                                x: "58%",
                                            }}
                                            animate={{
                                                opacity: "100%",
                                                x: "0",
                                            }}
                                        />
                                    </div>
                                    <motion.div
                                        className="absolute text-center font-Clash lg:text-7xl md:text-6xl sm:text-5xl lg:bottom-20 m-5 z-10"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 3, duration: 1, ease: "easeInOut" }}
                                    >
                                        <p>
                                            Multimedia <br /> Portfolio
                                        </p>
                                    </motion.div>
                                </div>

                                {/* Blue Circle */}
                                <div
                                    className="flex flex-col items-center relative"
                                    onClick={() => setIsClicked(true)}
                                >
                                    <motion.img
                                        ref={scope}
                                        className="lg:w-180 md:w-100 cursor-pointer"
                                        src={meshCircle}
                                        variants={circleVariants}
                                        initial="initial"
                                        animate={isClicked ? "center" : "initial"}
                                        transition={{ duration: 1, ease: "easeInOut" }}
                                        onClick={handleClick}
                                    />
                                    <motion.div
                                        className="absolute text-center font-Clash lg:text-7xl md:text-6xl sm:text-xl lg:bottom-20 m-5 z-10"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 3, duration: 1, ease: "easeInOut" }}
                                    >
                                        <p>
                                            Programming <br /> Portfolio
                                        </p>
                                    </motion.div>
                                </div>

                                <svg
                                    className="absolute lg:w-165 sm:50"
                                    viewBox="0 0 984 982"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <motion.circle
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        transition={{
                                            duration: 2,
                                            ease: "easeInOut",
                                        }}
                                        cx="492"
                                        cy="491"
                                        r="491"
                                        stroke="#F8FAFC"
                                    />
                                </svg>
                            </div>
                        </MotionConfig>
                    </div>
                </motion.div>
            </div>
        );
    }
