'use client'
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollToSection = (href) => {
      // Check if we're in the browser environment
      if (typeof window !== 'undefined') {
          const element = document.querySelector(href);
          if (element) {
              element.scrollIntoView({ behavior: "smooth" });
          }
      }
      // Close mobile menu after clicking a link
      setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative min-w-max px-4 py-4 md:px-10 md:py-[22px] lg:space-x-[183px] md:flex md:items-center md:justify-between md:self-stretch md:rounded-full bg-white shadow-[0_0_0_5px_#FFF] border-[1px] border-border z-10 max-w-full">
      {/* Logo and Hamburger Container */}
      <div className="flex justify-between items-center md:justify-start">
        <div>
          <Image src={"/Echo Logo.png"} width={110} height={43} alt="Echo Logo" />
        </div>
        
        {/* Hamburger Menu Button - Only visible on mobile */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Navigation Menu */}
      <ul className={`
        absolute top-full left-0 right-0 mt-2 bg-white border border-border rounded-lg shadow-lg p-4 space-y-4
        md:relative  md:mt-0 md:bg-transparent md:border-none md:shadow-none md:p-0 md:space-y-0
        md:flex md:justify-center md:items-end md:space-x-[19px]
        ${isMenuOpen ? 'block' : 'hidden md:flex'}
      `}>
        <li className="text-center px-2.5 py-2 cursor-pointer hover:bg-gray-100 md:hover:bg-transparent rounded" onClick={() => scrollToSection("#Home")}>Home</li>
        <li className="text-center px-2.5 py-2 cursor-pointer hover:bg-gray-100 md:hover:bg-transparent rounded" onClick={() => scrollToSection("#Features")}>Features</li>
        <li className="text-center px-2.5 py-2 cursor-pointer hover:bg-gray-100 md:hover:bg-transparent rounded" onClick={() => scrollToSection("#HowItWorks")}>How it works</li>
        <li className="text-center px-2.5 py-2 cursor-pointer hover:bg-gray-100 md:hover:bg-transparent rounded" onClick={() => scrollToSection("#FAQ")}>FAQ</li>
        <li className="text-center px-2.5 py-2 cursor-pointer hover:bg-gray-100 md:hover:bg-transparent rounded" onClick={() => scrollToSection("#JOIN")}>Join Waitlist</li>
      </ul>
    </nav>
  );
};

export default Navbar;
