
import React from "react";
import { GraduationCap } from "lucide-react";

const EducationCard = ({
  degree,
  institution,
  year,
  score,
}: {
  degree: string;
  institution: string;
  year: string;
  score: string;
}) => {
  return (
    <div
      className="relative bg-[#2A3749] p-8 rounded-xl shadow-lg border border-purple-500/30 
      transition-all duration-300 transform hover:scale-[1.05] 
      hover:shadow-xl hover:shadow-purple-500/30 hover:border-purple-400 hover:bg-[#364155] 
      before:absolute before:inset-0 
      before:bg-gradient-to-br before:from-transparent before:via-[#2A3749]/40 before:to-[#3B455A]/50 
      before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 
      group"
    >
      <div className="relative flex items-start gap-4">
        <GraduationCap className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
        <div>
          <h3 className="text-2xl font-semibold text-white mb-1">{degree}</h3>
          <p className="text-lg text-gray-300 font-medium">{institution}</p>
          <div className="flex flex-wrap gap-6 mt-3 text-base text-gray-400 font-medium">
            <span className="bg-gray-700 px-3 py-1 rounded-lg">
              Year: {year}
            </span>
            <span className="bg-gray-700 px-3 py-1 rounded-lg">
              Score: {score}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science",
      institution: "Chhatrapati Shahu Ji Maharaj University, Kanpur",
      year: "2023",
      score: "67.66%",
    },
    {
      degree: "Intermediate",
      institution: "Dr. C.V. Raman Inter College U.P Board",
      year: "2020",
      score: "80.20%",
    },
    {
      degree: "High School",
      institution: "Sardar Patel Academy High School U.P. Board",
      year: "2018",
      score: "89.16%",
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#1E293B]" id="education">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-6">
          Education
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mb-12 rounded-full"></div>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <EducationCard
              key={index}
              degree={edu.degree}
              institution={edu.institution}
              year={edu.year}
              score={edu.score}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
