import React from 'react';
import { motion } from 'framer-motion';
import { GoArrowRight } from "react-icons/go";
import { NavLink } from 'react-router-dom';
import YouTubeEmbed from './YouTubeEmbed';
import AnimatedButton from './AnimatedButton';
import { Globe, Book, Users } from 'lucide-react';

const features = [
  { icon: Globe, title: "Global Perspective", description: "Explore the UN's Sustainable Development Goals" },
  { icon: Book, title: "Interactive Learning", description: "Engage with fun and educational content" },
  { icon: Users, title: "Collaborative Platform", description: "Connect with students and educators worldwide" },
];

const Landing = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <section className="min-h-screen p-4 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-bold text-5xl md:text-7xl text-blue-600 mb-4 py-6 ">Global Goals Galaxy</h1>
          <p className="font-semibold text-xl md:text-2xl text-gray-700">Empowering students and educators for a better future</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-16">
          <motion.div 
            className="w-full lg:w-1/2 bg-white rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <YouTubeEmbed 
            // TODO put the Demo Link here
              id="https://www.youtube.com/watch?v=M-iJM02m_Hg" 
              width="100%"
              height={isMobile ? "200" : "350"} 
            />
          </motion.div>

          <motion.div 
            className="w-full lg:w-1/2 bg-white rounded-2xl shadow-xl p-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="font-bold text-3xl mb-4 text-indigo-600">United Nations Goals for Learning</h2>
            <p className="text-lg text-gray-700 mb-6">
              Global Goals Galaxy is your gateway to understanding and engaging with the United Nations Sustainable Development Goals. Our platform offers interactive learning experiences designed to inspire and educate.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <feature.icon className="w-8 h-8 text-indigo-500 mr-3" />
                  <div>
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <NavLink to="/layout">
            <AnimatedButton 
              text="Get Started" 
              icon={<GoArrowRight className="ml-2" />} 
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
            />
          </NavLink>
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;