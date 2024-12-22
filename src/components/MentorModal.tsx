import React from 'react';
import { X, Briefcase, Building, Mail, Calendar } from 'lucide-react';

interface MentorModalProps {
  mentor: {
    name: string;
    role: string;
    company: string;
    image: string;
    linkedin?: string;
    github?: string;
    website?: string;
  } | null;
  onClose: () => void;
}

export default function MentorModal({ mentor, onClose }: MentorModalProps) {
  if (!mentor) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-6">
          <img
            src={mentor.image}
            alt={mentor.name}
            className="h-32 w-32 rounded-full object-cover md:h-48 md:w-48"
          />
          
          <div className="mt-6 text-center md:mt-0 md:text-left">
            <h3 className="text-2xl font-bold text-gray-900">{mentor.name}</h3>
            
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-center md:justify-start">
                <Briefcase className="mr-2 h-5 w-5 text-indigo-600" />
                <span className="text-gray-700">{mentor.role}</span>
              </div>
              
              <div className="flex items-center justify-center md:justify-start">
                <Building className="mr-2 h-5 w-5 text-indigo-600" />
                <span className="text-gray-700">{mentor.company}</span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-gray-900">About</h4>
              <p className="mt-2 text-gray-600">
                Experienced mentor specializing in {mentor.role.toLowerCase()} roles. 
                Helping candidates prepare for interviews at top tech companies.
              </p>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-gray-900">Expertise</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-600">
                  Technical Interviews
                </span>
                <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-600">
                  System Design
                </span>
                <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-600">
                  Career Growth
                </span>
              </div>
            </div>

            <button className="mt-8 w-full rounded-full bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700 md:w-auto">
              Schedule Session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}