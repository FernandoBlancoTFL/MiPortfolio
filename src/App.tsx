import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Hero3D from "./components/Hero3D";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import StarBackground from "./components/StarBackground";
import { useEffect, useState } from "react";
import { ChevronDown, ArrowUp } from "lucide-react";

import "./App.css";


function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > window.innerHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <StarBackground />
      <Navbar />
      <main>
        <section className="hero_section" id="start">
          <Hero />
          <Hero3D />
          <a
            href="#about"
            className="scroll_indicator"
            aria-label="Desplazarse hacia abajo"
          >
            <ChevronDown />
            <ChevronDown />
            <ChevronDown />
          </a>
        </section>

        <About/>
        <Projects />
        <Contact/>
        <Footer/>
      </main>

      {showScrollTop && (
        <a
          href="#start"
          className="scroll_top"
          aria-label="Volver al inicio"
        >
          <ArrowUp />
        </a>
      )}
    </>
  );
}

export default App;