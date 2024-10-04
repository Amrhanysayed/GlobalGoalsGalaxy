import React from 'react';

function QuestionCard({ question, options, selectedAnswer, onSelectAnswer }) {
  return (
    <div className="p-4 border rounded-lg shadow-lg">
      <h3 className="text-2xl mb-4">{question}</h3>
      <div className="space-y-2">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelectAnswer(index)}
            className={`w-full py-2 px-4 bg-white border hover:bg-green-100 transition-all duration-300 ${
              selectedAnswer === index ? 'bg-green-200' : ''
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
