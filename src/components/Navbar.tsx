import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import NavItems from "./NavItems";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(()=>{
    const handleScroll = () =>{
      if (window.scrollY > 50) {
        setIsScrolled(true);
      }
      else{
        setIsScrolled(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return ()=>{
      window.addEventListener('scroll',handleScroll);
    }
  },[]);
  return (
    <header className={`fixed z-10 md:h-[108px] h-[77px] w-full gap-[8px] pt-[20px] pr-[30px] pb-[20px] pl-[30px] flex items-center justify-between md:pt-[32px] md:pr-[300px] md:pb-[32px] md:pl-[300px] cursor-pointer ${isScrolled ? "bg-[#BD1F17] top-0 h-[77px]  shadow-md" : "bg-transparent text-white"}`}>
      <div className="w-[970px] h-[37px] gap-[60px] flex items-center">
        {/* logo */}
        <Link to="/" className="w-[201.9px] h-[37px] gap-[6px] flex items-center">
          <img src={logo} alt="" />
          <h1 className="cursor-pointer text-[#FFFFFF] w-[159px] h-[29px] leading-[28.44px] text-[28.44px] font-normal font-popins">Resturent</h1>
        </Link>
        {/* hamburger menu for mobile menu */}
        <NavItems />
      </div>
      <button className="text-[#0A1425] cursor-pointer leading-6 text-[16px] font-bold font-primary bg-[#FEBF00] w-[157px] h-[44px] pt-[10px] pr-[24px] pb-[10px] pl-[24px] gap-[10px] hidden md:flex">BOOK A TABLE</button>
      <MobileMenu/>
    </header>
  )
}

export default Navbar;