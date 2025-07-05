import React from 'react';
import { Globe, Award, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Your Global English Journey
            <span className="text-blue-600 block">Starts Here</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Unlock your potential with our comprehensive English assessment and certification programs. 
            Join thousands of successful graduates worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#courses"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Explore Courses
            </a>
            <a
              href="#bundles"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 shadow-lg border-2 border-blue-600"
            >
              View Bundle Promos
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Global Recognition</h3>
              <p className="text-gray-600">Accredited certificates accepted worldwide</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium Certificates</h3>
              <p className="text-gray-600">Hardcopy certificates with golden seal</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Open Access</h3>
              <p className="text-gray-600">All nationalities, no age limit</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;