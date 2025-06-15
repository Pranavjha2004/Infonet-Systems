import React from 'react';

const AboutUs = () => {
  return (
    <div className="shadow-xl py-8 sm:py-12" id="aboutUs" role="region" aria-labelledby="aboutUsHeading">
      <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-4 sm:px-8 md:px-16 lg:px-28 text-center">
        <h1 id="aboutUsHeading" className="main-head text-3xl sm:text-4xl lg:text-5xl font-extrabold">
          About Us
        </h1>
        <p className="paragraph text-base sm:text-lg lg:text-xl mt-4 sm:mt-5 lg:mt-5 px-0 sm:px-4 md:px-8 lg:px-28">
          Infonet Systems is a professionally managed IT Support and Service company offering computer hardware installation, replacement, software & networking solutions, server and network integration, computer repair, virus & spyware removal services in Delhi NCR. Our services are available in Delhi, Noida, Faridabad and Gurgaon.
        </p>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-8 md:px-16 lg:px-28 mt-6 sm:mt-8 lg:mt-10">
        <span className="mr-1 text-lg sm:text-xl lg:text-2xl main-head text-[#047a2e] font-bold">
          Our Goal -
        </span>
        <p className="inline paragraph text-base sm:text-lg lg:text-xl">
          To deliver the best and quality services to our clients are one of the growing IT solution and service providers. Infonet Systems has expertise in all streams of web design and development. Hardware and Networking support, Server support and Maintenance, Firewall support, Antivirus support and web hosting.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;