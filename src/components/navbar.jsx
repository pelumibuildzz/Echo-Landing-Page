'use-client'
import Image from "next/image";


const Navbar = () => {
  
  const scrollToSection = (href) => {
      // Check if we're in the browser environment
      if (typeof window !== 'undefined') {
          const element = document.querySelector(href);
          if (element) {
              element.scrollIntoView({ behavior: "smooth" });
          }
      }
  };

  return (
    <nav className="md:px-10 md:py-[22px] md:space-x-[183px] md:flex md:items-center md:self-stretch md:rounded-full bg-white shadow-[0_0_0_5px_#FFF] border-[1px] border-border">
      <div>
        <Image src={"/Echo Logo.png"} width={110} height={43} alt="Echo Logo" />
      </div>
      <ul className="md:flex md:justify-center md:items-end md:space-x-[19px]">
        <li className="text-center px-2.5 cursor-pointer" onClick={scrollToSection("#Home")}>Home</li>
        <li className="text-center px-2.5 cursor-pointer" onClick={scrollToSection("#Features")}>Features</li>
        <li className="text-center px-2.5 cursor-pointer" onClick={scrollToSection("#HowItWorks")}>How it works</li>
        <li className="text-center px-2.5 cursor-pointer" onClick={scrollToSection("#FAQ")}>FAQ</li>
        <li className="text-center px-2.5 cursor-pointer" onClick={scrollToSection("#JOIN")}>Join Waitlist</li>
      </ul>
    </nav>
  );
};

export default Navbar;
