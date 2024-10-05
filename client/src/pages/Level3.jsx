import React from 'react';
import LayoutNavBar from '../components/LayoutNavBar';
import FloatingBackground from '../components/FloatingBackgroundFolder/FloatingBackground';
import Navigation from '../components/Navigation';
import CertificateImage from '../assets/Cert.png'; // 📌 Adjust the path to your certificate image

function Level3() {
  // 📌 Adjust the article content and project ideas below
  const projectIdeas = [
    {
      title: 'Sustainable Gardening App',
      description:
        'Develop a mobile application that assists users in creating and maintaining sustainable gardens. Features can include plant recommendations based on climate, watering reminders, and tips for composting.',
      source: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
      title: 'Community Health Initiative',
      description:
        'Initiate a project focused on improving community health through workshops, fitness programs, and nutritional guidance. Collaborate with local health professionals to provide valuable resources.',
      source: 'https://www.health.gov/',
    },
    {
      title: 'Educational VR Experiences',
      description:
        'Create virtual reality experiences that make learning more engaging. Topics can range from historical events to scientific phenomena, providing immersive educational tools for students.',
      source: 'https://www.vive.com/us/virtual-reality/',
    },
  ];

  const resources = [
    {
      name: 'NASA ARSET: Overview of SDG 15',
      link: 'https://www.youtube.com/watch?v=RsVEv0PboPI',
    },
    {
      name: 'ESA Sustainable Development Goals',
      link: 'https://sdg.esa.int/', 
    },
   
  ];

  return (
    <>
      <LayoutNavBar />
      {/* Wrap the entire content inside FloatingBackground */}
      <FloatingBackground>
        <div className="min-h-screen flex flex-col justify-center items-center p-4">
          {/* Main Content Container */}
          <div className="w-full max-w-6xl bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8 flex flex-col lg:flex-row">
            {/* Left Column: Article Section */}
            <div className="lg:w-2/3 w-full lg:pr-8">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Project Ideas and Inspirations</h2>
              <article className="text-gray-700 space-y-6">
                {projectIdeas.map((idea, index) => (
                  <section key={index}>
                    <h3 className="text-2xl font-semibold">{idea.title}</h3>
                    <p className="mt-2">{idea.description}</p>
                    <p className="mt-2">
                      <a
                        href={idea.source}
                        className="text-blue-500 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Learn more
                      </a>
                    </p>
                  </section>
                ))}
              </article>

              {/* 📌 New Section: Resources */}
              <div className="mt-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">Check Out these Resources:</h2>
                <ul className="list-disc list-inside space-y-2">
                  {resources.map((resource, index) => (
                    <li key={index}>
                      <a
                        href={resource.link}
                        className="text-blue-500 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {resource.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* 📌 End of Resources Section */}
            </div>

            {/* Right Column: Certificate Section */}
            <div className="lg:w-3/4 w-full flex flex-col items-center mt-8 lg:mt-0">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Certificate Example for Your Students</h2>
              <img
                src={CertificateImage}
                alt="Certificate"
                className="w-[1000px] h-[407px] rounded-lg shadow-md object-cover" // 📌 Adjusted image size to 1000px x 707px
              />
            </div>
          </div>

          {/* Navigation Buttons (Optional) */}
          <Navigation
            // 📌 Customize these handlers or remove them if not needed
            onNext={() => {/* Handle next action */}}
            onPrev={() => {/* Handle previous action */}}
            currentPage={0} // 📌 Adjust as needed
            totalPages={1} // 📌 Adjust as needed
          />
        </div>
      </FloatingBackground>
    </>
  );
}

export default Level3;
