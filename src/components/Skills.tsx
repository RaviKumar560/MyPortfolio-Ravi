import React from "react";
import {
  Code,
  Database,
  Wrench,
  Award,
  Server,
  Cpu,
  Sparkles,
} from "lucide-react";
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

const SkillChip = ({ skill }: { skill: any }) => {
  return (
    <span
      className="
        group/chip relative inline-flex items-center gap-2
        rounded-xl border border-white/10 bg-white/5
        px-4 py-2 text-sm font-medium text-gray-200
        shadow-md transition-all duration-300
        hover:-translate-y-[2px] hover:shadow-xl hover:shadow-purple-500/20
        hover:border-purple-400/40 hover:bg-purple-500/10
      "
    >
      {/* glow on hover */}
      <span className="pointer-events-none absolute -inset-8 opacity-0 group-hover/chip:opacity-100 transition-opacity duration-500">
        <span className="absolute inset-0 bg-[radial-gradient(circle,rgba(168,85,247,0.22)_0%,transparent_60%)]" />
      </span>

      {/* icon */}
      {skill.icon && (
        <skill.icon
          className={`w-6 h-6 ${skill.color} transition-transform duration-300 group-hover/chip:rotate-6 group-hover/chip:scale-110`}
        />
      )}

      <span className="relative">{skill.name}</span>
    </span>
  );
};

const SkillCategory = ({
  title,
  skills,
  icon: Icon,
  index,
}: {
  title: string;
  skills: any[];
  icon: any;
  index: number;
}) => {
  return (
    <div
      style={{ animationDelay: `${index * 110}ms` }}
      className="relative group animate-fade-up"
    >
      {/* outer glow */}
      <div className="pointer-events-none absolute -inset-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(168,85,247,0.20)_0%,transparent_58%)]" />
      </div>

      <div
        className="
          relative overflow-hidden rounded-2xl
          bg-[#2A3749] p-7 md:p-8
          border border-purple-500/30 shadow-lg
          transition-all duration-300
          hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/25 hover:border-purple-400
        "
      >
        {/* shimmer overlay */}
        <div
          className="
            pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
            before:absolute before:inset-0
            before:bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.06)_20%,transparent_40%)]
            before:translate-x-[-120%] group-hover:before:translate-x-[120%]
            before:transition-transform before:duration-700
          "
        />

        {/* header */}
        <div className="relative flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-4 min-w-0">
            <div
              className="
                shrink-0 rounded-xl border border-white/10 bg-white/5 p-3
                transition-all duration-300
                group-hover:scale-110 group-hover:bg-purple-500/10 group-hover:border-purple-400/40
              "
            >
              <Icon className="w-7 h-7 text-purple-400 transition-transform duration-300 group-hover:-rotate-6" />
            </div>

            <h3 className="text-xl font-semibold text-white tracking-tight truncate">
              {title}
            </h3>
          </div>

          <Sparkles className="w-5 h-5 text-purple-300/60 group-hover:text-purple-300 transition-colors duration-300" />
        </div>

        {/* chips */}
        <div className="relative flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <SkillChip key={i} skill={skill} />
          ))}
        </div>

        {/* bottom accent */}
        <div className="mt-7 h-[2px] w-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full transition-all duration-500 group-hover:w-full" />
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
        { name: "DSA", color: "text-yellow-400" },
        { name: "JavaScript", color: "text-yellow-400" },
        { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
        { name: "CSS3", icon: FaCss3, color: "text-blue-500" },
        { name: "C", color: "text-gray-300" },
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
        { name: "Angular", color: "text-blue-400" },
      ],
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
        { name: "Oracle", icon: SiOracle, color: "text-orange-600" },
        { name: "H2 (Testing)", color: "text-gray-300" },
      ],
    },
    {
      title: "Backend Technologies",
      icon: Server,
      skills: [
        { name: "JSE (JDBC, Servlet, JSP)", color: "text-gray-200" },
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
        { name: "Axios", color: "text-gray-300" },
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
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-6">
          Technical Skills
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mb-12 rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              index={index}
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
