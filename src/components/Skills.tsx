
import React from "react";
import { Code, Database, Wrench, Award, Server, Cpu } from "lucide-react";
import {
  FaJava,
  FaReact,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaCss3,
  FaPython,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiKubernetes,
  SiMysql,
  SiOracle,
  SiRedux,
  SiSwagger,
} from "react-icons/si";

const SkillCategory = ({ title, skills, icon: Icon }) => {
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
      <div className="relative flex items-center gap-4 mb-5">
        <Icon className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="flex items-center gap-2 px-4 py-2 bg-[#364155] 
              text-purple-300 rounded-lg text-sm font-medium 
              transition-all duration-300 hover:scale-110 hover:bg-[#475569] hover:text-white shadow-md"
          >
            {skill.icon && <skill.icon className={`w-6 h-6 ${skill.color}`} />}
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Java", icon: FaJava, color: "text-red-500" },
        { name: "JavaScript", color: "text-yellow-400" },
        { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
        { name: "CSS3", icon: FaCss3, color: "text-blue-500" },
        { name: "C", color: "text-gray-400" },
        { name: "Python", icon: FaPython, color: "text-yellow-500" },
      ],
    },
    {
      title: "Frameworks",
      icon: Wrench,
      skills: [
        { name: "Spring Boot", icon: SiSpringboot, color: "text-green-500" },
        { name: "Spring MVC", color: "text-green-400" },
        { name: "Spring Security", color: "text-green-600" },
        { name: "Microservices", color: "text-teal-400" },
        { name: "React.js", icon: FaReact, color: "text-blue-400" },
      ],
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
        { name: "Oracle", icon: SiOracle, color: "text-orange-600" },
        { name: "H2 (Testing)", color: "text-gray-400" },
      ],
    },
    {
      title: "Backend Technologies",
      icon: Server,
      skills: [
        { name: "JSE (JDBC, Servlet, JSP)", color: "text-gray-300" },
        { name: "RESTful APIs", color: "text-teal-400" },
        { name: "Swagger API", icon: SiSwagger, color: "text-green-400" },
        { name: "Postman", color: "text-orange-500" },
        { name: "JUnit", color: "text-red-500" },
        { name: "Kafka", color: "text-purple-400" },
        { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
        { name: "Docker", icon: FaDocker, color: "text-cyan-400" },
        { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-600" },
        { name: "AWS", icon: FaAws, color: "text-yellow-500" },
      ],
    },
    {
      title: "Frontend Technologies",
      icon: Cpu,
      skills: [
        { name: "Bootstrap", color: "text-indigo-400" },
        { name: "Tailwind CSS", color: "text-blue-400" },
        { name: "Material-UI", color: "text-teal-300" },
        { name: "Axios", color: "text-gray-400" },
        { name: "Redux", icon: SiRedux, color: "text-purple-500" },
      ],
    },
    {
      title: "Soft Skills",
      icon: Award,
      skills: [
        { name: "Patience", color: "text-green-300" },
        { name: "Leadership", color: "text-yellow-300" },
        { name: "Problem-solving", color: "text-blue-300" },
        { name: "Teamwork", color: "text-red-300" },
        { name: "Positive Attitude", color: "text-pink-300" },
      ],
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#1E293B]" id="skills">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-6">
          Technical Skills
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mb-12 rounded-full"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
