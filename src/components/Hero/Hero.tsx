import TypeIt from "typeit-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import DownloadCVButton from "../DownloadCVButton/DownloadCVButton";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="hero">

      <TypeIt
        options={{
          speed: 80,
          waitUntilVisible: true,
          cursor: true,
        }}
        className="hero-title"
      >
        <span className="hero-greeting">Hola, mi nombre es</span>
        <br />
        <span className="hero-name">Fernando </span>
      </TypeIt>

      <h2 className="hero__subtitle">
        Ingeniero en Informática
      </h2>

      <p className="hero__description">
        Construyo soluciones de software que combinan desarrollo, inteligencia artificial y análisis de datos para resolver problemas reales.
      </p>

      <div className="hero__social">

        <a
          href="https://github.com/FernandoBlancoTFL"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn github"
        >
          <FaGithub className="social-icon" />
        </a>

        <a
          href="https://www.linkedin.com/in/fernando-blanco4"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn linkedin"
        >
          <FaLinkedin className="social-icon" />
        </a>

        <DownloadCVButton />

      </div>

    </section>
  );
}

export default Hero;