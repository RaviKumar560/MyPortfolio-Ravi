
import React from "react";
import { GraduationCap, School } from "lucide-react";

const ProjectCard = ({
  title,
  description,
  icon: Icon,
  duration,
  responsibilities,
}: {
  title: string;
  description: string;
  icon: any;
  duration: string;
  responsibilities: string[];
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
        <Icon className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
        <div>
          <h3 className="text-2xl font-semibold text-white mb-1">{title}</h3>
          <span className="text-sm text-gray-400 font-medium italic">
            {duration}
          </span>

          <div className="mt-4">
            <h4 className="text-lg text-purple-300 font-semibold mb-1">
              Description
            </h4>
            <p className="text-gray-300 text-base leading-relaxed">
              {description}
            </p>
          </div>

          <div className="mt-4">
            <h4 className="text-lg text-purple-300 font-semibold mb-1">
              Responsibilities
            </h4>
            <ul className="list-disc ml-5 text-gray-400 text-base space-y-2">
              {responsibilities.map((item, index) => (
                <li
                  key={index}
                  className="hover:text-white transition-colors duration-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "EduMart",
      description:
        "•	EduMart is an online learning marketplace that connects students with instructors, offering courses across various domains. The platform enables users to enroll in courses, track progress, and receive certifications. AWS services are utilized for secure content storage and scalable cloud hosting. ",
      icon: GraduationCap,
      duration: "Aug 2024 - Present",
      responsibilities: [
        "Developed microservices-based architecture for course management, user authentication, and payment processing.",
        "Implemented RESTful APIs for managing course enrollments, instructor uploads, and student progress tracking.",
        "Integrated MySQL for structured course data management and student records.",
        "Designed a responsive UI using React.js, HTML, CSS, and JavaScript for an interactive learning experience.",
      ],
    },
    {
      title: "UniEnroll",
      description:
        "UniEnroll is a backend system designed for university admission management, handling student applications, document verification, and admission status tracking. The system ensures secure processing of student records without front-end dependency.",
      icon: School,
      duration: "Oct 2023 - April 2024",
      responsibilities: [
        "Developed backend microservices for student application processing, eligibility verification, and seat allocation.",
        "Designed a role-based authentication system for students, administrators, and faculty.",
        "Implemented database management using MySQL for secure and efficient student record handling.",
        "Created RESTful APIs for integration with university portals and third-party verification services.",
        "Optimized backend performance to handle large-scale admission cycles efficiently.",
      ],
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#1E293B]" id="projects">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-6">
          Featured Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mb-12 rounded-full"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
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
