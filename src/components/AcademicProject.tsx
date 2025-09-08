import React from "react";
import { GraduationCap } from "lucide-react";

const ProjectCard = ({
  title,
  link,
  responsibilities,
}: {
  title: string;
  link: string;
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
        <GraduationCap className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
        <div>
          {/* Project Title */}
          <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>

          {/* Project Link */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-700 text-purple-300 px-3 py-1 rounded-lg text-sm font-medium mb-3 hover:bg-purple-500/20 transition-colors"
          >
            🔗 View Project
          </a>

          {/* Responsibilities */}
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
  );
};

const AcademicProjects = () => {
  const projects = [
    {
      title: "Appointment Booking System",
      link: "https://github.com/RaviKumar560/ApointmentMicroservice", // replace with actual link
      responsibilities: [
        "Developed backend services for a Doctor-Patient Appointment Booking System.",
        "Enabled patients to book appointments and receive real-time email confirmation notifications.",
        "Implemented using Spring Boot, Microservices, RESTful APIs, Kafka, and Mail Notification Service; tested APIs with Postman.",
      ],
    },
    {
      title: "E-Learning Website",
      link: "https://github.com/RaviKumar560/E-learning-website", // replace with actual link
      responsibilities: [
        "Built a fully functional E-Learning platform enabling students to access online courses.",
        "Designed the frontend using JSP, HTML, CSS, and JavaScript, and implemented backend services with Spring Boot.",
        "Integrated MySQL for data storage and management, ensuring smooth user authentication and course handling.",
      ],
    },
    {
      title: "Online Test Paper Generator",
      link: "https://github.com/RaviKumar560/TestPaper-Generator", // replace with actual link
      responsibilities: [
        "Created an automated test paper generator that dynamically fetches questions from JavaTpoint.",
        "Built with Spring Boot, HTML, JavaScript, and MySQL, allowing teachers to generate unique question papers efficiently.",
      ],
    },
    {
      title: "Payment Gateway Integration",
      link: "https://github.com/RaviKumar560/PaymentGateway", // replace with actual link
      responsibilities: [
        "Implemented Razorpay Payment Gateway for secure online transactions.",
        "Utilized Spring Boot, JavaScript, HTML, CSS, and MySQL to handle end-to-end payment flows.",
      ],
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#1E293B]" id="academicproject">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-6">
          Academic Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mb-12 rounded-full"></div>
        <div className="space-y-8">
          {projects.map((proj, index) => (
            <ProjectCard
              key={index}
              title={proj.title}
              link={proj.link}
              responsibilities={proj.responsibilities}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicProjects;
