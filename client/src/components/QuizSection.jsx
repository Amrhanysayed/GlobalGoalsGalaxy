import React, { useState } from 'react';
import QuestionCard from './QuestionCard';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaArrowLeft, FaArrowRight, FaCheck } from 'react-icons/fa';

function QuizSection({ title , questions }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);
  const [shake, setShake] = useState(false);

  // To track correct answers after submission
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  const handleAnswerSelect = (index, answer) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[index] = answer;
    setSelectedAnswers(newAnswers);
  };

  const handleQuizSubmit = () => {
    if (!selectedAnswers.every(answer => answer !== null)) {
      // Trigger shake animation if not all questions are answered
      setShake(true);
      toast.error('Please answer all questions before submitting!');
      setTimeout(() => setShake(false), 500); // Stop shaking after 500ms
      return;
    }

    // Calculate the number of correct answers
    const correctCount = questions.reduce((count, question, index) => {
      return count + (selectedAnswers[index] === question.correctAnswer ? 1 : 0);
    }, 0);

    setCorrectAnswersCount(correctCount);
    setIsQuizSubmitted(true);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <div className="mt-8">
      <ToastContainer />
      <h2
        className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 ease-in-out hover:from-blue-500 hover:to-green-400 text-center"
      >
        {title}
      </h2>

      {/* Progress Bar */}
      <div className="relative flex justify-center items-center mt-6 mb-4 space-x-4">
        {questions.map((_, idx) => (
          <React.Fragment key={idx}>
            {idx === currentQuestionIndex ? (
              // Current question circle with gradient border
              <div className="relative z-10 w-10 h-10 p-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full">
                <div
                  className={`w-full h-full rounded-full flex items-center justify-center ${
                    isQuizSubmitted
                      ? selectedAnswers[idx] === questions[idx].correctAnswer
                        ? 'bg-green-500' // Correct answer
                        : 'bg-red-500' // Wrong answer
                      : selectedAnswers[idx] !== null
                      ? 'bg-slate-400' // Answered
                      : 'bg-slate-200' // Unanswered
                  }`}
                >
                  <span className="text-white">{idx + 1}</span>
                </div>
              </div>
            ) : (
              // Other circles
              <div
                className={`relative z-10 w-10 h-10 rounded-full border-4 transition-colors duration-500 ${
                  isQuizSubmitted
                    ? selectedAnswers[idx] === questions[idx].correctAnswer
                      ? 'bg-green-500 border-green-500' // Correct answer
                      : 'bg-red-500 border-red-500' // Wrong answer
                    : selectedAnswers[idx] !== null
                    ? 'bg-gray-700 border-gray-500' // Answered
                    : 'bg-slate-300 border-gray-300' // Unanswered
                } flex items-center justify-center`}
              >
                <span className="text-white">{idx + 1}</span>
              </div>
            )}

            {/* Connecting line between circles, but not after the last circle */}
            {idx !== questions.length - 1 && (
              <div className="w-10 h-1 bg-gray-300 z-0"></div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Quiz Container */}
      <div
        className={`flex flex-col lg:flex-row mt-0 p-6 rounded-lg transition-all duration-500 ${
          shake ? 'animate-shake border-red-500 border-4' : ''
        }`}
      >
        {/* Question Card or Results */}
        <div className="flex-1">
          {!isQuizSubmitted ? (
            <QuestionCard
              question={questions[currentQuestionIndex].question}
              options={questions[currentQuestionIndex].options}
              selectedAnswer={selectedAnswers[currentQuestionIndex]}
              onSelectAnswer={(answer) => handleAnswerSelect(currentQuestionIndex, answer)}
            />
          ) : (
            <div className="mt-0 p-4 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Quiz Results</h3>
              <div className="flex flex-wrap -mx-2">
                {questions.map((q, idx) => (
                  <div key={idx} className="w-full md:w-1/2 lg:w-1/3 px-2 mb-2">
                    <div
                      className={`p-4 rounded-lg shadow-md ${
                        selectedAnswers[idx] === q.correctAnswer
                          ? 'bg-green-100'
                          : 'bg-red-100'
                      }`}
                    >
                      <p className="font-semibold mb-2">
                        Question {idx + 1}: {q.question}
                      </p>
                      <p>
                        <strong>Your Answer:</strong> {q.options[selectedAnswers[idx]]}
                      </p>
                      <p>
                        <strong>Correct Answer:</strong> {q.options[q.correctAnswer]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Grade Display */}
              <div className="mt-6 text-2xl font-bold">
                Grade: {correctAnswersCount}/{questions.length}
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        {!isQuizSubmitted && (
          <div className="flex flex-col items-center lg:ml-8 mt-6 lg:mt-0">
            {currentQuestionIndex > 0 && (
              <button
                className={`btn btn-primary mb-4 flex items-center`}
                onClick={handlePrevQuestion}
              >
                <FaArrowLeft className="mr-2" />
                Previous Q
              </button>
            )}

            {currentQuestionIndex < questions.length - 1 && (
              <button
                className="btn btn-secondary bg-orange-600 mb-4 flex items-center border-0 hover:bg-orange-700"
                onClick={handleNextQuestion}
              >
                Next Q
                <FaArrowRight className="ml-2" />
              </button>
            )}

            {/* Submit Button */}
            <button
              className="mt-0 py-3 px-6 bg-green-500 text-white rounded-lg hover:bg-green-700 transition-all duration-300 flex items-center"
              onClick={handleQuizSubmit}
            >
              Submit Quiz
              <FaCheck className="ml-2" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizSection;
