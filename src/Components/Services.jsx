import React from 'react';
import IT_Infrastructure_Img from '../assets/IT_Infrastructure_Img.png';
import Security_Solutions_Img from '../assets/Security_Solutions_Img.png';
import Storage_Availability_Img from '../assets/StorageAndAvailability_Img.png';
import IT_Solution_Img from '../assets/IT_Solutions_Img.webp';
import MonitoringSolutions_Img from '../assets/Monitoring_Solutions_Img.png';
import TiltCard from './TiltCard';
import { Helmet } from 'react-helmet-async';

export const services = [
  {
    img: IT_Infrastructure_Img,
    name: 'IT Infrastructure Solution',
    desc: 'Infonet Systems provides Infrastructure Solutions: Networking, Servers, Desktops, Laptops, Virtualization, Cloud.',
    bulletPoints: [
      'Computer Networking Services',
      'Surveillance/ CCTV System',
      'Video Conferencing Solutions',
      'Digital Learning Solutions',
      'Computer Repair Services',
      'Annual Maintenance Contracts',
      'Server and Network Integration Services',
      'Computer Hardware',
      'Active Directory Domain Services',
      'Virtualization Services',
      'Cloud Computing Services',
    ],
    route: '/services/it-infrastructure',
  },
  {
    img: Security_Solutions_Img,
    name: 'Security Solutions',
    desc: 'Comprehensive security solutions to protect your business from threats, including firewalls, antivirus, and intrusion detection systems.',
    bulletPoints: [
      'Virus Spyware Removal Services',
      'Endpoint Management and Security Solutions',
      'Network Security',
      'Gateway Security',
    ],
    route: '/services/security-solutions',
  },
  {
    img: Storage_Availability_Img,
    name: 'Storage and Availability',
    desc: 'Reliable storage solutions ensuring high availability and data integrity for your business operations.',
    bulletPoints: [
      'Mass Mail Server Hosting',
      'Backup and Data Protection Services',
      'Disaster Recovery Services',
      'Enterprise Storage Solutions',
      'Server Migration Services',
    ],
    route: '/services/storage-availability',
  },
  {
    img: IT_Solution_Img,
    name: 'IT Solutions',
    desc: 'Tailored IT solutions to streamline your business processes and enhance productivity.',
    bulletPoints: [
      'IT implementation Services',
      'IT Consultancy Services',
      'IT Troubleshooting Services',
    ],
    route: '/services/it-solutions',
  },
  {
    img: MonitoringSolutions_Img,
    name: 'Monitoring Solutions',
    desc: 'Proactive monitoring to ensure optimal performance and uptime of your IT systems.',
    bulletPoints: [
      'Network Performance Monitoring',
      'Storage Monitoring Services',
      'Server Application Monitoring',
    ],
    route: '/services/monitoring-solutions',
  },
];

const Services = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-[#f6f5ff] px-4" id="services">
      <Helmet>
  <title>Infonet Systems | Reliable IT Services in Delhi NCR</title>
  <meta name="description" content="Learn about Infonet Systems, a trusted provider of IT infrastructure and services." />
  </Helmet>
      <h1 className="text-4xl md:text-5xl mb-8 font-extrabold tracking-tight mt-16">Services</h1>
      <div className="flex flex-col gap-8 w-full max-w-5xl">
        {services.map((service, index) => (
          <TiltCard
            key={index}
            ServiceImg={service.img}
            ServiceName={service.name}
            ServiceDesc={service.desc}
            bulletPoints={service.bulletPoints}
            route={service.route}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;