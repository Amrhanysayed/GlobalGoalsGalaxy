import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import VideoSection from '../components/VideoSection';
import QuizSection from '../components/QuizSection';
import ActivitySection from '../components/ActivitySection';
import Navigation from '../components/Navigation';
import FloatingBackground from "../components/FloatingBackgroundFolder/FloatingBackground";

function Level1() {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    // TODO LEVEL 1 VIDEO
    <VideoSection videoUrl="https://www.youtube.com/watch?v=HLpP02TD6ek" videoWidth={1000} videoHeight={500} title='Life On Land' />,
    // TODO LEVEL 1 QUIZ QUESTIONS
    <QuizSection
      questions={[
        { question: "What is biodiversity?", options: ["A", "B", "C", "D"], answer: "A" },
        { question: "How can we protect forests?", options: ["A", "B", "C", "D"], answer: "B" },
      ]}
    />,
    <ActivitySection activityContent="Write a short paragraph about how you can help protect wildlife in your community." />
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
        <div className="min-h-screen flex flex-col justify-center items-center">
          <div className="p-8 w-full flex flex-col justify-center items-center">
            {pages[currentPage]}
          </div>
          <Navigation onNext={nextPage} onPrev={prevPage} currentPage={currentPage} totalPages={pages.length} />
        </div>
      </FloatingBackground>
    </>
  );
}

export default Level1;
