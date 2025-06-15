import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/MainLogo.png';
import dropArrow from '../assets/down-arrow.png';

const NavBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isMainPage = location.pathname === '/';

  // Handle scrolling after navigation
  useEffect(() => {
    if (isMainPage && location.hash) {
      const elementId = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth',
          });
        }
      }, 100); // Delay to ensure DOM is updated
    }
  }, [location, isMainPage]);

  const handleNavClick = (section, isServiceRoute = false) => {
    if (isServiceRoute) {
      navigate(section); // Navigate to service route (e.g., /services/it-infrastructure)
    } else if (!isMainPage) {
      navigate(`/#${section}`); // Navigate to main page with hash
    } else {
      const element = document.getElementById(section);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth',
        });
      }
    }
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const services = [
    { name: 'IT Infrastructure Solution', route: '/services/it-infrastructure' },
    { name: 'Security Solutions', route: '/services/security-solutions' },
    { name: 'Storage and Availability', route: '/services/storage-availability' },
    { name: 'IT Solutions', route: '/services/it-solutions' },
    { name: 'Monitoring Solutions', route: '/services/monitoring-solutions' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#f6f5ff] shadow-md">
      <nav className="container mx-auto px-16">
        <div className="flex items-center justify-between h-20">
          <ScrollLink
            to="/"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer"
            onClick={() => navigate('/')}
          >
            <img src={logo} alt="Infonet Systems" className="w-40" />
          </ScrollLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:text-xl text-lg main-head">
            <ScrollLink
              to="/"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-[#047a2e] transition-colors"
              onClick={() => navigate('/')}
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="aboutUs"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-[#047a2e] transition-colors"
              onClick={() => handleNavClick('aboutUs')}
            >
              About Us
            </ScrollLink>
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <ScrollLink
                to="services"
                smooth={true}
                duration={500}
                offset={-40}
                className="cursor-pointer flex items-center hover:text-[#047a2e] transition-colors"
                onClick={() => handleNavClick('services')}
              >
                Services
                <img src={dropArrow} alt="Dropdown Arrow" className="w-4 h-4 ml-1" />
              </ScrollLink>
              {isDropdownOpen && (
                <ul className="absolute top-full left-0 bg-white shadow-md rounded-md py-2 w-56 text-center">
                  {services.map((service, index) => (
                    <li key={index} className="py-2 hover:bg-gray-100">
                      <button
                        className="block cursor-pointer w-full text-left px-4"
                        onClick={() => handleNavClick(service.route, true)}
                      >
                        {service.name}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <ScrollLink
              to="clients"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-[#047a2e] transition-colors"
              onClick={() => handleNavClick('clients')}
            >
              Clients
            </ScrollLink>
            <ScrollLink
              to="testimonials"
              smooth={true}
              duration={500}
              offset={-130}
              className="cursor-pointer hover:text-[#047a2e] transition-colors"
              onClick={() => handleNavClick('testimonials')}
            >
              Testimonials
            </ScrollLink>
            <ScrollLink
              to="contactUs"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-[#047a2e] transition-colors"
              onClick={() => handleNavClick('contactUs')}
            >
              Contact Us
            </ScrollLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="flex flex-col items-center py-4 gap-4 text-lg">
              <ScrollLink
                to="/"
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer hover:text-blue-600 transition-colors"
                onClick={() => {
                  handleNavClick('');
                  setMobileMenuOpen(false);
                }}
              >
                Home
              </ScrollLink>
              <ScrollLink
                to="aboutUs"
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer hover:text-blue-600 transition-colors"
                onClick={() => {
                  handleNavClick('aboutUs');
                  setMobileMenuOpen(false);
                }}
              >
                About Us
              </ScrollLink>
              <div className="relative w-full text-center">
                <button
                  className="flex items-center justify-center w-full hover:text-blue-600 transition-colors"
                  onClick={() => setDropdownOpen(!isDropdownOpen)}
                >
                  Services
                  <img src={dropArrow} alt="Dropdown Arrow" className="w-4 h-4 ml-1" />
                </button>
                {isDropdownOpen && (
                  <ul className="bg-white shadow-md rounded-md py-2 w-full mt-2">
                    {services.map((service, index) => (
                      <li key={index} className="py-2 hover:bg-gray-100">
                        <button
                          className="block cursor-pointer w-full text-left px-4"
                          onClick={() => {
                            handleNavClick(service.route, true);
                            setDropdownOpen(false);
                            setMobileMenuOpen(false);
                          }}
                        >
                          {service.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <ScrollLink
                to="clients"
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer hover:text-blue-600 transition-colors"
                onClick={() => {
                  handleNavClick('clients');
                  setMobileMenuOpen(false);
                }}
              >
                Clients
              </ScrollLink>
              <ScrollLink
                to="testimonials"
                smooth={true}
                duration={500}
                offset={-120}
                className="cursor-pointer hover:text-blue-600 transition-colors"
                onClick={() => {
                  handleNavClick('testimonials');
                  setMobileMenuOpen(false);
                }}
              >
                Testimonials
              </ScrollLink>
              <ScrollLink
                to="contactUs"
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer hover:text-blue-600 transition-colors"
                onClick={() => {
                  handleNavClick('contactUs');
                  setMobileMenuOpen(false);
                }}
              >
                Contact Us
              </ScrollLink>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;