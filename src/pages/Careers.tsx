import React from 'react';
import { Briefcase, GraduationCap, Globe } from 'lucide-react';

export function Careers() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Worried about your career?</h1>
        <p className="text-xl text-gray-600">Don't worry, we've got that for you!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Jobs */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105">
          <div className="p-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <Briefcase className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Open to Jobs</h3>
            <p className="text-gray-600 mb-6">
              Find your dream job in geography and related fields. Connect with top employers worldwide.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                GIS Specialist
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Environmental Consultant
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Urban Planner
              </li>
            </ul>
            <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Explore Jobs
            </button>
          </div>
        </div>

        {/* Internships */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105">
          <div className="p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <GraduationCap className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Open to Internships</h3>
            <p className="text-gray-600 mb-6">
              Gain valuable experience with leading organizations in the field of geography.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                Research Assistant
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                Field Surveyor
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                Climate Data Analyst
              </li>
            </ul>
            <button className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              Find Internships
            </button>
          </div>
        </div>

        {/* Freelancing */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105">
          <div className="p-8">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
              <Globe className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Open to Freelancing</h3>
            <p className="text-gray-600 mb-6">
              Work on exciting geography projects with clients from around the world.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                Cartographer
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                GIS Consultant
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                Geography Tutor
              </li>
            </ul>
            <button className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              Start Freelancing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}