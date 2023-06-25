import { useState } from "react";
import {RiCloseLine} from 'react-icons/ri'; 
import { HiOutlineMenu } from "react-icons/hi";

import { logo } from "../assets";
import NavLinks from "./Navlink";

const Sidebar = () => {
  const [mobileMenuOpen,setmobileMenuOpen]=useState(false);
 
  return (
    <>
    <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
      <img src={logo} alt="logo" className="w-full h-14 object-contain" />
      <NavLinks />
    </div>
    <div className="absolute md:hidden block top-6 right-3">
      {
        mobileMenuOpen ? (<RiCloseLine onClick={()=>setmobileMenuOpen(false)} className="w-6 h-6 text-white mr-2" />) : (<HiOutlineMenu onClick={()=>setmobileMenuOpen(true)} className="w-6 h-6 text-white mr-2" />)
      }
    </div>
    <div className={`absolute p-10 top-0 h-screen w-2/3 bg-gradient-to-tl form-green/10 to-[#483d8b] backdrop-blur-lg z-10 md:hidden smooth-transition ${mobileMenuOpen? 'left-0':'-left-full'} `}>
      <img src={logo} alt="logo" className="w-full h-14 object-contain" />
      <NavLinks handleclick={()=>setmobileMenuOpen(false)}/>
    </div>
    </>
  )
};

export default Sidebar;
