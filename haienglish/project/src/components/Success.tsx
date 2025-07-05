import React from 'react';
import { Star, Quote, Facebook, ExternalLink } from 'lucide-react';

const Success: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'TEFL Graduate',
      country: 'United Kingdom',
      content: 'The TEFL course at Hai English completely transformed my teaching career. The curriculum is comprehensive and the support from instructors is exceptional.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Michael Chen',
      role: 'Business English Graduate',
      country: 'Singapore',
      content: 'Thanks to the Business English course, I was able to secure a promotion at my multinational company. The practical skills I learned are invaluable.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Maria Rodriguez',
      role: 'TESOL Graduate',
      country: 'Spain',
      content: 'The TESOL program exceeded my expectations. The course material is well-structured and the certificates are recognized internationally.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'David Thompson',
      role: 'Advanced English Graduate',
      country: 'Canada',
      content: 'As someone who needed to improve my English for academic purposes, this course was perfect. The instructors are knowledgeable and supportive.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  return (
    <section id="success" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join thousands of successful graduates who have transformed their careers and lives through our comprehensive English programs.
          </p>
          
          <div className="bg-blue-50 rounded-xl p-6 inline-block">
            <div className="flex items-center space-x-4">
              <Facebook className="h-6 w-6 text-blue-600" />
              <div className="text-left">
                <p className="text-gray-700 font-medium">For more inquiries and success stories:</p>
                <a
                  href="https://www.facebook.com/haienglish"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-1"
                >
                  <span>Visit our Facebook page</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-gray-500">{testimonial.country}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <Quote className="h-8 w-8 text-gray-300 mb-2" />
                <p className="text-gray-700 italic leading-relaxed">"{testimonial.content}"</p>
              </div>
              
              <div className="flex items-center space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl p-8 max-w-2xl mx-auto shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Ready to Start Your Success Story?
            </h3>
            <p className="text-gray-600 mb-6">
              Join our community of successful English learners and teachers. Take the first step towards achieving your goals today.
            </p>
            <a
              href="#courses"
              className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200"
            >
              Start Your Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success;