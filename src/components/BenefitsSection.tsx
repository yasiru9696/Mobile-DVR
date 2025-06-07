import React from 'react';

const benefits = [
  "Increased safety and security",
  "Reduced operational costs",
  "Improved driver behavior",
  "Enhanced fleet management",
  "Protection against false claims"
];

const BenefitsSection: React.FC = () => {
  return (
    <section id="benefits" className="section bg-dark-900">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mb-4">
            Benefits of <span className="text-primary-500">Mobile DVR</span>
          </h2>
          <p className="text-White-300 text-lg">
            Investing in Mobile DVR technology offers a multitude of advantages for your fleet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start">
              <svg className="w-6 h-6 text-primary-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <p className="text-gray-300">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
