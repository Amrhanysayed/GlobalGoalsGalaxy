import React from 'react';
import LayoutNavBar from '../components/LayoutNavBar';
import FloatingBackground from '../components/FloatingBackgroundFolder/FloatingBackground';
import Navigation from '../components/Navigation';
import CertificateImage from '../assets/Cert.png';
import { useNavigate } from 'react-router-dom';


function Level3() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/signup'); // Ensure this route exists in your React Router setup
  };

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

  const recommendedTools = [
    {
      name: 'NASA Worldview',
      link: 'https://worldview.earthdata.nasa.gov/',
      description:
        'An interactive interface that allows users to visualize satellite data for real-time Earth observation. Ideal for monitoring environmental changes, natural disasters, and climate phenomena.',
    },
    // You can add more tools here in the future
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
      {/* Wrap the entire content inside FloatingBackground with custom height */}
      <FloatingBackground height='140vh'>
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

              {/* 📌 New Section: Recommended Tools */}
              <div className="mt-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">Recommended Tools</h2>
                <ul className="list-disc list-inside space-y-4">
                  {recommendedTools.map((tool, index) => (
                    <li key={index}>
                      <a
                        href={tool.link}
                        className="text-blue-500 underline text-lg font-semibold"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {tool.name}
                      </a>
                      <p className="mt-1 text-gray-600">{tool.description}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 📌 New Section: Become a Volunteer */}
              <div className="mt-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">Become a Volunteer</h2>
                <p className="text-gray-700 mb-4">
                  Are you passionate about education and community development? Join us as a volunteer to enrich our site content and gain the opportunity to become a virtual teacher for our interactive classes. Your contribution can make a significant difference in creating a vibrant learning environment for students worldwide.
                </p>
                <button
                  onClick={handleSignUp}
                  className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition-colors duration-300"
                >
                  Sign Up Now
                </button>
              </div>
              {/* 📌 End of New Section */}

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
                className="w-[1000px] h-[407px] rounded-lg shadow-md object-cover" // 📌 Adjusted image size to 1000px x 407px
              />
            </div>
          </div>

          {/* Navigation Buttons (Optional) */}
          <Navigation
            onNext={() => {/* Handle next action */}}
            onPrev={() => {/* Handle previous action */}}
            currentPage={0} 
            totalPages={1} 
          />
          
        </div>
      </FloatingBackground>
    </>
  );
}

export default Level3;
