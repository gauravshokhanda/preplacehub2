import React from 'react';
import { Target, Award, Clock } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">About Us</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            We're on a mission to help candidates succeed in their job interviews through expert mentorship and realistic practice sessions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <div className="mb-4 rounded-full bg-indigo-100 p-3 w-fit">
              <Target className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Our Mission</h3>
            <p className="text-gray-600">
              To empower job seekers with the skills and confidence needed to succeed in their dream job interviews.
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-lg">
            <div className="mb-4 rounded-full bg-indigo-100 p-3 w-fit">
              <Award className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Our Expertise</h3>
            <p className="text-gray-600">
              Our mentors bring years of experience from top companies and have helped thousands of candidates succeed.
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-lg">
            <div className="mb-4 rounded-full bg-indigo-100 p-3 w-fit">
              <Clock className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Our Approach</h3>
            <p className="text-gray-600">
              We provide personalized feedback and realistic mock interviews tailored to your target role and company.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}