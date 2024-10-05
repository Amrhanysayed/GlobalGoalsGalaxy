import React, { useState } from 'react';
import NavBarS from '../components/NavBarS';
import VideoSection from '../components/VideoSection';
import QuizSection from '../components/QuizSection';
import ActivitySection from '../components/ActivitySection';
import Navigation from '../components/Navigation';
import FloatingBackground from '../components/FloatingBackgroundFolder/FloatingBackground';

import LayoutNavBar from '../components/LayoutNavBar';

function Level1() {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    // Level 1 Video
    <VideoSection
      videoUrl="https://www.youtube.com/watch?v=UCsJR6I1nKE"
      videoWidth={800}
      videoHeight={400}
      title="SDG 15 Life On Land"
    />,
    // Level 1 Quiz Questions
    <QuizSection
      title = "Quiz SDG 15: Life on Land"
      questions={[
        {
          question: 'What are the primary objectives of Goal 15: Life on Land?',
          options: ['Reducing carbon emissions and promoting renewable energy',
             'Protecting, restoring, and promoting the sustainable use of terrestrial ecosystems',
              'Ensuring universal education and healthcare', 
              'Enhancing global partnerships and economic growth'],
          correctAnswer: 1,
        },
        {
          question: 'Why are forests often referred to as the "lungs of the Earth"?',

          options: ['They provide shelter for animals',
             'They absorb carbon dioxide and release oxygen', 
             'They are a source of timber and paper', 
             'They regulate water cycles'],
          correctAnswer: 1,
        },
        {
            question: 'Which of the following is NOT listed as a challenge faced in achieving Goal 15?',

            options: ['Deforestation', 
                'Desertification',
                 'Biodiversity Loss', 
                 'Ocean Acidificatio'],
            correctAnswer: 2,
        },
        {
            question: 'What real-world example is mentioned in the script to illustrate severe ?',
            options: ['The Sahara Desert',
                 'The Amazon Rainforest',
                  'The Great Barrier Reef', 
                  'The Arctic Tundra'],
            correctAnswer: 1,
        },
        {
            question: 'Which of the following actions can individuals take to support Goal 15: Life on Land?',
            options:
                 ['Reducing waste and recycling materials',
                  'Increasing the use of single-use plastics',
                  'Ignoring environmental policies', 
                  'Avoiding participation in community events'],
            correctAnswer: 0,
        },
      ]}
    />,
    // Activity Section with GDevelop activity
<ActivitySection
  activityName="Global City Decision Making"
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