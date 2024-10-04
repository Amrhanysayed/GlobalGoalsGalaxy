import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const services = [
  { title: "Explore SDGs", description: "Dive into all 17 Sustainable Development Goals through interactive lessons and activities." },
  { title: "Global Collaboration", description: "Connect with educators and students worldwide to share ideas and best practices." },
  { title: "Resource Library", description: "Access a vast collection of teaching materials, lesson plans, and multimedia content." },
  { title: "Community Projects", description: "Participate in and initiate real-world projects that align with the SDGs." }
];

function Services  ()  {
  const [expandedService, setExpandedService] = useState(null);

  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20" id='Services'>
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-5xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h1>
        <motion.p 
          className="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At Global Goals Galaxy, we empower educators and students to explore the United Nations Sustainable Development Goals. Our platform offers engaging resources designed to make learning interactive and impactful.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img 
              className="w-full h-auto rounded-lg shadow-2xl" 
              src="https://i.ytimg.com/vi/zi-eh6oQ9Eg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBhpUtO0m3RL7N_7V9Zc81hC6AwEA"
              alt="Students collaborating on a project"
            />
          </motion.div>
          <div className="space-y-6">
            <motion.h2 
              className="text-3xl font-semibold mb-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Why Choose Global Goals Galaxy?
            </motion.h2>
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="bg-gray-700 rounded-lg overflow-hidden cursor-pointer"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <div 
                  className="p-4 flex justify-between items-center"
                  onClick={() => setExpandedService(expandedService === index ? null : index)}
                >
                  <h3 className="text-xl font-medium">{service.title}</h3>
                  <ChevronDown 
                    className={`transform transition-transform ${expandedService === index ? 'rotate-180' : ''}`} 
                  />
                </div>
                {expandedService === index && (
                  <motion.div 
                    className="p-4 bg-gray-600"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-300">{service.description}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;