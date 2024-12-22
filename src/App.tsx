import React from 'react';
import { BookOpenCheck, Users, Sparkles } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TabSection from './components/TabSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import { tabs } from './data/tabs';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-b from-indigo-50 to-white px-6 pt-32 pb-20">
        <div className="text-center">
          <h1 className="mb-6 text-5xl font-bold text-gray-900">
            Master Your Next Interview
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
            Practice with industry experts and get personalized feedback to land your dream job.
          </p>
          <button className="rounded-full bg-indigo-600 px-8 py-3 text-lg font-medium text-white shadow-lg transition-all hover:bg-indigo-700">
            Start Practice Interview
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Why Choose Our Platform?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 rounded-full bg-indigo-100 p-4">
                <BookOpenCheck className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Real Interview Experience</h3>
              <p className="text-gray-600">
                Practice with actual interview questions from top companies
              </p>
            </div>
            <div className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 rounded-full bg-indigo-100 p-4">
                <Users className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Expert Mentors</h3>
              <p className="text-gray-600">
                Learn from professionals working at top tech companies
              </p>
            </div>
            <div className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 rounded-full bg-indigo-100 p-4">
                <Sparkles className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Personalized Feedback</h3>
              <p className="text-gray-600">
                Get detailed feedback to improve your interview skills
              </p>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />

      {/* Mentors Section */}
      <section id="mentors" className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-900">
            Meet Our Expert Mentors
          </h2>
          <p className="mb-12 text-center text-gray-600">
            Learn from professionals with years of experience at top companies
          </p>
          <TabSection tabs={tabs} />
        </div>
      </section>

      <ContactSection />

      {/* CTA Section */}
      <section className="bg-indigo-600 px-6 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-3xl font-bold">Ready to Ace Your Interview?</h2>
          <p className="mb-8 text-lg text-indigo-100">
            Join thousands of successful candidates who landed their dream jobs
          </p>
          <button className="rounded-full bg-white px-8 py-3 text-lg font-medium text-indigo-600 shadow-lg transition-all hover:bg-indigo-50">
            Get Started Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;