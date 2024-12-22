import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">InterviewPro</h3>
            <p className="mb-4 text-sm">Helping candidates ace their dream job interviews through expert mentorship and practice.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-400"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-indigo-400"><Twitter size={20} /></a>
              <a href="#" className="hover:text-indigo-400"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-indigo-400">About Us</a></li>
              <li><a href="#" className="hover:text-indigo-400">Our Mentors</a></li>
              <li><a href="#" className="hover:text-indigo-400">Testimonials</a></li>
              <li><a href="#" className="hover:text-indigo-400">Blog</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-indigo-400">Mock Interviews</a></li>
              <li><a href="#" className="hover:text-indigo-400">Resume Review</a></li>
              <li><a href="#" className="hover:text-indigo-400">Career Guidance</a></li>
              <li><a href="#" className="hover:text-indigo-400">Interview Prep</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span>contact@interviewpro.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>123 Interview Street, SF, CA 94105</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} InterviewPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}