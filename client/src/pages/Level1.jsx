import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import VideoSection from '../components/VideoSection';
import QuizSection from '../components/QuizSection';
import ActivitySection from '../components/ActivitySection';
import Navigation from '../components/Navigation';
import FloatingBackground from '../components/FloatingBackgroundFolder/FloatingBackground';

function Level1() {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    // Level 1 Video
    <VideoSection
      videoUrl="https://www.youtube.com/watch?v=HLpP02TD6ek"
      videoWidth={800}
      videoHeight={400}
      title="Life On Land"
    />,
    // Level 1 Quiz Questions
    <QuizSection
      questions={[
        {
          question: 'What is biodiversity?',
          options: ['Option A', 'Option B', 'Option C', 'Option D'],
          correctAnswer: 0,
        },
        {
          question: 'How can we protect forests?',
          options: ['Option A', 'Option B', 'Option C', 'Option D'],
          correctAnswer: 1,
        },
        {
            question: 'How can we protect forests?',
            options: ['Option A', 'Option B', 'Option C', 'Option D'],
            correctAnswer: 1,
        },
        {
            question: 'How can we protect forests?',
            options: ['Option A', 'Option B', 'Option C', 'Option D'],
            correctAnswer: 1,
        },
      ]}
    />,
    // Activity Section with GDevelop activity
<ActivitySection
  activityName="Protecting Wildlife Activity"
  activityUrl="https://anas-ibrahem.github.io/GAME/"
/>,

  ];

  const nextPage = () => {
    if (currentPage < pages.length - 1) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <NavBar />
      {/* Wrap the entire content inside FloatingBackground */}
      <FloatingBackground>
        <div className="h-full flex flex-col justify-center items-center  ">
          <div className="p-0 m-0 w-full flex flex-col justify-center items-center">
            {pages[currentPage]}
          </div>
          <Navigation
            onNext={nextPage}
            onPrev={prevPage}
            currentPage={currentPage}
            totalPages={pages.length}
          />
        </div>
      </FloatingBackground>
    </>
  );
}

export default Level1;