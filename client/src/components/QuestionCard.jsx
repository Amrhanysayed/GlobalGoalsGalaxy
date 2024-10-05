import React from 'react';
import { FaCheck } from 'react-icons/fa';

function QuestionCard({ question, options, selectedAnswer, onSelectAnswer }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">{question}</h3>
      <div className="space-y-2">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelectAnswer(index)}
            className={`w-full flex items-center justify-between px-4 py-2 text-lg border rounded-lg transition-colors duration-200 ${
              selectedAnswer === index
                ? 'bg-sky-500 text-white border-sky-700'
                : 'bg-gray-100 hover:bg-gray-200 border-gray-300'
            }`}
          >
            <span>{option}</span>
            {selectedAnswer === index && <FaCheck />}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
