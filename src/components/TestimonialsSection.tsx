import React from 'react';

const Counter: React.FC<{ end: number; label: string }> = ({ end, label }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const duration = 2000; // Animation duration in ms
    const increment = end / (duration / 16); // Approx 60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end]);

  return ( 
      <div className="text-center">
      <p className="text-5xl font-bold gradient-text">{count}+</p>
      <p className="text-sm text-white-600">{label}</p>
      </div>
  );
};

const InsightsSection: React.FC = () => {
  return (
    <section id="Insights" className="text-center mb-16">
      <h1 className="text-5xl mb-4">Our<span className="gradient-text"> Insights</span></h1>
      <p className="text-lg mb-6 text-white-600">From Global Ambitions to Industry Success: Our Impact in Numbers</p>
      <p className="text-md mb-6 text-white-500">Sri Lanka | Cambodia | Thailand</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <Counter end={12} label="Years on the market" />
        <Counter end={4} label="Offices and Delivery Centers" />
        <Counter end={500} label="Total Delivered" />
        <Counter end={30} label="Total Active Clients" />
      </div>
    </section>
  );
};

const testimonials = [
  {
    quote: "The Mobile DVR solution has transformed how we monitor our fleet. The HD cameras and cloud backup capabilities give us peace of mind and have significantly reduced incident disputes.",
    name: "Amal Perera",
    role: "Fleet Manager",
    company: "Amal Transport Services"
  },
  {
    quote: "Implementation was seamless and the support team has been exceptional. Our drivers feel more secure knowing the system is in place, and we've seen a notable improvement in safety metrics.",
    name: "Thusith Jayasinghe",
    role: "Operations Director",
    company: "Ceylon Nitrogen Limited"
  },
  {
    quote: "The integration with our existing GPS system was flawless. Having synchronized video and location data has been invaluable for our delivery documentation and customer service.",
    name: "Shan Ratnayake",
    role: "Technology Officer",
    company: "ELF Global Logistics"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="section bg-dark-900 relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-dark-950 to-transparent"></div>
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Client <span className="gradient-text">Testimonials</span></h2>
          <p className="text-gray-300 text-lg">
            Hear from organizations that have transformed their operations with our Mobile DVR solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="card relative"
            >
              <div className="absolute top-4 left-4 text-5xl text-primary-500 opacity-20">"</div>
              <p className="text-gray-300 mb-6 relative z-10">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                  <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                </div>
                <div className="ml-4">
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black-100">
      <InsightsSection />
      <TestimonialsSection />
    </div>
  );
};

export default App;