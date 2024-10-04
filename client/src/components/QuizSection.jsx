import React, { useState } from 'react';
import QuestionCard from './QuestionCard';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function QuizSection({ questions }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);
  const [shake, setShake] = useState(false); // To handle the shake animation

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

  // Check if all questions are answered
  const allQuestionsAnswered = selectedAnswers.every(answer => answer !== null);

  return (
    <div className="my-8">
      <ToastContainer />
      <h2 
        className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 ease-in-out hover:from-blue-500 hover:to-green-400 text-center"
      >
        Quiz: Life on Land
      </h2>

      {/* Progress Bar */}
      <div className="relative flex justify-center items-center mt-6 mb-4 space-x-4">
        {questions.map((_, idx) => (
          <React.Fragment key={idx}>
            <div
              className={`relative z-10 w-10 h-10 rounded-full border-4 transition-colors duration-500 ${
                isQuizSubmitted
                  ? selectedAnswers[idx] === questions[idx].correctAnswer
                    ? 'bg-green-500 border-green-500' // Correct answer
                    : 'bg-red-500 border-red-500' // Wrong answer
                  : selectedAnswers[idx] !== null
                  ? 'bg-gray-500 border-gray-500' // Answered
                  : 'bg-white border-gray-300' // Unanswered
              } flex items-center justify-center`}
            >
              <span className="text-white">{idx + 1}</span>
            </div>

            {/* Connecting line between circles, but not after the last circle */}
            {idx !== questions.length - 1 && (
              <div className="w-10 h-1 bg-gray-300 z-0"></div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Quiz Container with Shake Animation, Fading Red Border, and Padding */}
      <div className={`space-y-8 mt-6 p-6 rounded-lg transition-all duration-500 ${shake ? 'animate-shake border-red-500 border-4' : ''}`}>
        {!isQuizSubmitted ? (
          <QuestionCard
            question={questions[currentQuestionIndex].question}
            options={questions[currentQuestionIndex].options}
            selectedAnswer={selectedAnswers[currentQuestionIndex]}
            onSelectAnswer={(answer) => handleAnswerSelect(currentQuestionIndex, answer)}
          />
        ) : (
          <div className="mt-8 p-4 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">Quiz Results</h3>
            {questions.map((q, idx) => (
              <div key={idx} className="mt-4">
                <p><strong>Question {idx + 1}:</strong> {q.question}</p>
                <p><strong>Your Answer:</strong> {q.options[selectedAnswers[idx]]}</p>
                <p><strong>Correct Answer:</strong> {q.options[q.correctAnswer]}</p>
              </div>
            ))}
            {/* Grade Display */}
            <div className="mt-4 text-2xl font-bold">
              Grade: {correctAnswersCount}/{questions.length}
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-4">
          <button
            className={`btn btn-primary ${currentQuestionIndex === 0 ? 'cursor-not-allowed opacity-50' : ''}`}
            onClick={handlePrevQuestion}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </button>

          {currentQuestionIndex < questions.length - 1 && (
            <button
              className="btn btn-secondary"
              onClick={handleNextQuestion}
            >
              Next
            </button>
          )}
        </div>

        {/* Submit Button (always visible, but under the navigation buttons) */}
        <div className="flex justify-center mt-4">
          <button
            className="mt-4 py-3 px-6 bg-green-500 text-white rounded-lg hover:bg-green-700 transition-all duration-300"
            onClick={handleQuizSubmit}
          >
            Submit Quiz
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuizSection;
