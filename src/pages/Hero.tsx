import image from "../assets/image.png";
import naranjas from "../assets/naranjas.png";
// import herocontent from "../assets/herocontent.jpeg";
// import vector from "../assets/vector.png";

const Hero = () => {
  return (
    <main id="hero" className="md:max-w-[1920px] max-w-[390px] md:h-[1047px] h-[792.1px] bg-[#BD1F17] bg-center">
      <div className="absolute w-full h-full opacity-[0.04]" style={{ backgroundImage: `url(${image})` }}/>
      <div className="relative w-full h-full flex">
        <div className="absolute inset-0 opacity-[0.12] bg-center w-full h-full" style={{ backgroundImage: `url(${naranjas})` }}/>
        <div className="relative md:pt-[108px] pt-[77px] text-white md:h-[939px] h-[715.1px]">
          <section className="md:pt-[130px] md:pr-[300px] md:pb-[160px] md:pl-[300px] pt-[32px] pr-[30px] pb-[32px] pl-[30px] md:gap-2 gap-[60px] flex justify-between">
            <div>
              <div></div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default Hero;


// width: 45px;
// height: 45px;
// gap: 0px;
// border: 2px 0px 0px 0px;
// opacity: 0px;
