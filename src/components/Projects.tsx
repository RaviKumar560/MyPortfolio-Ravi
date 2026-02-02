import React from "react";
import { Activity, GraduationCap } from "lucide-react";

const ProjectCard = ({
  title,
  description,
  icon: Icon,
  duration,
  responsibilities,
  index,
}: {
  title: string;
  description: string;
  icon: any;
  duration: string;
  responsibilities: string[];
  index: number;
}) => {
  return (
    <div
      style={{ animationDelay: `${index * 120}ms` }}
      className="relative group animate-fade-up"
    >
      {/* Glow background */}
      <div className="pointer-events-none absolute -inset-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(168,85,247,0.22)_0%,transparent_55%)]" />
      </div>

      <div
        className="
          relative h-full
          bg-[#2A3749]
          rounded-2xl border border-purple-500/30
          p-7 md:p-8
          shadow-lg
          transition-all duration-300
          hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/25 hover:border-purple-400
          overflow-hidden
        "
      >
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

        {/* Header */}
        <div className="relative flex items-start justify-between gap-4">
          <div className="flex items-start gap-4 min-w-0">
            {/* Icon badge */}
            <div
              className="
                shrink-0 rounded-xl border border-white/10 bg-white/5 p-3
                transition-all duration-300
                group-hover:scale-110 group-hover:bg-purple-500/10 group-hover:border-purple-400/40
              "
            >
              <Icon className="w-7 h-7 text-purple-400 transition-transform duration-300 group-hover:-rotate-6" />
            </div>

            <div className="min-w-0">
              <h3 className="text-2xl font-semibold text-white tracking-tight truncate">
                {title}
              </h3>

              {/* Duration pill */}
              <div className="mt-2">
                <span
                  className="
                    inline-flex items-center rounded-full
                    border border-white/10 bg-white/5
                    px-3 py-1 text-sm text-gray-300
                    transition-all duration-300
                    group-hover:border-purple-400/40 group-hover:bg-purple-500/10
                  "
                >
                  {duration}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="relative mt-6">
          <h4 className="text-lg text-purple-300 font-semibold mb-2">
            Description
          </h4>
          <p className="text-gray-300 text-base leading-relaxed">
            {description}
          </p>
        </div>

        {/* Responsibilities */}
        <div className="relative mt-6">
          <h4 className="text-lg text-purple-300 font-semibold mb-3">
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
                {/* Modern bullet */}
                <span
                  className="
                    mt-2 h-2 w-2 rounded-full bg-purple-400/80
                    shadow-[0_0_10px_rgba(168,85,247,0.55)]
                    transition-transform duration-300
                    group-hover:scale-110
                  "
                />
                <span className="text-base leading-relaxed transition-transform duration-300 group-hover:translate-x-0.5">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom animated accent */}
        <div className="mt-7 h-[2px] w-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full transition-all duration-500 group-hover:w-full" />
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "HealthPredict – Disease Prediction Tool",
      description:
        "• HealthPredict is a healthcare analytics platform that collects patient health data and generates disease risk predictions for early intervention. It provides a clean React dashboard for doctors/patients, while a Spring Boot microservices backend exposes secure REST APIs. Real-time events are streamed using Kafka, and MySQL stores large-scale patient records with performance optimizations.",
      icon: Activity,
      duration: "August 2024 - Present",
      responsibilities: [
        "Developed scalable backend microservices using Java and Spring Boot to process and manage patient health data efficiently.",
        "Designed and implemented RESTful APIs to deliver predictive disease insights for providers and external systems.",
        "Built an interactive React.js dashboard with data visualization to track real-time health risk scores for users.",
        "Optimized MySQL performance using indexing and query tuning for fast access to large patient datasets.",
        "Integrated Apache Kafka for event-driven, real-time streaming and processing of patient health events across services.",
      ],
    },
    {
      title: "UniEnroll – University Admission Management System",
      description:
        "• UniEnroll is an admission management system that automates student applications from submission to verification and seat allocation. It uses microservices-based backend services with secure JWT-based authentication, enabling controlled access for students, admins, and faculty. The system supports third-party integrations through REST APIs and is tuned for high-volume admission periods.",
      icon: GraduationCap,
      duration: "June 2023 - May 2024",
      responsibilities: [
        "Developed backend microservices for application processing, eligibility verification, and seat allocation workflows.",
        "Implemented secure role-based authentication and authorization using JWT for student, admin, and faculty portals.",
        "Built secure REST APIs to support integrations with university portals and external verification systems.",
        "Performed MySQL query optimization and backend performance tuning to handle peak admission traffic reliably.",
        "Improved overall admission throughput by optimizing processes, contributing to faster processing time.",
      ],
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#1E293B]" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-6">
          Featured Projects
        </h2>

        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mb-12 rounded-full" />

        {/* Better spacing + responsive columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              title={project.title}
              description={project.description}
              icon={project.icon}
              duration={project.duration}
              responsibilities={project.responsibilities}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
