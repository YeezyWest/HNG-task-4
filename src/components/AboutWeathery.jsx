import React from "react";

const AboutWeathery = () => {
  return (
    <div className="container mx-auto font-Outfit">
          <h1 className="text-[#2B2A30] font-bold text-4xl text-center py-10">About Weathery</h1>
          <p className="text-[#82808F] font-normal text-base md:text-2xl px-5 md:px-10">Since our inception, Weathery has challenged the conventional method of retrieving weather information for the general public. We are extremely proud of the unique products developed by our community and experts to improve people's access to meaningful weather data in Nigeria. We are always looking for new data sets and technologies that will allow us to share more data with more people.</p>

          <div className="flex justify-center py-10">
             <button className="btn"> Get started → </button>
          </div>
    </div>
  );
};

export default AboutWeathery;
