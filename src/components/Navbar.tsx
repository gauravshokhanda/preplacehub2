import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-2">
            <Menu className="h-6 w-6 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">InterviewPro</span>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#home" className="text-sm font-medium text-gray-700 hover:text-indigo-600">Home</a>
            <a href="#about" className="text-sm font-medium text-gray-700 hover:text-indigo-600">About</a>
            <a href="#mentors" className="text-sm font-medium text-gray-700 hover:text-indigo-600">Mentors</a>
            <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-indigo-600">Contact</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
              Sign In
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden"
            >
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}