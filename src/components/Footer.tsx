// import footerbg from "../assets/footerbg.jpeg";
// import clock from "../assets/clock.png";
// import call from "../assets/call.png";
// import mail from "../assets/mail.png";
// import map from "../assets/map.png";
// import facebook from "../assets/facebook.png";
// import twitter from "../assets/twitter.png";
// import instragram from "../assets/instragram.png";
// import linkedin from "../assets/linkedin.png";

// const Footer = () => {
//   return (
//     <main id="contact" className="relative md:max-w-[1920px] max-w-[390px] md:h-[719.45px] h-[1088px] bg-[#000000]">
//       {/* Background image */}
//       <img src={footerbg} alt="" className="w-full h-full object-cover" />
//       {/* Overlay with backdrop filter */}
//       <div className="absolute inset-0 backdrop-blur-custom bg-opacity-50 bg-black p-[30px] md:pt-[120px] md:pr-[300px] md:pb-[120px] md:pl-[300px] md:gap-2 gap-2 flex items-center justify-center">
//         <div className="md:w-[1320px] md:h-[479.45px] w-[330px] h-[939px] gap-[60px] md:gap-[120px]">
//           {/* fram1 */}
//           <div className="md:w-[1320px] md:h-[256px] w-[330px] h-[808px] gap-[72px] md:gap-[72px] flex flex-col items-center">
//             <div className="md:w-[1320px] md:h-[256px] w-[330px] h-[808px] gap-[48px] md:gap-[48px] flex flex-col items-center">
//               <h1 className="md:w-[1320px] md:h-[64px] w-[330px] h-[144px] text-[#FFFFFF] font-bold text-[40px] leading-[48px] text-center font-bebas gap-[48px]">We’re ready to offer you the best dining experiences</h1>
//               <div className="w-[330px] h-[616px] gap-[24px] md:w-[1320px] md:h-[144px] md:gap-[24px] flex flex-col md:flex-row items-center">
//                 {/* slider1 */}
//                 <div className="md:w-[312px] md:h-[144px] md:gap-[24px] w-[330px] h-[136px] gap-[16px] flex flex-col items-center">
//                   <img src={clock} alt="Clock" className="w-[30px] h-[30px] pt-[3.75px] pl-[3.75px]" />
//                   <div className="md:w-[312px] md:h-[90px] md:gap-[12px] w-[330px] h-[90px] gap-[12px] text-center flex flex-col items-center">
//                     <h3 className="w-[131px] h-[28px] font-bold text-[24px] leading-[28px] text-[#FFFFFF] tracking-wider font-bebas">Opening hours</h3>
//                     <p className="w-[312px] h-[50px] text-[16px] text-white leading-[25px] font-normal">
//                       Monday - Sunday <br/> 9:00 AM to 11:30 PM
//                     </p>
//                   </div>
//                 </div>
//                 {/* slider2 */}
//                 <div className="md:w-[312px] md:h-[144px] md:gap-[24px] w-[330px] h-[136px] gap-[16px] flex flex-col items-center">
//                   <img src={call} alt="Clock" className="w-[30px] h-[30px] pt-[3.75px] pl-[3.75px]" />
//                   <div className="md:w-[312px] md:h-[90px] md:gap-[12px] w-[330px] h-[90px] gap-[12px] text-center flex flex-col items-center">
//                     <h3 className="w-[131px] h-[28px] font-bold text-[24px] leading-[28px] text-[#FFFFFF] tracking-wider font-bebas">LET'S TALK</h3>
//                     <p className="w-[312px] h-[50px] text-[16px] text-white leading-[25px] font-normal">
//                     Phone: 1-800-222-4545 <br/> Fax: 1-800-222-4545
//                     </p>
//                   </div>
//                 </div>
//                 {/* slider3 */}
//                 <div className="md:w-[312px] md:h-[144px] md:gap-[24px] w-[330px] h-[136px] gap-[16px] flex flex-col items-center">
//                   <img src={mail} alt="Clock" className="w-[30px] h-[30px] pt-[3.75px] pl-[3.75px]" />
//                   <div className="md:w-[312px] md:h-[90px] md:gap-[12px] w-[330px] h-[90px] gap-[12px] text-center flex flex-col items-center">
//                     <h3 className="w-[131px] h-[28px] font-bold text-[24px] leading-[28px] text-[#FFFFFF] tracking-wider font-bebas">BOOK A TABLE</h3>
//                     <p className="w-[312px] h-[50px] text-[16px] text-white leading-[25px] font-normal">
//                       Email: demo@website.com <br/> Support: support@website.com
//                     </p>
//                   </div>
//                 </div>
//                 {/* slider4 */}
//                 <div className="md:w-[312px] md:h-[144px] md:gap-[24px] w-[330px] h-[136px] gap-[16px] flex flex-col items-center">
//                   <img src={map} alt="Clock" className="w-[30px] h-[30px] pt-[3.75px] pl-[3.75px]" />
//                   <div className="md:w-[312px] md:h-[90px] md:gap-[12px] w-[330px] h-[90px] gap-[12px] text-center flex flex-col items-center">
//                     <h3 className="w-[131px] h-[28px] font-bold text-[24px] leading-[28px] text-[#FFFFFF] tracking-wider font-bebas">Our Address</h3>
//                     <p className="w-[312px] h-[50px] text-[16px] text-white leading-[25px] font-normal">
//                     123 Stree New York City , United <br/> States Of America.
//                     </p>
//                   </div>
//                 </div>
//                 {/* endlslider */}
//               </div>
//             </div>
//           </div>
//           {/* Footer social media and copyright section */}
//           <div className="flex flex-col items-center justify-center md:w-[285.82px] md:h-[103.45px] md:gap-[25px] w-[194px] h-[171px] gap-[16px] mx-auto">
//             <div className="flex items-center justify-center gap-[16px] md:gap-[24px] w-[192.49px] h-[36px]">
//               <img src={facebook} alt="Facebook" className="h-[36px] w-[36px] md:w-[53.45px] md:h-[53.45px] md:p-[14.73px] p-[9.92px]" />
//               <img src={twitter} alt="Twitter" className="h-[36px] w-[36px] md:w-[53.45px] md:h-[53.45px] md:p-[14.73px] p-[9.92px]" />
//               <img src={instragram} alt="Instagram" className="h-[36px] w-[36px] md:w-[53.45px] md:h-[53.45px] md:p-[14.73px] p-[9.92px]" />
//               <img src={linkedin} alt="LinkedIn" className="h-[36px] w-[36px] md:w-[53.45px] md:h-[53.45px] md:p-[14.73px] p-[9.92px]" />
//             </div>
//             <p className="text-center w-[194px] h-[19px] font-bold text-[16px] font-primary leading-[18.75px] text-white">
//               © <span className="font-primary font-normal text-[16px] leading-[18.75px]">2023 All Rights Reserved</span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Footer;



import footerbg from "../assets/footerbg.jpeg";
import clock from "../assets/clock.png";
import call from "../assets/call.png";
import mail from "../assets/mail.png";
import map from "../assets/map.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instragram from "../assets/instragram.png";
import linkedin from "../assets/linkedin.png";

const Footer = () => {
  return (
    <main id="contact" className="relative md:max-w-[1920px] max-w-[390px] md:h-[719.45px] h-[1088px] bg-[#000000]">
      {/* Background image */}
      <img src={footerbg} alt="" className="w-full h-full object-cover" />
      
      {/* Overlay with backdrop filter */}
      <div className="absolute inset-0 backdrop-blur-custom bg-opacity-50 bg-black p-[30px] md:pt-[120px] md:pr-[300px] md:pb-[120px] md:pl-[300px] md:gap-2 gap-2 flex items-center justify-center">
        
        <div className="md:w-[1320px] md:h-[479.45px] w-[330px] h-[939px] gap-[60px] md:gap-[120px]">
          
          {/* Main Content */}
          <div className="flex flex-col items-center md:gap-[72px] gap-[48px] md:w-[1320px] md:h-[256px] w-[330px] h-[808px]">
            
            <h1 className="text-[#FFFFFF] font-bold text-[40px] leading-[48px] text-center font-bebas">
              We’re ready to offer you the best dining experiences
            </h1>

            {/* Info sliders */}
            <div className="flex flex-col md:flex-row items-center gap-[16px] md:gap-[24px] md:w-[1320px] w-[330px]">
              
              {/* Info Item Component */}
              {[
                { icon: clock, title: "Opening hours", text: "Monday - Sunday 9:00 AM to 11:30 PM" },
                { icon: call, title: "LET'S TALK", text: "Phone: 1-800-222-4545 Fax: 1-800-222-4545" },
                { icon: mail, title: "BOOK A TABLE", text: "Email: demo@website.com Support: support@website.com" },
                { icon: map, title: "Our Address", text: "123 Street New York City, United States Of America." }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-[16px] w-[330px] md:w-[312px]">
                  <img src={item.icon} alt={item.title} className="w-[30px] h-[30px]" />
                  <div className="text-center">
                    <h3 className="font-bold text-[24px] text-[#FFFFFF] tracking-wider font-bebas">{item.title}</h3>
                    <p className="text-[16px] text-white leading-[25px] font-normal">{item.text}</p>
                  </div>
                </div>
              ))}

            </div>
          </div>
          
          {/* Footer Social Media and Copyright */}
          <div className="flex flex-col items-center justify-center gap-[16px] md:gap-[25px] w-[194px] h-[171px] md:w-[285.82px] md:h-[103.45px] mx-auto md:pt-[200px]">
            <div className="flex items-center gap-[16px] md:gap-[24px]">
              {[facebook, twitter, instragram, linkedin].map((icon, index) => (
                <img key={index} src={icon} alt="Social Icon" className="h-[36px] w-[36px] md:w-[53.45px] md:h-[53.45px] md:p-[14.73px] p-[9.92px]" />
              ))}
            </div>
            <p className="text-center font-bold text-[16px] font-primary text-white">
              © <span className="font-normal">2023 All Rights Reserved</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Footer;
