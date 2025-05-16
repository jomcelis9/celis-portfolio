import "../index.css";
import profileImage from "../assets/Images/Placeholder1.png";
import meshCircle from "../assets/Images/Mesh Circle.svg";
export default function Home(){
    return(
    <div className="absolute inset-0 -z-10 h-full w-full bg-slate-900 bg-[linear-gradient(to_right,rgba(240,240,240,0.2)_0px,transparent_1px),linear-gradient(to_bottom,rgba(240,240,240,0.2)_0px,transparent_1px)] bg-[size:18rem_12rem] bg-[position:center] flex-col items-center">

            <div className=" pt-16 font-Clash">
                <p className= "text-center text-slate-50 text-9xl font-regular ">Jomari Celis</p>
            </div>

            <div className="grid grid-cols-2 border items-center text-white m-10 p-5">
                <div className="border m-5 p-5">

                    Left border
                    
                </div>

                <div className="flex flex-col items-center border m-5 p-5 ">
                <img className="w-100" src={meshCircle}/>                
                </div>
            </div>

        </div>
    )   
}
