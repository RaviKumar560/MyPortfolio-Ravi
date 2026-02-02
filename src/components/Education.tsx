import React from "react";
import { GraduationCap } from "lucide-react";

const EducationCard = ({
  degree,
  institution,
  year,
  score,
  index,
}: {
  degree: string;
  institution: string;
  year: string;
  score: string;
  index: number;
}) => {
  return (
    <div className="relative group">
      {/* Timeline dot + line (desktop) */}
      <div className="hidden md:block absolute left-[-38px] top-10">
        <div className="h-4 w-4 rounded-full bg-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.7)]" />
        <div className="ml-[7px] mt-2 h-[calc(100%-10px)] w-[2px] bg-gradient-to-b from-purple-400/70 to-transparent" />
      </div>

      <div
        style={{ animationDelay: `${index * 120}ms` }}
        className="
          relative overflow-hidden rounded-2xl
          bg-[#2A3749]
          p-7 md:p-8
          shadow-lg border border-purple-500/30
          transition-all duration-300
          hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/25 hover:border-purple-400
          animate-fade-up
        "
      >
        {/* Glow */}
        <div className="pointer-events-none absolute -inset-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(168,85,247,0.22)_0%,transparent_55%)]" />
        </div>

        {/* Shimmer */}
        <div
          className="
            pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
            before:absolute before:inset-0
            before:bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.06)_20%,transparent_40%)]
            before:translate-x-[-120%] group-hover:before:translate-x-[120%]
            before:transition-transform before:duration-700
          "
        />

        <div className="relative flex items-start gap-4">
          {/* Icon badge */}
          <div
            className="
              shrink-0 rounded-xl border border-white/10 bg-white/5 p-3
              transition-all duration-300
              group-hover:scale-110 group-hover:bg-purple-500/10 group-hover:border-purple-400/40
            "
          >
            <GraduationCap className="w-7 h-7 text-purple-400 transition-transform duration-300 group-hover:-rotate-6" />
          </div>

          <div className="min-w-0">
            <h3 className="text-2xl font-semibold text-white tracking-tight">
              {degree}
            </h3>
            <p className="text-lg text-gray-300 font-medium mt-1">
              {institution}
            </p>

            {/* Info pills */}
            <div className="mt-4 flex flex-wrap gap-3">
              <span
                className="
                  inline-flex items-center rounded-full
                  border border-white/10 bg-white/5
                  px-3 py-1 text-sm text-gray-300
                  transition-all duration-300
                  group-hover:border-purple-400/40 group-hover:bg-purple-500/10
                "
              >
                <span className="text-gray-400 mr-1">Year:</span> {year}
              </span>

              <span
                className="
                  inline-flex items-center rounded-full
                  border border-white/10 bg-white/5
                  px-3 py-1 text-sm text-gray-300
                  transition-all duration-300
                  group-hover:border-purple-400/40 group-hover:bg-purple-500/10
                "
              >
                <span className="text-gray-400 mr-1">Score:</span> {score}
              </span>
            </div>

            {/* Bottom accent */}
            <div className="mt-6 h-[2px] w-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full transition-all duration-500 group-hover:w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  const education = [
    {
      degree: "Master Of Computer Application",
      institution: "Dr.virendra Swarup Institute Of Computer Studies, Kanpur",
      year: "2025",
      score: "8.26 CGPA",
    },
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

        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mb-12 rounded-full" />

        {/* Timeline padding on desktop */}
        <div className="relative md:pl-10 space-y-8">
          {education.map((edu, index) => (
            <EducationCard
              key={index}
              index={index}
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
