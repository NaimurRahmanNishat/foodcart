import { useEffect, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
// import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const MobileMenu = () => {
  const [isOpen, setIsOpne] = useState(false);

  const handleClick = () => {
    setIsOpne((prev) => !prev);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="md:hidden flex">
      <div>
        <div onClick={handleClick}>
          {isOpen ? null : <IoMenu className="text-[36px] text-[#FFFFFF]" />}
        </div>
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 flex flex-col items-center justify-center space-y-8 text-white transition-transform transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <div
            onClick={handleClick}
            className={`cursor-pointer absolute top-5 right-6 pt-[53px] ${
              isScrolled ? "pt-[-53px]" : ""
            }`}
          >
            <IoClose className="text-[36px] text-[#FFFFFF]" />
          </div>
          <nav onClick={handleClick}>
            <ul className="flex flex-col gap-10">
              <ScrollLink
                onClick={handleClick}
                to="hero"
                smooth={true}
                duration={500}
                className="text-[#FFFFFF] cursor-pointer w-[43px] h-[18px] leading-[17.61px] text-[15px] font-medium font-secondary hover:text-[#3CD8D0]"
              >
                Home
              </ScrollLink>
              <ScrollLink
                to="about"
                onClick={handleClick}
                smooth={true}
                duration={500}
                className="text-[#FFFFFF] cursor-pointer w-[43px] h-[18px] leading-[17.61px] text-[15px] font-medium font-secondary hover:text-[#3CD8D0]"
              >
                About
              </ScrollLink>
              <ScrollLink
                to="portfolio"
                onClick={handleClick}
                smooth={true}
                duration={500}
                className="text-[#FFFFFF] cursor-pointer w-[43px] h-[18px] leading-[17.61px] text-[15px] font-medium font-secondary hover:text-[#3CD8D0]"
              >
                Portfolio
              </ScrollLink>
              <ScrollLink
                to="clients"
                onClick={handleClick}
                smooth={true}
                duration={500}
                className="text-[#FFFFFF] cursor-pointer w-[43px] h-[18px] leading-[17.61px] text-[15px] font-medium font-secondary hover:text-[#3CD8D0]"
              >
                Clients
              </ScrollLink>
              <ScrollLink
                to="blog"
                onClick={handleClick}
                smooth={true}
                duration={500}
                className="text-[#FFFFFF] cursor-pointer w-[43px] h-[18px] leading-[17.61px] text-[15px] font-medium font-secondary hover:text-[#3CD8D0]"
              >
                Blog
              </ScrollLink>
              <ScrollLink
                to="contact"
                onClick={handleClick}
                smooth={true}
                duration={500}
                className="text-[#FFFFFF] cursor-pointer w-[43px] h-[18px] leading-[17.61px] text-[15px] font-medium font-secondary hover:text-[#3CD8D0]"
              >
                Contact
              </ScrollLink>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
