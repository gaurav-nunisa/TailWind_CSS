import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
export function NavBar(){
    return(
        <>
        <div className=" py-4 px-3 w-full bg-yellow-400 flex justify-between items-center" >
            <div className="font font-bold text-2xl">CODE UP</div>
            <ul className="hidden md:flex font-base font-semibold ">
                <li className="mx-[10px] cursor-pointer">Home</li>
                <li className="mx-[10px] cursor-pointer">About Us</li>
                <li className="mx-[10px] cursor-pointer">Contact Us</li>
            </ul>
            <div className=" items-center hidden md:flex" >
                <div className="pr-3 "> <CgProfile/> </div>
                <div ><button className="bg-white rounded-lg shadow-lg p-2 " onClick={()=>{
                    alert("You are logged in")
                }}>Login / Signup</button></div>
            </div>
            <div className=" md:hidden ="><GiHamburgerMenu size={45}/></div>
            
        </div>
        </>
    )
}