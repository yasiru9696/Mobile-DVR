import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Solution } from '../types';
import busImg from '/img/Bus.png';
import amilaImg from '/img/Truck.png';
import o2Img from '/img/Gas.png';
import schoolBusImg from '/img/School.png';

const solutions: Solution[] = [
  {
    title: "Public Transit Systems",
    description: "Enhance passenger safety and operational efficiency with comprehensive surveillance systems designed specifically for buses, trains, and other public transportation vehicles.",
    imageUrl: busImg
  },
  {
    title: "Commercial Fleet Management",
    description: "Monitor driver behavior, ensure cargo security, and document deliveries with our advanced Mobile DVR solutions tailored for logistics and delivery companies.",
    imageUrl: amilaImg
  },
  {
    title: "Emergency Services",
    description: "Support police operations with reliable evidence collection, real-time monitoring, and secure storage solutions that meet strict chain-of-custody requirements.",
     imageUrl: o2Img
  },
  {
    title: "School Transportation",
    description: "Ensure student safety with specialized Mobile DVR systems that provide clear monitoring of both interior and exterior environments for school buses.",
    imageUrl: schoolBusImg
  }
];

const SolutionsSection: React.FC = () => {
  return (
    <section id="solutions" className="section relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-dark-900 to-transparent"></div>
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Tailored <span className="text-primary-500">Solutions</span></h2>
          <p className="text-gray-300 text-lg">
            Our Mobile DVR systems are customized for specific industry needs, providing targeted security and operational benefits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={solution.imageUrl} 
                  alt={solution.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-medium mb-2">{solution.title}</h3>
                <p className="text-gray-300 mb-4 max-w-md">{solution.description}</p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors"
                >
                  Learn more <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;