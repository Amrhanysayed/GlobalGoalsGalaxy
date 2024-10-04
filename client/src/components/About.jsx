import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, BookOpen, PlayCircle } from 'lucide-react';

const benefits = [
  { 
    icon: Globe, 
    title: "Explore SDGs", 
    description: "Dive into all 17 Sustainable Development Goals through interactive and engaging content." 
  },
  { 
    icon: Users, 
    title: "Global Network", 
    description: "Connect and collaborate with educators and learners from around the world." 
  },
  { 
    icon: BookOpen, 
    title: "Resource Library", 
    description: "Access a comprehensive library of teaching resources tailored to each SDG." 
  },
  { 
    icon: PlayCircle, 
    title: "Multimedia Learning", 
    description: "Utilize various multimedia materials including videos, quizzes, and interactive activities." 
  }
];

const About = () => {
  const [hoveredBenefit, setHoveredBenefit] = useState(null);

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800" id='About'>
      <div className="container mx-auto py-20 px-4">
        <motion.h1 
          className="text-5xl font-bold text-center mb-6 text-indigo-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Global Goals Galaxy
        </motion.h1>
        <motion.p 
          className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Global Goals Galaxy is an innovative platform designed to make learning about the United Nations Sustainable Development Goals fun, engaging, and impactful for both educators and students.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative group"
          >
            <img 
              className="w-full h-auto rounded-lg shadow-2xl transition-transform duration-300 group-hover:scale-105" 
              src="https://activeforlife.com/img/large-webp/2014/08/mom-kids-sand.jpg"
              alt="Students collaborating on a global goals project"
            />
            {/* <div className="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div> */}
          </motion.div>
          <div className="space-y-8">
            <motion.h2 
              className="text-3xl font-semibold mb-6 text-indigo-700"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Discover the Benefits
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  onMouseEnter={() => setHoveredBenefit(index)}
                  onMouseLeave={() => setHoveredBenefit(null)}
                >
                  <benefit.icon 
                    className={`w-12 h-12 mb-4 ${hoveredBenefit === index ? 'text-indigo-600' : 'text-indigo-400'} transition-colors duration-300`} 
                  />
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;