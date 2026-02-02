import React, { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = useMemo(
    () => [
      { label: "Home", id: "home" },
      { label: "About", id: "about" },
      { label: "Education", id: "education" },
      { label: "Skills", id: "skills" },
      { label: "Projects", id: "projects" },
      { label: "Experience", id: "experience" },
      { label: "Certifications", id: "certifications" },
      { label: "AcademicProject", id: "academicproject" }, // ✅ match your section id
      { label: "Contact", id: "contact" },
    ],
    [],
  );

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  // ✅ lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ✅ Esc closes sidebar
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <>
      {/* Top navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-[#1E293B]/80 backdrop-blur-md z-50 border-b border-purple-500/20 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          {/* Logo */}
          <h1
            onClick={() => scrollToSection("home")}
            className="group cursor-pointer flex items-center gap-2 select-none"
          >
            {/* RK badge */}
            <span
              className="
      px-3 py-1 rounded-lg font-bold
      bg-gradient-to-r from-purple-500 to-pink-500
      text-white shadow-md
      group-hover:scale-105 transition
    "
            >
              RK
            </span>

            {/* text */}
            <span
              className="
      text-xl font-semibold text-gray-200
      group-hover:text-purple-400 transition-colors
    "
            >
              Portfolio
            </span>
          </h1>

          {/* Desktop Navigation (keep your old underline effect) */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="
                  text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium relative group
                "
              >
                {item.label}
                <span
                  className="
                    absolute left-0 -bottom-1 w-0 h-[2px]
                    bg-gradient-to-r from-purple-400 to-pink-500
                    transition-all duration-300 group-hover:w-full
                  "
                />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-gray-300 hover:text-purple-400 transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </nav>

      {/* ✅ Mobile Overlay + Sidebar (fix overlap) */}
      <div
        className={`
          fixed inset-0 z-[9999]
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
          transition-opacity duration-300
        `}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
          onClick={() => setIsOpen(false)}
        />

        {/* Sidebar */}
        <div
          className={`
            absolute top-0 right-0 h-full w-72 max-w-[85vw]
            bg-[#1E293B]
            border-l border-purple-500/20
            shadow-2xl
            transform transition-transform duration-300
            ${isOpen ? "translate-x-0" : "translate-x-full"}
            overflow-hidden
          `}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Glow background inside panel (for better look) */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-pink-500/10" />

          {/* Header */}
          <div className="relative flex justify-between items-center px-6 py-5 border-b border-purple-500/20">
            <h2 className="text-xl font-bold text-white">Menu</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-purple-400 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          {/* Menu items */}
          <div className="relative flex flex-col gap-3 p-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="
                  text-left text-gray-200 font-medium text-lg
                  px-4 py-3 rounded-xl
                  transition-all duration-300
                  hover:bg-white/5 hover:text-purple-300
                  border border-transparent hover:border-purple-500/30
                "
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* spacer so content won't hide behind fixed navbar */}
    </>
  );
};

export default Navigation;
