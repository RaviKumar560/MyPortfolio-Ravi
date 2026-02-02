import React, { useState, useEffect } from "react";
import { Download, Linkedin, Github, Mail } from "lucide-react";

const Hero = () => {
  const roles = [
    "Java Full Stack Developer",
    "Java Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
  ];

  const [displayedRole, setDisplayedRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);

  // Typing effect for roles
  useEffect(() => {
    const role = roles[roleIndex];

    let timeoutId;

    if (letterIndex < role.length) {
      timeoutId = setTimeout(() => {
        setDisplayedRole(role.substring(0, letterIndex + 1));
        setLetterIndex((prev) => prev + 1);
      }, 100);
    } else {
      timeoutId = setTimeout(() => {
        setLetterIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
    }

    return () => clearTimeout(timeoutId);
  }, [letterIndex, roleIndex]);

  const socials = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ravi-kumar-224671356/",
      hoverColor: "group-hover:text-blue-400",
      label: "LinkedIn",
      isExternal: true,
    },
    {
      icon: Github,
      href: "https://github.com/RaviKumar560",
      hoverColor: "group-hover:text-gray-400",
      label: "GitHub",
      isExternal: true,
    },
    {
      icon: Mail,
      href: "mailto:techkumarravi563@gmail.com",
      hoverColor: "group-hover:text-red-500",
      label: "Email",
      isExternal: false,
      onClick: (e) => {
        // Helps if parent overlays/handlers interfere
        e.stopPropagation();
        window.location.href = "mailto:techkumarravi563@gmail.com";
      },
    },
  ];

  //  GitHub Pages-safe URL (works with Vite BASE_URL)
  // Put file here: /public/RAVI_RESUME.pdf
  const resumeUrl = `${import.meta.env.BASE_URL}RAVI_RESUME_K.pdf`;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center p-6 pt-20 md:pt-28 bg-[#1E293B] text-white scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8 animate-fade-up">
          <div className="space-y-2">
            <h2 className="text-3xl opacity-90">Hello, It's Me</h2>

            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              Ravi Kumar
            </h1>

            {/* Typing Role Animation */}
            <div className="h-[2.5rem] pt-4">
              <p className="text-2xl">
                I'm a{" "}
                <span className="text-purple-500 font-semibold transition-all duration-500 ease-in-out hover:text-pink-400">
                  {displayedRole}
                  <span className="animate-blink">|</span>
                </span>
              </p>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed max-w-2xl text-lg">
            Passionate <strong>Java Full Stack Developer</strong> with over 3+
            Year of expertise in designing, developing, and maintaining scalable
            applications. Skilled in building robust REST APIs using{" "}
            <strong>Java, Spring Boot, React,</strong> and{" "}
            <strong>Microservices</strong>. Skilled in <strong>frontend</strong>{" "}
            and <strong>backend</strong> development building high-quality web
            applications focused on <strong>performance, security,</strong> and{" "}
            <strong>user experience</strong>
            Also have experience with Generative AI, and API integrations to
            develop AI-powered chatbots, smart assistants, and automation
            features using OpenAI.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.isExternal ? "_blank" : undefined}
                rel={social.isExternal ? "noopener noreferrer" : undefined}
                aria-label={social.label}
                onClick={social.onClick}
                className="group flex items-center justify-center p-4 border border-purple-500/40 rounded-full 
                  shadow-md transition-all duration-300 hover:scale-125 hover:shadow-xl"
              >
                <social.icon
                  className={`w-10 h-10 text-white transition-colors duration-300 ${social.hoverColor}`}
                />
              </a>
            ))}
          </div>

          {/* Download CV Button */}
          <a
            href={resumeUrl}
            download
            className="relative inline-flex items-center gap-2 px-6 py-3 bg-purple-600 rounded-full text-white font-medium shadow-lg transition-all duration-300 hover:bg-purple-700 hover:scale-105 overflow-hidden"
          >
            <Download className="w-5 h-5" />
            Download CV
            {/* ✅ IMPORTANT: prevent overlay from blocking clicks */}
            <span className="absolute inset-0 rounded-full bg-purple-400 opacity-30 blur-md pointer-events-none" />
          </a>
        </div>

        {/* Profile Image Section */}
        <div className="relative flex justify-center items-center">
          {/* Glowing Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20 animate-pulse pointer-events-none" />

          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
            {/* Spinning Border Effect */}
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-spin-slow pointer-events-none"
              style={{ clipPath: "inset(2px round 50%)" }}
            />

            {/* Image Container */}
            <div className="absolute inset-[3px] rounded-full overflow-hidden bg-[#1E293B] border-4 border-gray-700 shadow-lg">
              <img
                src={`${import.meta.env.BASE_URL}image/raviProfile.jpeg`}
                alt="Ravi Kumar"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
