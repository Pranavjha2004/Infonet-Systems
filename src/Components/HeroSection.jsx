import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import heroImg from '../assets/illustration-2.png';
import heroImg2 from '../assets/illustration-1.png';
import BackgroundLines from './BackgroundLines';

const HeroSection = () => {
  return (
    <section
      className="relative flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-24 pt-24 md:pt-36 lg:pt-40 pb-10 h-full md:h-[760px] overflow-hidden container mx-auto px-4 lg:px-12"
      id="/"
    >
      {/* Background Lines Effect */}
      <BackgroundLines className="opacity-30" />

      {/* Hero Content */}
      <div className="order-2 md:order-1 flex justify-center z-10">
        <img
          src={heroImg}
          alt="Hero-Img"
          className="w-full max-w-[1100px] md:w-62 md:h-62 lg:w-[350px] lg:h-96"
        />
      </div>
      <div className="order-1 md:order-2 flex flex-col justify-center md:mr-4 lg:mr-16 z-10">
        <h1 className="main-head text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center md:text-left">
          Welcome to Infonet Systems !!
        </h1>
        <p className="paragraph my-5 text-base sm:text-lg md:text-xl lg:text-2xl text-center md:text-left md:pr-6 lg:pr-40">
          Infonet Systems, a leading IT provider in Delhi NCR, delivers innovative computer hardware and networking solutions. Our expert team specializes in hardware troubleshooting, network setup, and IT infrastructure optimization, ensuring reliable connectivity and performance for businesses and individuals. Trust us for top-tier IT services.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 items-center md:items-start">
          <p className="paragraph font-extrabold text-2xl sm:text-3xl md:text-4xl">We Offer</p>
          <TypeAnimation
            sequence={[
              ' Computer Repairing Services',
              1000,
              ' Digital Learning Solutions',
              1000,
              ' Computer Networking Solutions',
              1000,
              ' Video Confrencing Solutions',
              1000,
              ' Annual Maintainace Contracts',
              1000,
              ' CCTV Installation and Networking',
              1000,
              ' Wireless Networking Solutions',
              1000,
              ' Network Security Solutions',
              1000,
              ' Data Protection Services',
              1000,
              ' Bandwidth Monitoring Services',
              1000,
              ' Enterprise Storage Solutions',
              1000,
              ' Disaster Recovery Services',
              1000,
              ' Virus & Spyware Removal Services',
              1000,
              ' System Integration Services',
              1000,
            ]}
            wrapper="span"
            speed={50}
            className="inline-block paragraph font-extrabold text-xl sm:text-2xl md:text-3xl text-[#047a2e] text-center sm:text-left"
            repeat={Infinity}
          />
        </div>
        <ScrollLink
          to="contactUs"
          smooth={true}
          duration={500}
          offset={-81} // Adjust for navbar (80px) + progress bar (1px)
          className="px-4 py-3 border-2 text-center rounded-3xl mt-8 md:mt-12 lg:mt-16 shadow-xl hover:scale-105 cursor-pointer text-lg sm:text-xl md:text-2xl main-head animate-bounce bg-[#047a2e] text-white mx-auto md:mx-0 w-fit"
        >
          Get A Quote
        </ScrollLink>
      </div>
      <div className="order-3 hidden md:flex md:items-center sm:hidden z-10">
        <img
          src={heroImg2}
          alt="Hero-Img-2"
          className="w-[280px] md:w-[360px] lg:w-[400px] object-contain md:absolute md:right-0 lg:right-1 md:top-8 lg:top-52 hide-on-small"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default HeroSection;