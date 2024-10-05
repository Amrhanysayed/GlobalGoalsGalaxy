import React, { useState } from 'react';
import NavBarS from '../components/NavBarS';
import VideoSection from '../components/VideoSection';
import QuizSection from '../components/QuizSection';
import ActivitySection from '../components/ActivitySection';
import Navigation from '../components/Navigation';
import FloatingBackground from '../components/FloatingBackgroundFolder/FloatingBackground';
import LayoutNavBar from '../components/LayoutNavBar';

function Level2() {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    // Level 2 Video
    <VideoSection
      videoUrl="https://www.youtube.com/watch?v=_p_KD5DKiFg"
      videoWidth={800}
      videoHeight={400}
      title="SDG 3 Good Health"
    />,
    // Level 2 Quiz Questions
    <QuizSection
      title={"Quiz SDG 3: Good Health"}
      questions={[
        {
          question: 'What is the primary aim of Goal 3 - Good Health and Well-being?',
          options: ['To promote technological advancements in healthcare', 
            'To ensure healthy lives and promote well-being for all at all ages', 
            'To increase the number of hospitals worldwide', 
            'To reduce healthcare costs for governments'],
          correctAnswer: 1,
        },
        {
          question: 'Which of the following is NOT listed as a benefit of Good Health and Well-being?',
          options: [
            'Better life', 
            'Economic development', 
            'Reducing poverty', 
            'Increasing population growth'],
          correctAnswer: 3,
        },
        {
            question: 'Which of the following diseases is categorized as a communicable disease mentioned in the Video?',
            options: ['Heart disease',
               'Diabetes',
               'Malaria',
               'Cancer'],
            correctAnswer: 2,
        },
        {
            question: 'How did the COVID-19 pandemic highlight the importance of Goal 3?',
            options: [
                'By increasing global economic growth',
                'By demonstrating the need for strong health systems',
                'By reducing the need for vaccinations', 
                'By eliminating non-communicable diseases'],
            correctAnswer: 1,
        },
      ]}
    />,
    // Activity Section with GDevelop activity
    // TODO RENAME THE ACTIVITY NAME
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
      <LayoutNavBar/>
      {/* Wrap the entire content inside FloatingBackground */}
      <FloatingBackground>
        <div className="h-full flex flex-col justify-center items-center">
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

export default Level2;