import "../index.css";
import profileImage from "../assets/Images/Placeholder1.png";
import meshCircle from "../assets/Images/Mesh Circle.svg";
import meshCircle2 from "../assets/Images/Mesh Circle2.svg";


export default function Home(){
    return(
        
    <div className="min-h-screen w-full bg-slate-900 bg-[linear-gradient(to_right,rgba(240,240,240,0.2)_0px,transparent_1px),linear-gradient(to_bottom,rgba(240,240,240,0.2)_0px,transparent_1px)] bg-[size:18rem_12rem] bg-[position:center] items-center">
        <div className=" pt-8 font-Clash mb-2">
                <p className= "text-center text-slate-50 lg:text-7xl sm:text-5xl font-regular ">Jomari Celis</p>
            </div>    

            <div className="mx-5">

                <div className="font-Satoshi">
                    <p className= "text-center text-slate-50 text-xl font-regular ">pick a jom!</p>
                </div>
                <div id="meshCircles" className="grid lg:grid-cols-2 md:grid-cols-1  items-center text-white mt-5 pl">
                        <div className="flex flex-col items-center m-0 p-0">
                            <div>
                                <img className="lg:w-180 md:w-100" src={meshCircle2}/>  
                            </div>

                            <div className="absolute text-center font-Clash lg:text-7xl md:text-6xl sm:text-5xl lg:bottom-20 m-5 z-10">
                                <p>Multimedia <br /> Portfolio</p>
                            </div> 
                        </div>


                        <div className="flex flex-col items-center m-0 p-0">
                            <div>
                                <img className="lg:w-180 md:w-100" src={meshCircle}/>  
                            </div>

                            <div className="absolute text-center font-Clash lg:text-7xl md:text-6xl  sm:text-xl lg:bottom-20 m-5 z-10">
                                <p>Programming <br /> Portfolio</p>
                            </div> 
                        </div>
                </div>

            </div>


    </div>
    )   
}
