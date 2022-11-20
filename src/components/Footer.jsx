import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#B93815] text-white pb-32 font-Outfit">
     <div className="p-4 md:py-10 md:px-16">
        <div className="flex flex-col gap-10 pb-12 md:flex-row md:justify-between md:items-center">
          <div>
            <img src="/logo.svg" alt="logo" />
            
             <ul className="flex flex-col font-normal text-lg flex-wrap gap-6 mt-8 md:flex-row">
                <li>About Us</li>
                <li>Careers</li>
                <li>Weather News</li>
                <li>For Business</li>
                <li>FAQs</li>
                <li>Contact Us</li>
             </ul>
          </div>
          <div>
            <span className="footer-title font-semibold text-lg">Download the mobile app</span>
            <div className="flex flex-wrap gap-6 mt-6">
              <img src="/applestore.png" alt="app store" />
              <img src="playstore.png" alt="google play" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 pt-5 border-t border-t-white md:flex-row">
          <p className="order-last text-sm md:order-first md:text-base"> &copy; 2022 Weathery, All rights reserved to Team Gear</p>
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
            <img src="/world.png" alt="" />
              <span className="hidden md:block">English</span>
            </span>
            <span className="flex items-center gap-2">
              <img src="/UK-flag.png" alt="uk flag" />
              <span className="hidden md:block">United Kingdom</span>
            </span>
            <span className="flex items-center gap-2">
               <img src="/vector (1).svg" alt="Support" />
              <span className="hidden md:block">Customer Support</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
