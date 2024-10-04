import React from 'react';
import NavBar from '../components/NavBar';
import Landing from '../components/Landing';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';

function Home () {
    return (
        <>
        {/* <div className="bg-gray-800 min-h-screen flex items-center justify-center">
          <h1 className="text-center text-white font-bold text-4xl">
                Home Page
          </h1>
        </div> */}
        <NavBar/>
        <Landing/>
        <About/>
        <Services/>
        <Contact/>
        </>
    );
  };
  
export default Home;