import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Hero3D from "./components/Hero3D";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

import "./App.css";


function App() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero_section">
          <Hero />
          <Hero3D />
        </section>
        
        <About/>
        <Projects />
        
      </main>
    </>
  );
}

export default App;