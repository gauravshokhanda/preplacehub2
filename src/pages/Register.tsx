import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../components/auth/AuthLayout';
import Input from '../components/auth/Input';
import FileUpload from '../components/auth/FileUpload';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'interviewee',
    resume: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
  };

  return (
    <AuthLayout 
      title="Create your account"
      subtitle={
        <>
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
            Sign in
          </Link>
        </>
      }
    >
      <form className="space-y-6" onSubmit={handleSubmit}>
        <Input
          label="Full name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />

        <Input
          label="Email address"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <Input
          label="Password"
          type="password"
          required
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />

        <Input
          label="Confirm password"
          type="password"
          required
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
        />

        <div>
          <label className="block text-sm font-medium text-gray-700">
            I want to be a
          </label>
          <div className="mt-2 space-y-4">
            <div className="flex items-center">
              <input
                id="role-interviewee"
                name="role"
                type="radio"
                checked={formData.role === 'interviewee'}
                onChange={() => setFormData({ ...formData, role: 'interviewee' })}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
              />
              <label htmlFor="role-interviewee" className="ml-3 block text-sm font-medium text-gray-700">
                Interviewee - I want to practice interviews
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="role-mentor"
                name="role"
                type="radio"
                checked={formData.role === 'mentor'}
                onChange={() => setFormData({ ...formData, role: 'mentor' })}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
              />
              <label htmlFor="role-mentor" className="ml-3 block text-sm font-medium text-gray-700">
                Mentor - I want to conduct interviews
              </label>
            </div>
          </div>
        </div>

        {formData.role === 'interviewee' && (
          <FileUpload
            label="Resume (Optional)"
            accept=".pdf,.doc,.docx"
            onChange={(file) => setFormData({ ...formData, resume: file })}
          />
        )}

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create account
        </button>
      </form>
    </AuthLayout>
  );
}