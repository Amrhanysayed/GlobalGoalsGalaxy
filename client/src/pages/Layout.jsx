import React from 'react';

import LevelMap from '../components/LevelMap';
import LayoutNavBar from '../components/LayOutNavBar';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-400 to-green-400 scroll-smooth">
      {/* Navbar */}
    <LayoutNavBar/>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Landing Section */}
        <section className="text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Welcome to Global Goals Galaxy</h1>
            <p className="text-xl mb-8">
              Your journey to explore the global goals starts here.
            </p>
            {/* Call to Action Button */}
            <a
              href="#levels"
              className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-full hover:bg-gray-200 transition"
            >
              Start Exploring
            </a>
          </div>
        </section>

        {/* Levels Section */}
        <section id="levels" className="py-10">
          <div className="container mx-auto">
            <div className="my-10">
              <h2 className="text-3xl font-bold text-center mb-6 text-slate-900">Levels</h2>
              <p className="text-center text-lg mb-8 text-slate-900">
                Increase your students' understanding of the lessons through beautiful levels that help them gain valuable skills. Start now!
              </p>
            </div>
            {/* Level Map Component */}
            <LevelMap />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-6">
        <div className="container mx-auto text-center">
          <p>
            Need support? Contact us at{' '}
            <a href="mailto:support@globalgoalsgalaxy.com" className="text-blue-400 hover:underline">
              support@globalgoalsgalaxy.com
            </a>
          </p>
          <p className="mt-2">&copy; {new Date().getFullYear()} Global Goals Galaxy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
