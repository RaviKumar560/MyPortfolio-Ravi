
import React from 'react';
import { Briefcase } from 'lucide-react';

const ExperienceCard = ({ 
  position, 
  company, 
  duration, 
  responsibilities 
}: { 
  position: string; 
  company: string; 
  duration: string; 
  responsibilities: string[];
}) => {
  return (
    <div className="relative bg-[#2A3749] p-8 rounded-xl shadow-lg border border-purple-500/30 
    transition-all duration-300 transform hover:scale-[1.05] 
    hover:shadow-xl hover:shadow-purple-500/30 hover:border-purple-400 hover:bg-[#364155] 
    before:absolute before:inset-0 
    before:bg-gradient-to-br before:from-transparent before:via-[#2A3749]/40 before:to-[#3B455A]/50 
    before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 
    group">

      
      <div className="relative flex items-start gap-4">
        <Briefcase className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
        <div>
          <h3 className="text-2xl font-semibold text-white mb-1">{position}</h3>
          <p className="text-lg text-gray-300 font-medium">{company}</p>
          <span className="text-sm text-gray-400 font-medium italic">{duration}</span>
          
          <div className="mt-4">
            <h4 className="text-lg text-purple-300 font-semibold mb-1">Responsibilities</h4>
            <ul className="list-disc ml-5 text-gray-400 text-base space-y-2">
              {responsibilities.map((item, index) => (
                <li key={index} className="hover:text-white transition-colors duration-200">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      position: "Software Developer",
      company: "Alpha Mind Solution",
      duration: "September 2022 - Present",
      responsibilities: [
        "Conducted comprehensive analyses of user needs and software requirements, leading to the design of scalable, efficient solutions.",
        "Engineered and maintained high-availability applications that align with strategic business objectives.",
        "Architected and implemented RESTful web services to streamline client-side integration and enhance system interoperability.",
        "Rigorously evaluated project requirements to ensure that stakeholder expectations were in harmony with technical capabilities.",
        "Developed and deployed robust firmware solutions for advanced embedded system applications."
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-[#1E293B]" id="experience">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-6">Work Experience</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mb-12 rounded-full"></div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              position={exp.position}
              company={exp.company}
              duration={exp.duration}
              responsibilities={exp.responsibilities}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
