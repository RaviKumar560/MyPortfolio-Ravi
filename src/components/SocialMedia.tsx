
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const SocialMedia = () => {
  return (
    <div className="flex justify-center gap-6 py-8">
      <a
        href="https://github.com/yourgithub"
        target="_blank"
        rel="noopener noreferrer"
        className="text-secondary hover:text-primary transition-colors duration-300"
      >
        <Github className="w-6 h-6" />
      </a>
      <a
        href="https://linkedin.com/in/yourlinkedin"
        target="_blank"
        rel="noopener noreferrer"
        className="text-secondary hover:text-primary transition-colors duration-300"
      >
        <Linkedin className="w-6 h-6" />
      </a>
      <a
        href="mailto:ravikumar.tech.in@gmail.com"
        className="text-secondary hover:text-primary transition-colors duration-300"
      >
        <Mail className="w-6 h-6" />
      </a>
    </div>
  );
};

export default SocialMedia;
