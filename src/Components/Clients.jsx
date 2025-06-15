import React from 'react';
import Marquee from 'react-fast-marquee';

const clients = [
  'ABRD Architects',
  'Aryabhatta College (University of Delhi)',
  'Balmer Lawrie Travel and Vacations',
  'Contad',
  'Embassy of Luxembourg',
  'East West group',
  'Federation of India Mineral Industries',
  'German Academic Exchange Service',
  'JK Technosoft Limited',
  'Khanna Enterprises',
  'MilkFood Ltd.',
  'Sartha Global Marketing',
  'Skill Council for Mining Sector',
  'S.P.A. Design Pvt. Ltd.',
  'Vishwa Bharti Public School'
];

const Clients = () => {
  return (
    <section
      className="flex flex-col justify-center items-center py-4 sm:py-6 lg:py-8 max-w-7xl mx-auto bg-[#f6f5ff] mt-16"
      id="clients"
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 text-center mb-3 sm:mb-4 lg:mb-6 tracking-tight">
        Our Esteemed Clients
      </h2>
      <div className="relative w-full marquee-wrapper overflow-hidden">
        <Marquee
          speed={50}
          gradient={true}
          gradientColor={[180, 179, 255]} // Even darker for contrast
          gradientWidth={100} // Base width, adjusted in CSS
          pauseOnHover={true}
          className="py-1 sm:py-2 lg:py-3 overflow-y-hidden"
        >
          {clients.map((client, index) => (
            <div
              key={index}
              className="mx-2 sm:mx-3 lg:mx-4 px-3 sm:px-4 lg:px-5 py-1 sm:py-2 lg:py-2.5 text-base sm:text-lg lg:text-xl font-semibold text-gray-800 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
            >
              {client}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Clients;