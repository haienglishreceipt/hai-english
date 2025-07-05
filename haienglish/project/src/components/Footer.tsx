import React from 'react';
import { Mail, Phone, Facebook, MapPin, GraduationCap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Hai English</span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Your trusted partner in English assessment and certificate training. 
              Empowering learners worldwide with quality education and internationally recognized certifications.
            </p>
            <p className="text-gray-400 text-sm">
              English Assessment and Certificate Provider
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#courses" className="text-gray-300 hover:text-white transition-colors">Courses</a></li>
              <li><a href="#bundles" className="text-gray-300 hover:text-white transition-colors">Bundle Promos</a></li>
              <li><a href="#success" className="text-gray-300 hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#director" className="text-gray-300 hover:text-white transition-colors">Our Director</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <a href="mailto:info@haienglish.net" className="text-gray-300 hover:text-white transition-colors">
                  info@haienglish.net
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+63 917 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Facebook className="h-5 w-5 text-blue-400" />
                <a
                  href="https://www.facebook.com/haienglish"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Facebook Page
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              Copyright © 2025 Hai English. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;