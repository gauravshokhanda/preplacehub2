import React from 'react';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gray-900/50 backdrop-blur-sm lg:hidden">
      <div className="fixed right-0 top-0 h-full w-64 bg-white p-6 shadow-xl">
        <button onClick={onClose} className="absolute right-4 top-4 text-gray-500 hover:text-gray-700">
          <X className="h-6 w-6" />
        </button>
        <div className="mt-8 flex flex-col space-y-4">
          <a href="#home" onClick={onClose} className="text-lg font-medium text-gray-700 hover:text-indigo-600">Home</a>
          <a href="#about" onClick={onClose} className="text-lg font-medium text-gray-700 hover:text-indigo-600">About</a>
          <a href="#mentors" onClick={onClose} className="text-lg font-medium text-gray-700 hover:text-indigo-600">Mentors</a>
          <a href="#contact" onClick={onClose} className="text-lg font-medium text-gray-700 hover:text-indigo-600">Contact</a>
        </div>
      </div>
    </div>
  );
}