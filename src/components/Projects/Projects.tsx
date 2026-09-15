import dataAnalysisImage from "../../assets/desktop.png";
import ecommerceImage from "../../assets/Frontpage.png";
import ScrollReveal from "../ScrollReveal";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">
      <section className="projects-container">
        <h2>Proyectos</h2>

        <ScrollReveal>
          <div className="project">
            <div className="project-info">
              <h3>Plataforma de análisis de datos con agentes de IA</h3>

              <p>
                Plataforma web para el análisis de datos mediante agentes de inteligencia artificial. 
                Permite explorar y obtener información a partir de conjuntos de datos utilizando lenguaje natural, 
                automatizando tareas de análisis 
                y facilitando la interpretación de resultados sin necesidad de realizar consultas manualmente.
              </p>
              <div className="project-technologies">
                <p>TECNOLOGÍAS</p>
                <span>Python</span>
                <span>FastAPI</span>
                <span>LangGraph</span>
                <span>PostgreSQL</span>
                <span>Next.js</span>
                <span>React</span>
                <span>Tailwind CSS</span>
              </div>
              <div className="project-buttons">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                      <span><FiExternalLink className="demo-icon" /> Demo</span>
                  </a>

                  <a href="#" target="_blank" rel="noopener noreferrer">
                      <span><FaGithub className="github-icon" /> Código</span>
                  </a>
              </div>
            </div>

            <div className="project-image">
              <img src={dataAnalysisImage} alt="Plataforma de análisis de datos" />
            </div>
          </div>
        
          <div className="project">
            <div className="project-info">
              <h3>E-commerce Full Stack</h3>

              <p>
                Aplicación web desarrollada para gestionar
                productos, usuarios y compras, con una arquitectura full stack que
                integra un backend desarrollado en .NET y una interfaz web construida
                con React.
              </p>

              <div className="project-technologies">
                <p>TECNOLOGÍAS</p>
                <span>C#</span>
                <span>.NET</span>
                <span>Entity Framework Core</span>
                <span>React</span>
                <span>SQL Server</span>
              </div>

              <div className="project-buttons">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                      <span><FiExternalLink className="demo-icon" /> Demo</span>
                  </a>

                  <a href="#" target="_blank" rel="noopener noreferrer">
                      <span><FaGithub className="social-icon" /> Código</span>
                  </a>
              </div>

            </div>

            <div className="project-image">
              <img src={ecommerceImage} alt="E-commerce Full Stack" />
            </div>
          </div>
        </ScrollReveal>
        
      </section>
    </section>
  );
}

export default Projects;