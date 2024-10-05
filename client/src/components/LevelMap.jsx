import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LevelMap = () => {
  const navigate = useNavigate();
  const levels = [
    {
      level: 1,
      name: 'Land',
      color: 'bg-green-500',
      objective: 'Navigate through the treacherous terrain and find the hidden path.',
    },
    {
      level: 2,
      name: 'Water',
      color: 'bg-blue-500',
      objective: 'Dive deep into the ocean and discover the sunken treasure.',
    },
    {
      level: 3,
      name: 'Final',
      color: 'bg-purple-500',
      objective: 'Conquer the ultimate challenge and claim your victory!',
    },
  ];

  // Initialize currentLevel from localStorage or default to 0
  const [currentLevel, setCurrentLevel] = useState(() => {
    const storedLevel = localStorage.getItem('currentLevel');
    const parsedLevel = parseInt(storedLevel, 10);
    // Ensure the stored level is within bounds
    if (!isNaN(parsedLevel) && parsedLevel >= 0 && parsedLevel <= levels.length) {
      return parsedLevel;
    }
    return 0;
  });

  const [showObjective, setShowObjective] = useState(false);

  // Effect to handle showing the objective modal
  useEffect(() => {
    if (currentLevel > 0 && currentLevel <= levels.length) {
      setShowObjective(true);
      const timer = setTimeout(() => setShowObjective(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [currentLevel, levels.length]);

  // Effect to sync currentLevel with localStorage
  useEffect(() => {
    if (currentLevel > 0 && currentLevel <= levels.length) {
      localStorage.setItem('currentLevel', currentLevel);
    } else {
      localStorage.removeItem('currentLevel');
    }
  }, [currentLevel, levels.length]);

  const handleLevelClick = (level) => {
    if (level <= currentLevel + 1) {
      setCurrentLevel(level);
      // Navigate only if the level is within bounds
      if (level > 0 && level <= levels.length) {
        navigate(`/layout/level${level}`);
      }
    }
  };

  const progressPercentage = ((currentLevel - 1) / (levels.length - 1)) * 100;

  const handleProgressOrRestart = () => {
    if (currentLevel === levels.length) {
      // Reset the game
      setCurrentLevel(0);
      setShowObjective(false);
    } else {
      // Progress to next level
      setCurrentLevel((prev) => Math.min(prev + 1, levels.length));
    }
  };

  return (
    <div className="relative w-full flex flex-col justify-center items-center overflow-hidden p-4">
      <div className="relative w-full max-w-3xl mx-auto mb-20">
        {/* Background progress bar */}
        <div className="absolute w-full h-4 bg-gray-700 top-1/2 transform -translate-y-1/2 rounded-full"></div>

        {/* Filled progress bar */}
        <motion.div
          className="absolute h-4 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 top-1/2 transform -translate-y-1/2 rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: `${progressPercentage}%` }}
          transition={{ duration: 0.5 }}
        ></motion.div>

        {levels.map((level, index) => (
          <motion.div
            key={level.level}
            className={`absolute top-1/2 transform -translate-y-1/2 w-24 h-24 rounded-full ${level.color} shadow-lg 
                            flex flex-col justify-center items-center cursor-pointer
                            transition-all duration-300 ease-in-out z-10 ${
                              index === 2 ? 'size-36' : ''
                            }`}
            style={{ left: `calc(${index * 50}% - ${index * 45}px)` }}
            initial={{ scale: 0.8, opacity: 0.5 }}
            animate={{
              scale: currentLevel >= level.level ? 1 : 0.8,
              opacity: currentLevel >= level.level ? 1 : 0.5,
            }}
            whileHover={{ scale: 1.1 }}
            onClick={() => handleLevelClick(level.level)}
          >
            <span className="text-2xl font-bold text-white">{level.level}</span>
            <span className="text-sm text-white">{level.name}</span>
            <MapPin size={18} className="text-white mt-1" />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {showObjective && currentLevel > 0 && currentLevel <= levels.length && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg p-6 max-w-md w-full relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={() => setShowObjective(false)}
              >
                <X size={24} />
              </button>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Level {currentLevel}: {levels[currentLevel - 1].name}
              </h2>
              <p className="text-lg text-gray-600">{levels[currentLevel - 1].objective}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        className="mt-10 px-6 py-3 bg-blue-500 text-white rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors"
        onClick={handleProgressOrRestart}
      >
        {currentLevel === 0
          ? 'Start'
          : currentLevel === levels.length
          ? 'Restart'
          : 'Progress to Next Level'}
      </button>
    </div>
  );
};

export default LevelMap;
