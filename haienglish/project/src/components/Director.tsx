import React from 'react';
import { User, Download, Award, Calendar, MapPin, Phone, Mail, Globe } from 'lucide-react';

const Director: React.FC = () => {
  return (
    <section id="director" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Director
            </h2>
            <p className="text-xl text-gray-600">
              Leading our institution with expertise and passion for English education
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 mb-6">
                <div className="bg-white rounded-full p-6 w-32 h-32 mx-auto md:mx-0 mb-6 flex items-center justify-center shadow-lg">
                  <User className="h-16 w-16 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Abigail Estanislao</h3>
                <p className="text-lg text-gray-600 mb-4">Director & Senior Language Educator</p>
                
                <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    English Education Specialist
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Certified Trainer
                  </span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    Assessment Expert
                  </span>
                </div>

                {/* Contact Information */}
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-3">Contact Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-blue-600" />
                      <span className="text-gray-700">09196179234</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-green-600" />
                      <span className="text-gray-700">estanislaoabigail@yahoo.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Globe className="h-4 w-4 text-purple-600" />
                      <span className="text-gray-700">haienglish.net</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Professional Background</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Abigail Estanislao brings extensive experience in English language education and assessment. 
                  As the Director of Hai English, she oversees the development and delivery of comprehensive 
                  English certification programs that meet international standards and are ELQN accredited.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Under her leadership, Hai English has been recognized as the <strong>Most Affordable English Training Center in the Philippines</strong> 
                  by the Golden Globe Annual Awards for Business Excellence in both 2022 and 2023. Her commitment to accessible, 
                  high-quality education has made English certification available to learners worldwide.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Award className="h-5 w-5 text-yellow-500" />
                    <span className="font-semibold text-gray-900">Specializations</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• TEFL/TESOL Training</li>
                    <li>• English Assessment</li>
                    <li>• Curriculum Development</li>
                    <li>• International Accreditation</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="h-5 w-5 text-blue-500" />
                    <span className="font-semibold text-gray-900">Achievements</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• ELQN Accreditation</li>
                    <li>• Golden Globe Awards Winner</li>
                    <li>• International Recognition</li>
                    <li>• DFA Authentication Eligible</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Director's Message</h4>
                <p className="text-gray-700 italic">
                  "At Hai English, we believe that quality English education should be accessible to everyone. 
                  Our mission is to provide comprehensive, internationally recognized certification programs 
                  that empower individuals to achieve their personal and professional goals. With our ELQN accreditation 
                  and award-winning affordable programs, we are committed to excellence in education and supporting 
                  our students every step of the way. Your success is our pride, and your achievements will be 
                  featured in our Hall of Fame forever!"
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border-2 border-yellow-200">
                <h4 className="font-semibold text-gray-900 mb-2">Recognition & Awards</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-yellow-600" />
                    <span className="text-sm text-gray-700">Golden Globe Annual Awards for Business Excellence 2022 & 2023</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="h-5 w-5 text-blue-600" />
                    <span className="text-sm text-gray-700">ELQN International Accreditation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-700">Most Affordable English Training Center in the Philippines</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:estanislaoabigail@yahoo.com"
                  className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                  <Mail className="h-5 w-5" />
                  <span>Contact Director</span>
                </a>
                <a
                  href="https://www.facebook.com/haienglish"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 border-2 border-blue-600"
                >
                  <span>Visit Facebook Page</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Director;