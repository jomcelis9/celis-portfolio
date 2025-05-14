import "../index.css";
import profileImage from "../assets/Images/Placeholder1.png";
export default function Home(){
    return(
        <div className=" border h-screen items-center font-Garamond flex flex-col bg-white h-full">
            <div className="pt-16">
                <p className="text-stone-900 text-8xl font-semibold">Jomari Celis</p>
            </div>

            <div className="bottom-0 absolute">
            <img className="h-auto w-xl" src={profileImage} alt="Placeholder " />
            </div>
        </div>

    )
}
