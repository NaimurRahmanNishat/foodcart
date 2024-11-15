import { Link } from "react-scroll";
import { useLocation } from "react-router-dom";

interface NavItemsProps{
    handleClick?: ()=>void;
}

const NavItems = ({handleClick}: NavItemsProps) => {
    const { pathname } = useLocation();
    return (
        <div>
            <nav className="md:flex w-[484px] gap-[40px] hidden items-center">
                <Link 
                    onClick={handleClick}
                    to="hero" 
                    smooth={true} 
                    duration={500} 
                    className={`text-[#FFFFFF] cursor-pointer w-[43px] h-[18px] leading-[17.61px] text-[15px] font-medium font-secondary hover:text-[#3CD8D0] ${pathname === "/hero" ? "text-[#3CD8D0]" : ""}`}
                >
                    Home
                </Link>
                <Link 
                    to="about" 
                    onClick={handleClick}
                    smooth={true} 
                    duration={500} 
                    className={`text-[#FFFFFF] cursor-pointer w-[43px] h-[18px] leading-[17.61px] text-[15px] font-medium font-secondary hover:text-[#3CD8D0] ${pathname === "/about" ? "text-[#3CD8D0]" : ""}`}
                >
                    About
                </Link>
                <Link 
                    to="portfolio"
                    onClick={handleClick} 
                    smooth={true} 
                    duration={500} 
                    className={`text-[#FFFFFF] cursor-pointer w-[43px] h-[18px] leading-[17.61px] text-[15px] font-medium font-secondary hover:text-[#3CD8D0] ${pathname === "/portfolio" ? "text-[#3CD8D0]" : ""}`}
                >
                    Portfolio
                </Link>
                <Link 
                    to="clients" 
                    onClick={handleClick}
                    smooth={true} 
                    duration={500} 
                    className={`text-[#FFFFFF] cursor-pointer w-[43px] h-[18px] leading-[17.61px] text-[15px] font-medium font-secondary hover:text-[#3CD8D0] ${pathname === "/clients" ? "text-[#3CD8D0]" : ""}`}
                >
                    Clients
                </Link>
                <Link 
                    to="blog" 
                    onClick={handleClick}
                    smooth={true} 
                    duration={500} 
                    className={`text-[#FFFFFF] cursor-pointer w-[43px] h-[18px] leading-[17.61px] text-[15px] font-medium font-secondary hover:text-[#3CD8D0] ${pathname === "/blog" ? "text-[#3CD8D0]" : ""}`}
                >
                    Blog
                </Link>
                <Link 
                    to="contact" 
                    onClick={handleClick}
                    smooth={true} 
                    duration={500} 
                    className={`text-[#FFFFFF] cursor-pointer w-[43px] h-[18px] leading-[17.61px] text-[15px] font-medium font-secondary hover:text-[#3CD8D0] ${pathname === "/contact" ? "text-[#3CD8D0]" : ""}`}
                >
                    Contact
                </Link>
            </nav>
        </div>
    );
};

export default NavItems;


// import { NavLink } from "react-router-dom";


// const NavItems = () => {


// const navitems: Navlink[] = [
//   { path: "/", label: "Home" },
//   { path: "/about", label: "About" },
//   { path: "/portfolio", label: "Portfolio" },
//   { path: "/Clients", label: "Clients" },
//   { path: "/blog", label: "Blog" },
//   { path: "/contact", label: "Contact" },
// ];

// interface Navlink {
//   path: string;
//   label: string;
// }
//   return (
//     <div>
//         <ul className="flex flex-col md:flex-row items-center space-x-8 gap-8">
//             {navitems.map((item,index)=>(
//                 <li key={index}>
//                     <NavLink to={item.path} className={({ isActive }) => (isActive ? "text-primary font-bold" : "hover:text-primary")}>{item.label}</NavLink>
//                 </li>
//             ))}
//         </ul>
//     </div>
//   )
// }

// export default NavItems;