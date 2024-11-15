import About from "./pages/About";
import Blog from "./pages/Blog";
import Clients from "./pages/Clients";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./pages/Portfolio";
import island from "./assets/island.png";
import mobile from "./assets/mobile.png";
import indecator from "./assets/indicator.png";



const App = () => {
  return (
    <>
    <div className="max-[390px] h-[53px] md:hidden flex items-center justify-between pt-[18px] pr-[26px] pb-[14px] pl-[27px] text-[#FFFFFF]">
      {/* TIME */}
      <h1 className="w-[54px] h-[22px] font-semibold text-[17px] leading-[22px] text-center text-[#000000]">9:41</h1>
      {/* FLOATING ISLAND */}
      <img src={island} alt="" className="w-[127px] h-[37px] rotate-[18.5px]"/>
      {/* NETWORK */}
      <img src={mobile} alt="" className="w-[78.26px] h-[13px]"/>
    </div>
      <div className="md:max-w-[1920px] md:h-[5094.43px] max-w-[390px] h-[5138.08px]">
        <Navbar/>
        <Hero/>
        <About/>
        <Portfolio/>
        <Clients/>
        <Blog/>
        <Footer/>
      </div>
      {/* HOME INDECATOR */}
      <div className="max-[390px] h-[34px] md:hidden flex items-center justify-between text-[#FFFFFF]">
        <div className="flex items-center pt-[21px] pl-[128px] text-[#000000]">
          <img src={indecator} alt="" className="h-[5px] w-[134px]"/>
        </div>
      </div>
    </>
  )
}

export default App;