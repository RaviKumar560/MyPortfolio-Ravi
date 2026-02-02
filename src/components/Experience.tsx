import React from "react";
import { Briefcase } from "lucide-react";

const ExperienceCard = ({
  position,
  company,
  duration,
  responsibilities,
  index,
}: {
  position: string;
  company: string;
  duration: string;
  responsibilities: string[];
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
          border border-purple-500/30
          bg-[#2A3749]
          p-7 md:p-8
          shadow-lg
          transition-all duration-300
          hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/25 hover:border-purple-400
          animate-fade-up
        "
      >
        {/* Glow backdrop */}
        <div className="pointer-events-none absolute -inset-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(168,85,247,0.25)_0%,transparent_55%)]" />
        </div>

        {/* Shimmer overlay */}
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
          {/* Icon */}
          <div
            className="
              shrink-0 rounded-xl border border-white/10 bg-white/5 p-3
              transition-all duration-300
              group-hover:scale-110 group-hover:bg-purple-500/10 group-hover:border-purple-400/40
            "
          >
            <Briefcase className="w-7 h-7 text-purple-400 transition-transform duration-300 group-hover:-rotate-6" />
          </div>

          <div className="min-w-0">
            {/* Title row */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
              <div>
                <h3 className="text-2xl font-semibold text-white tracking-tight">
                  {position}
                </h3>
                <p className="text-lg text-gray-300 font-medium">{company}</p>
              </div>

              {/* Duration pill */}
              <span
                className="
                  inline-flex w-fit items-center rounded-full
                  border border-white/10 bg-white/5
                  px-3 py-1 text-sm text-gray-300
                  transition-all duration-300
                  group-hover:border-purple-400/40 group-hover:bg-purple-500/10
                "
              >
                {duration}
              </span>
            </div>

            {/* Responsibilities */}
            <div className="mt-5">
              <h4 className="text-base md:text-lg text-purple-300 font-semibold mb-3">
                Responsibilities
              </h4>

              <ul className="space-y-2">
                {responsibilities.map((item, i) => (
                  <li
                    key={i}
                    className="
                      flex items-start gap-3 text-gray-300/90
                      transition-all duration-200
                      group-hover:text-gray-200
                    "
                  >
                    {/* Bullet */}
                    <span
                      className="
                        mt-2 h-2 w-2 rounded-full bg-purple-400/80
                        shadow-[0_0_10px_rgba(168,85,247,0.55)]
                        transition-transform duration-300
                        group-hover:scale-110
                      "
                    />
                    {/* Text */}
                    <span
                      className="
                        text-base leading-relaxed
                        transition-transform duration-300
                        group-hover:translate-x-0.5
                      "
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom accent line */}
            <div className="mt-6 h-[2px] w-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full transition-all duration-500 group-hover:w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      position: " Associate Software Developer",
      company: "Youlogix Infotech Pvt. Ltd.",
      duration: "December 2022 - Present",
      responsibilities: [
        "Conducted comprehensive analyses of user needs and software requirements, leading to the design of scalable, efficient solutions.",
        "Engineered and maintained high-availability applications that align with strategic business objectives.",
        "Architected and implemented RESTful web services to streamline client-side integration and enhance system interoperability.",
        "Rigorously evaluated project requirements to ensure that stakeholder expectations were in harmony with technical capabilities.",
        "Developed and deployed robust firmware solutions for advanced embedded system applications.",
      ],
    },
    {
      position: "Intern As Java developer",
      company: "Neo Nimbus IT",
      duration: "Seotember 2022 - November2022",
      responsibilities: [
        "Underwent training in Core Java, Spring Boot, and MySQL with exposure to real-world project development.",
        "Learned to develop REST APIs and connect them with a relational database.",
        "Performed bug fixing, code reviews under the guidance of mentors.",
        "Acquired practical knowledge of Git, Postman, and Agile workflows.",
      ],
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#1E293B]" id="experience">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-6">
          Work Experience
        </h2>

        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mb-12 rounded-full"></div>

        {/* Timeline layout */}
        <div className="relative md:pl-10 space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              index={index}
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
