import React from 'react';
import { CheckCircle, Shield, Award, Globe, Trophy, Star } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Hai English
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We are a leading English assessment and certificate training provider with legitimate 
              <span className="font-bold text-blue-600"> INTERNATIONAL ACCREDITATION</span> dedicated to empowering 
              individuals worldwide with the language skills they need to succeed.
            </p>
          </div>

          {/* Awards and Recognition */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 mb-12 border-2 border-yellow-200">
            <div className="text-center mb-6">
              <Trophy className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Award-Winning Excellence</h3>
              <p className="text-lg text-gray-700">
                🏆 <strong>Golden Globe Annual Awards for Business Excellence</strong>
              </p>
              <p className="text-yellow-700 font-semibold">
                Most Affordable English Training Center in the Philippines
              </p>
              <div className="flex justify-center space-x-4 mt-2">
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">2022 Winner</span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">2023 Winner</span>
              </div>
            </div>
          </div>

          {/* ELQN Accreditation */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-12 border-2 border-blue-200">
            <div className="text-center mb-6">
              <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">International Accreditation</h3>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h4 className="text-xl font-semibold text-blue-600 mb-3">ELQN Accredited</h4>
                <p className="text-gray-700 mb-4">
                  ELQN is an international organisation committed to advancing e-learning and making a lasting, positive impact on society.
                </p>
                <a
                  href="https://elqn.org/verification-portal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  <Shield className="h-5 w-5" />
                  <span>Verify Our Accreditation</span>
                </a>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Hai English, we believe that language learning should be accessible, comprehensive, and 
                rewarding. Our expertly designed courses combine traditional teaching methods with modern 
                pedagogical approaches to ensure effective learning outcomes.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you're looking to teach English abroad, enhance your professional skills, or 
                improve your personal communication abilities, our programs are designed to meet your 
                specific needs and goals.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Eligibility & Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Open to All Nationalities</h4>
                    <p className="text-gray-600">No geographical restrictions - learn from anywhere in the world</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">No Age Limit</h4>
                    <p className="text-gray-600">Learning opportunities for students of all ages</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="h-6 w-6 text-yellow-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Premium Certificates</h4>
                    <p className="text-gray-600">Hardcopy certificates with golden seal - <strong>LIFETIME VALIDITY</strong></p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Globe className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">DFA Authentication Eligible</h4>
                    <p className="text-gray-600">Certificates eligible for Department of Foreign Affairs authentication</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="h-6 w-6 text-purple-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Hall of Fame Recognition</h4>
                    <p className="text-gray-600">Your picture will be featured on our website's Hall of Fame forever!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* International Partnership */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border-2 border-emerald-200">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">International Partnership</h3>
              <p className="text-lg text-gray-700 mb-4">
                ✨ We have recently tied up with an international entity, expanding our global reach and recognition.
              </p>
              <p className="text-emerald-700 font-semibold">
                Our certificates are locally and internationally accepted worldwide!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;