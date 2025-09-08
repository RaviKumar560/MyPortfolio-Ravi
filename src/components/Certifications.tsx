import React from "react";
import { Award } from "lucide-react";

const CertificationCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
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
      <div className="flex items-center gap-3 mb-2">
        <Award className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
        <h3 className="font-semibold text-white">{title}</h3>
      </div>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
};

const Certifications = () => {
  const certifications = [
    {
      title: "Coding Ninja CodeKaze'24",
      description:
        "Participated in the prestigious competitive programming event organized by Coding Ninjas",
    },
    {
      title: "Java Program Training",
      description: "Certificate of successful completion",
    },
    {
      title: "Java Full Stack Web Development",
      description:
        "Successfully completed a comprehensive web development training program",
    },
    {
      title: "Employability Enhancement Program",
      description:
        "Skill-Empowering Program conducted by Centum Foundation, supported by Infosys Foundation",
    },
    {
      title: "HTML Programming",
      description: "Earned from Great Learning",
    },
    {
      title: "Professional Accounting and Business Systems",
      description:
        "Completed a diploma focused on accounting and business system applications",
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#1E293B]" id="certifications">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-white mb-6">
          Certifications
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mb-12 rounded-full"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={index}
              title={cert.title}
              description={cert.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
