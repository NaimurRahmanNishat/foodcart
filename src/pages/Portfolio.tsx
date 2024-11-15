import sideview from "../assets/sideview.png";

const Portfolio = () => {
  return (
    <main id="portfolio" className="md:max-w-[1920px] max-w-[390px] md:h-[710px] h-[532px] bg-[#FBF7F2] bg-center relative">
      <img src={sideview} alt="Side View" className="absolute md:w-[526.31px] md:h-[492.04px] md:top-[266.24px] md:-left-[352.49px] md:-rotate-[71.7deg]"/>
      <div className="md:py-[120px] md:px-[300px] py-[32px] px-[30px] gap-[48px] md:gap-[60px]">
        {/* top */}
        <div className="md:w-full md:h-[110px]">
          {/* left side */}
          <div className="md:w-[1168px] md:h-[110px] md:gap-[32px]"></div>
          {/* right side */}
          <div className="md:w-[152px] md:h-[60px] md:gap-[32px]"></div>
        </div>
        {/* bottom */}
        <div className="md:w-full md:h-[300px] md:gap-[32px]"></div>
      </div>
    </main>
  );
};

export default Portfolio;
