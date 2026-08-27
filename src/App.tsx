import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Hero3D from "./components/Hero3D";
import About from "./components/About/About";

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
        
      </main>
    </>
  );
}

export default App;