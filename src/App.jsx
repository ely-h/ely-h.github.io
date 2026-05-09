import React from 'react';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import CustomCursor from './components/Layout/CustomCursor';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Experience from './components/Sections/Experience';
import Education from './components/Sections/Education';
import Skills from './components/Sections/Skills';
import Projects from './components/Sections/Projects';
import Hobbies from './components/Sections/Hobbies';
import Contact from './components/Sections/Contact';

function App() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <CustomCursor />
      <Navbar />
      <main className="flex-grow pt-20 px-6 max-w-6xl mx-auto w-full">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
