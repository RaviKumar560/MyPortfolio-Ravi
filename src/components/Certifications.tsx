
import React from 'react';
import { Award } from 'lucide-react';

const CertificationCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="bg-[#2A3749] p-6 rounded-lg shadow-md border border-purple-500/20 hover:shadow-lg transition-all duration-300 group">
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
      description: "Participated in the prestigious competitive programming event organized by Coding Ninjas"
    },
    {
      title: "Java Program Training",
      description: "Certificate of successful completion"
    },
    {
      title: "Java Full Stack Web Development",
      description: "Successfully completed a comprehensive web development training program"
    },
    {
      title: "HTML Programming",
      description: "Earned from Great Learning"
    },
    {
      title: "Professional Accounting and Business Systems",
      description: "Completed a diploma focused on accounting and business system applications"
    }
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
