import React from 'react';
import LevelMap from '../components/LevelMap';
import LayoutNavBar from '../components/LayoutNavBar';


function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-400 to-green-400 scroll-smooth">
      {/* Navbar */}
    <LayoutNavBar/>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Landing Section */}
        <section className="text-white pt-20">
          <div className="container mx-auto text-center">
            <h1 className="text-6xl font-bold mb-4">Welcome to GlobalGoalsGalaxy SDGs Journey !</h1>
            {/* Call to Action Button */}
          </div>
        </section>

        {/* Levels Section */}
        <section id="levels" className="pb-10">
          <div className="container mx-auto">
            <div className="my-10">
              <h2 className="text-3xl font-bold text-center mb-6 text-slate-100">Levels</h2>
              <p className="text-center text-lg mb-8 text-slate-100">
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
