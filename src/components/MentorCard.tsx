import React from 'react';
import { LinkedinIcon, GithubIcon, ExternalLinkIcon } from 'lucide-react';

interface MentorProps {
  name: string;
  role: string;
  company: string;
  image: string;
  linkedin?: string;
  github?: string;
  website?: string;
  onClick?: () => void;
}

export default function MentorCard({ name, role, company, image, linkedin, github, website, onClick }: MentorProps) {
  return (
    <div 
      className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
      onClick={onClick}
    >
      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-4 h-32 w-32 overflow-hidden rounded-full border-4 border-indigo-100">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-sm text-indigo-600">{role}</p>
        <p className="mb-4 text-sm text-gray-600">{company}</p>
        
        <div className="flex space-x-4">
          {linkedin && (
            <a 
              href={linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-indigo-600"
              onClick={(e) => e.stopPropagation()}
            >
              <LinkedinIcon size={20} />
            </a>
          )}
          {github && (
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-indigo-600"
              onClick={(e) => e.stopPropagation()}
            >
              <GithubIcon size={20} />
            </a>
          )}
          {website && (
            <a 
              href={website} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-indigo-600"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLinkIcon size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}