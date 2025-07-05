import React from 'react';
import { Package, Award, Medal, Trophy, FileText, Star, Crown } from 'lucide-react';

const Bundles: React.FC = () => {
  const bundles = [
    {
      name: 'WHOLE PACKAGE A',
      icon: <Crown className="h-8 w-8" />,
      gradient: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-gradient-to-br from-yellow-50 to-orange-50',
      borderColor: 'border-yellow-200',
      price: '₱5,299',
      originalNote: 'Most Popular Choice!',
      features: [
        '4 Courses (TESOL, TEFL, TESL, & TEYL)',
        '4 Softcopy Certificates (FREE)',
        '4 Hardcopy Certificates with GOLDEN Seal & Holder',
        '4 Personalized Medals 🥇',
        '1 Personalized Plaque (magandang pang display)'
      ],
      popular: true,
      savings: 'Save thousands compared to individual pricing!'
    },
    {
      name: 'WHOLE PACKAGE B',
      icon: <Trophy className="h-8 w-8" />,
      gradient: 'from-purple-400 to-pink-500',
      bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50',
      borderColor: 'border-purple-200',
      price: '₱8,999',
      originalNote: 'Premium Package',
      features: [
        '6 Courses (TESOL, TEFL, TESL, TEYL, BE1, BE2)',
        '7 Softcopy Certificates (FREE)',
        '7 Hardcopy Certificates with GOLDEN Seal & Holder',
        '7 Personalized Medals 🥇',
        '2 Personalized Plaques (magandang pang display)'
      ],
      popular: false,
      savings: 'Ultimate comprehensive package!'
    },
    {
      name: 'Individual Courses',
      icon: <Package className="h-8 w-8" />,
      gradient: 'from-blue-400 to-teal-500',
      bgColor: 'bg-gradient-to-br from-blue-50 to-teal-50',
      borderColor: 'border-blue-200',
      price: 'Custom Pricing',
      originalNote: 'Flexible Options',
      features: [
        'Choose any individual course',
        'Softcopy Certificate (FREE)',
        'Hardcopy Certificate: ₱500 each',
        'Medal: ₱200 each',
        'Plaque: ₱999 each',
        'Certified True Copy: ₱200 each'
      ],
      popular: false,
      savings: 'Build your own package!'
    }
  ];

  const shippingRates = [
    { location: 'Within Metro Manila', fee: '₱100' },
    { location: 'Luzon', fee: '₱150' },
    { location: 'Visayas', fee: '₱200' },
    { location: 'Mindanao', fee: '₱300' },
    { location: 'Rush Shipping', fee: '₱300 + shipping fee' }
  ];

  return (
    <section id="bundles" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Bundle Promotions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Save more with our specially designed bundle packages. Each package includes multiple courses 
            and premium certificates to accelerate your learning journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {bundles.map((bundle, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${bundle.bgColor} border-2 ${bundle.borderColor} hover:shadow-xl transition-shadow duration-300`}
            >
              {bundle.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>Most Popular</span>
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <div className={`bg-gradient-to-r ${bundle.gradient} rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center text-white`}>
                  {bundle.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {bundle.name}
                </h3>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {bundle.price}
                </div>
                <p className="text-sm text-gray-600 font-medium">{bundle.originalNote}</p>
                {bundle.savings && (
                  <p className="text-sm text-emerald-600 font-semibold mt-1">{bundle.savings}</p>
                )}
              </div>

              <div className="space-y-4 mb-8">
                {bundle.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <div className="bg-white rounded-full p-1 mt-1">
                      {feature.includes('Certificate') || feature.includes('Softcopy') ? (
                        <Award className="h-4 w-4 text-yellow-500" />
                      ) : feature.includes('Medal') ? (
                        <Medal className="h-4 w-4 text-blue-500" />
                      ) : feature.includes('Plaque') ? (
                        <Trophy className="h-4 w-4 text-purple-500" />
                      ) : feature.includes('Courses') ? (
                        <FileText className="h-4 w-4 text-green-500" />
                      ) : (
                        <Package className="h-4 w-4 text-gray-500" />
                      )}
                    </div>
                    <span className="text-gray-700 font-medium text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full bg-gradient-to-r ${bundle.gradient} text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity duration-200`}>
                Choose {bundle.name}
              </button>
            </div>
          ))}
        </div>

        {/* Shipping Information */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Shipping Information</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Shipping Rates</h4>
              <div className="space-y-3">
                {shippingRates.map((rate, index) => (
                  <div key={index} className="flex justify-between items-center bg-white p-3 rounded-lg">
                    <span className="text-gray-700">{rate.location}</span>
                    <span className="font-semibold text-gray-900">{rate.fee}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Delivery Details</h4>
              <div className="space-y-3 text-gray-600">
                <p>• <strong>Rush Delivery:</strong> Same day or next day delivery available</p>
                <p>• <strong>Courier Service:</strong> LBC and other trusted couriers</p>
                <p>• <strong>Tracking:</strong> You'll receive tracking details after shipment</p>
                <p>• <strong>Certificate Features:</strong> Hardcopy with Golden Seal & Holder</p>
                <p>• <strong>Validity:</strong> LIFETIME VALIDITY - NO EXPIRATION</p>
              </div>
            </div>
          </div>
        </div>

        {/* Special Features */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-200">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Special Benefits</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Hall of Fame</h4>
              <p className="text-gray-600 text-sm">Be featured on our Facebook page and website forever!</p>
            </div>
            <div className="text-center">
              <Trophy className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Ad Model Opportunity</h4>
              <p className="text-gray-600 text-sm">You may be our next advertisement model! 🥰</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Lifetime Validity</h4>
              <p className="text-gray-600 text-sm">All certificates have lifetime validity with no expiration</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl p-8 max-w-2xl mx-auto shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6">
              Choose your perfect package and start your English learning journey today. 
              Contact us for personalized recommendations and enrollment assistance.
            </p>
            <a
              href="#payment"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              View Payment Options
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bundles;