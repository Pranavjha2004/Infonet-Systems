import React from 'react';
import logo from '../assets/MainLogo.png';
import { Meteors } from './Meteors';
import { Mail, Phone, Linkedin } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer className="relative w-full bg-gradient-to-r from-[#17141d] via-[#271244] to-[#7533ff] text-white py-6 px-4 mt-16 overflow-hidden rounded-t-3xl">
      {/* Meteor Background */}
      <Meteors number={12} className="absolute inset-0 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <img src={logo} alt="Company Logo" className="w-48 sm:w-56 mb-4" />
        </div>

        {/* Contact Info + Socials */}
        <div className="text-sm text-center sm:text-left text-[#d4d4d4] space-y-1 mt-2 sm:mt-6 w-full sm:w-auto">
          <p>
            <span className="font-medium text-white">Address:</span> B 22, Flat no. 10, Panchsheel Vihar, Malviya Nagar, Delhi-17
          </p>
          <p>
            <span className="font-medium text-white">Phone:</span> +91 11 29542323
          </p>
          <p>
            <span className="font-medium text-white">Cell:</span> +91 9810060454
          </p>

          {/* Social Icons with Tooltips */}
          <div className="flex justify-center sm:justify-start gap-5 pt-3">
            {/* Gmail */}
            <div className="relative group">
              <a
                href="mailto:infonet@example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#f87171] transition-all duration-300 hover:scale-110"
              >
                <Mail size={18} />
              </a>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 bg-black text-white text-xs rounded px-2 py-0.5 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                Gmail
              </div>
            </div>

            {/* Phone */}
            <div className="relative group">
              <a
                href="tel:+919810060454"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#34d399] transition-all duration-300 hover:scale-110"
              >
                <Phone size={18} />
              </a>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 bg-black text-white text-xs rounded px-2 py-0.5 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                Phone
              </div>
            </div>

            {/* LinkedIn */}
            <div className="relative group">
              <a
                href="https://www.linkedin.com/in/infonet-systems"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#60a5fa] transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={18} />
              </a>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 bg-black text-white text-xs rounded px-2 py-0.5 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                LinkedIn
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Note */}
      <div className="relative z-10 text-center text-xs text-gray-300 mt-6">
        &copy; {new Date().getFullYear()} Designed By Pranav Kumar Jha. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterSection;
