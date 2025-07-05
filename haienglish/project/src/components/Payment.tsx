import React, { useState } from 'react';
import { CreditCard, Smartphone, Mail, Facebook, Copy, CheckCircle, Globe, DollarSign } from 'lucide-react';

const Payment: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const paymentDetails = [
    {
      method: 'GCash / Maya / Palawan Pay',
      icon: <Smartphone className="h-6 w-6" />,
      details: [
        { label: 'Mobile Number', value: '09196179234' },
        { label: 'Account Name', value: 'Abigail Estanislao' }
      ]
    },
    {
      method: 'BDO Bank Transfer',
      icon: <CreditCard className="h-6 w-6" />,
      details: [
        { label: 'Bank Name', value: 'BDO Unibank' },
        { label: 'Account Number', value: '000300451784' },
        { label: 'Account Type', value: 'Savings' },
        { label: 'Account Name', value: 'Abigail C. Estanislao' },
        { label: 'Branch', value: 'Manila 1008' }
      ]
    },
    {
      method: 'PayPal International',
      icon: <Globe className="h-6 w-6" />,
      details: [
        { label: 'PayPal Email', value: 'estanislaoabigail@yahoo.com' },
        { label: 'Account Name', value: 'Abigail Estanislao' }
      ]
    }
  ];

  const packagePricing = [
    { 
      name: 'WHOLE PACKAGE A', 
      price: '₱5,299', 
      courses: '4 Courses (TESOL, TEFL, TESL, TEYL) + 4 Hardcopy Certificates + 4 Medals + 1 Plaque',
      popular: true
    },
    { 
      name: 'WHOLE PACKAGE B', 
      price: '₱8,999', 
      courses: '6 Courses (TESOL, TEFL, TESL, TEYL, BE1, BE2) + 7 Hardcopy Certificates + 7 Medals + 2 Plaques',
      popular: false
    }
  ];

  const individualPricing = [
    { item: 'Individual Course', price: 'Contact for pricing' },
    { item: 'Hardcopy Certificate', price: '₱500 each' },
    { item: 'Medal', price: '₱200 each' },
    { item: 'Plaque', price: '₱999 each' },
    { item: 'Certified True Copy', price: '₱200 each' },
    { item: 'Softcopy Certificate', price: 'FREE' }
  ];

  const shippingRates = [
    { location: 'Within Metro Manila', fee: '₱100' },
    { location: 'Luzon', fee: '₱150' },
    { location: 'Visayas', fee: '₱200' },
    { location: 'Mindanao', fee: '₱300' },
    { location: 'Rush Shipping', fee: '₱300 + shipping fee' }
  ];

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="payment" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Payment Details
            </h2>
            <p className="text-xl text-gray-600">
              Simple and secure payment process for your course enrollment
            </p>
          </div>

          {/* Package Pricing */}
          <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Package Pricing</h3>
            <div className="grid lg:grid-cols-2 gap-6 mb-6">
              {packagePricing.map((pkg, index) => (
                <div key={index} className={`relative rounded-lg p-6 border-2 ${pkg.popular ? 'border-yellow-300 bg-gradient-to-br from-yellow-50 to-orange-50' : 'border-purple-300 bg-gradient-to-br from-purple-50 to-pink-50'}`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                    </div>
                  )}
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h4>
                  <p className="text-3xl font-bold text-blue-600 mb-3">{pkg.price}</p>
                  <p className="text-sm text-gray-600">{pkg.courses}</p>
                </div>
              ))}
            </div>

            {/* Individual Pricing */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Individual Item Pricing</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {individualPricing.map((item, index) => (
                  <div key={index} className="flex justify-between items-center bg-white p-3 rounded-lg">
                    <span className="text-gray-700 text-sm">{item.item}</span>
                    <span className="font-semibold text-gray-900 text-sm">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Shipping Rates */}
          <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Shipping Rates</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {shippingRates.map((rate, index) => (
                <div key={index} className="bg-blue-50 p-4 rounded-lg text-center border border-blue-200">
                  <p className="text-sm text-gray-600 mb-1">{rate.location}</p>
                  <p className="font-bold text-blue-600">{rate.fee}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-sm text-yellow-800">
                <strong>Rush Delivery:</strong> Need it today or tomorrow? Pay the rush fee of ₱300 plus shipping fee for same-day or next-day delivery via LBC or other couriers.
              </p>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {paymentDetails.map((payment, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-blue-100 rounded-lg p-3 text-blue-600">
                    {payment.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{payment.method}</h3>
                </div>
                
                <div className="space-y-3">
                  {payment.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex justify-between items-center bg-gray-50 rounded-lg p-3">
                      <div>
                        <p className="text-xs text-gray-600">{detail.label}</p>
                        <p className="font-semibold text-gray-900 text-sm">{detail.value}</p>
                      </div>
                      <button
                        onClick={() => copyToClipboard(detail.value, `${payment.method}-${detailIndex}`)}
                        className="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-200"
                      >
                        {copiedField === `${payment.method}-${detailIndex}` ? (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Payment Instructions
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-full p-2 text-blue-600 font-bold text-sm w-8 h-8 flex items-center justify-center">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Choose Your Payment Method</h4>
                  <p className="text-gray-600">Select from GCash/Maya/Palawan Pay, BDO Bank Transfer, or PayPal and use the account details provided above.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-full p-2 text-blue-600 font-bold text-sm w-8 h-8 flex items-center justify-center">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Complete Your Payment</h4>
                  <p className="text-gray-600">Transfer the course fee according to your selected package and take a screenshot of the transaction.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-full p-2 text-blue-600 font-bold text-sm w-8 h-8 flex items-center justify-center">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Send Payment Confirmation</h4>
                  <p className="text-gray-600 mb-4">Submit your payment screenshot through one of the following methods:</p>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Facebook className="h-5 w-5 text-blue-600" />
                        <span className="font-semibold text-gray-900">Facebook</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Send via Facebook Messenger</p>
                      <a
                        href="https://www.facebook.com/haienglish"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                      >
                        facebook.com/haienglish
                      </a>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Mail className="h-5 w-5 text-green-600" />
                        <span className="font-semibold text-gray-900">Email</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Send to our email address</p>
                      <a
                        href="mailto:info@haienglish.net"
                        className="text-green-600 hover:text-green-700 text-sm font-medium"
                      >
                        info@haienglish.net
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-full p-2 text-blue-600 font-bold text-sm w-8 h-8 flex items-center justify-center">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Enrollment Confirmation</h4>
                  <p className="text-gray-600">Our admin team will verify your payment and manually enroll you in your selected courses within 24 hours.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-full p-2 text-blue-600 font-bold text-sm w-8 h-8 flex items-center justify-center">
                  5
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Certificate Delivery</h4>
                  <p className="text-gray-600">Hardcopy certificates with golden seal will be shipped to your address. You'll receive tracking details for your shipment.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border-2 border-blue-200">
              <h4 className="font-bold text-gray-900 mb-3">🌟 Special Benefits:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✅ <strong>Lifetime Validity:</strong> No expiration on certificates</li>
                <li>✅ <strong>Hall of Fame:</strong> Your picture featured on our website forever</li>
                <li>✅ <strong>Ad Model Opportunity:</strong> You may be our next advertisement model</li>
                <li>✅ <strong>DFA Authentication:</strong> Certificates eligible for DFA authentication</li>
                <li>✅ <strong>International Recognition:</strong> ELQN accredited and globally accepted</li>
              </ul>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-sm text-yellow-800">
                <strong>Important Note:</strong> Please include your full name, contact number, complete address, and selected courses in your payment confirmation message. 
                This helps us process your enrollment and shipping quickly and accurately. All prices are in Philippine Pesos (₱).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;