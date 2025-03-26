
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    // Map navigation items to their respective section IDs
    const sectionMap: Record<string, string> = {
      home: "home",
      about: "about",
      education: "education",
      skills: "skills",
      projects: "projects",
      experience: "experience",
      contact: "contact",
    };
    
    const element = document.getElementById(sectionMap[sectionId]);
    
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#1E293B]/80 backdrop-blur-md z-50 border-b border-purple-500/20 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white cursor-pointer hover:text-purple-400 transition-colors" onClick={() => scrollToSection("home")}>
          Portfolio
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {[
            "Home",
            "About",
            "Education",
            "Skills",
            "Projects",
            "Experience",
            "Contact",
          ].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium relative group"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-purple-400 transition-all group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-gray-300 hover:text-purple-400"
        >
          <Menu className="w-7 h-7" />
        </button>
      </div>

      {/* Sidebar for Mobile Navigation */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-[#1E293B] shadow-lg border-l border-purple-500/20 
        transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <div className="flex justify-between items-center px-6 py-5 border-b border-purple-500/20">
          <h2 className="text-xl font-bold text-white">Menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:text-purple-400"
          >
            <X className="w-7 h-7" />
          </button>
        </div>

        <div className="flex flex-col gap-6 p-6">
          {[
            "Home",
            "About",
            "Education",
            "Skills",
            "Projects",
            "Experience",
            "Contact",
          ].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-gray-300 hover:text-purple-400 transition-all duration-300 font-medium text-lg"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Overlay when Sidebar is Open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navigation;
