import React, { useState, useEffect } from "react";
import {
  Download,
  Facebook,
  Instagram,
  Linkedin,
  Github,
  Mail,
} from "lucide-react";

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

    if (letterIndex < role.length) {
      const timeout = setTimeout(() => {
        setDisplayedRole(role.substring(0, letterIndex + 1));
        setLetterIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setLetterIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
    }
  }, [letterIndex, roleIndex]);

  return (
    <section
      className="min-h-screen flex items-center p-6 bg-[#1E293B] text-white"
      id="home"
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
            Passionate <strong>Java Full Stack Developer</strong> with over 2
            Year of expertise in in designing, developing, and maintaining
            scalable applications. Skilled in building robust REST APIs using{" "}
            <strong>Java, Spring Boot, React,</strong> and{" "}
            <strong>Microservices</strong>. Skilled in <strong>frontend</strong>{" "}
            and <strong>backend</strong> development, building high-quality web
            applications focused on <strong>performance, security,</strong> and{" "}
            <strong>user experience</strong>.
          </p>
          {/* Social Icons */}
          <div className="flex gap-6">
            {[
              {
                icon: Linkedin,
                href: "https://linkedin.com/in/yourlinkedin",
                color: "group-hover:text-blue-400",
              },
              {
                icon: Github,
                href: "https://github.com/RaviKumar560",
                color: "group-hover:text-gray-400",
              },
              {
                icon: Mail,
                href: "mailto:techkumarravi563@gmail.com",
                color: "group-hover:text-red-500",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center p-4 border border-purple-500/40 rounded-full 
        shadow-md transition-all duration-300 hover:scale-125 hover:shadow-xl"
              >
                <social.icon
                  className={`w-10 h-10 text-white transition-colors duration-300 ${social.color}`}
                />
              </a>
            ))}
          </div>

          {/* Download CV Button */}
          <a
            href="public/RAVI_RESUME.pdf"
            download="RAVI_RESUME.pdf"
            className="relative inline-flex items-center gap-2 px-6 py-3 bg-purple-600 rounded-full text-white font-medium shadow-lg transition-all duration-300 hover:bg-purple-700 hover:scale-105"
          >
            <Download className="w-5 h-5" />
            Download CV
            <span className="absolute inset-0 rounded-full bg-purple-400 opacity-30 blur-md"></span>
          </a>
        </div>

        {/* Profile Image Section */}
        <div className="relative flex justify-center items-center">
          {/* Glowing Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20 animate-pulse" />

          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
            {/* Spinning Border Effect */}
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-spin-slow"
              style={{ clipPath: "inset(2px round 50%)" }}
            />

            {/* Image Container */}
            <div className="absolute inset-[3px] rounded-full overflow-hidden bg-[#1E293B] border-4 border-gray-700 shadow-lg">
              <img src="/image/raviProfile.jpeg" alt="Ravi_Kumar" 
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
