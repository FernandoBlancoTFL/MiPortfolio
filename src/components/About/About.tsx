import profileImage from "../../assets/profile.png";
import "./About.css"
<link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />

function About() {
  return (
    <section className="about">
        <div className="about-container">
            <div>
                <h2>Sobre mi</h2>
                <p>¡Hola! soy Fernando Blanco, <b>desarrollador fullstack</b> enfocado principalmente en el desarrollo Backend y aplicaciones web.</p>
                <p>Soy <b>Ingeniero en Informática</b> y continúo fortaleciendo mi perfil como desarrollador de software, incorporando nuevas tecnologías y buenas prácticas para crear soluciones eficientes.</p>
                <p>Algo que me define es que soy una persona comprometida, curiosa y orientada a la resolución de problemas. Busco seguir creciendo profesionalmente, asumir nuevos retos y formar parte de un equipo de desarrollo donde pueda aportar, aprender y continuar creciendo</p>
            </div>
            
            <div className="profile-image-content">
                <div className="profile-image">
                    <img
                        src={profileImage}
                        alt="Fernando Blanco"
                    />
                </div>
            </div>
        </div>
        <div className="techs">
            <div className="techs-frontend">
                <p>Frontend</p>
                <div className="techs-grid">
                    <div className="tech">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                    <span>HTML5</span>
                    </div>

                    <div className="tech">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                    <span>CSS3</span>
                    </div>

                    <div className="tech">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                    <span>JavaScript</span>
                    </div>

                    <div className="tech">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                    <span>TypeScript</span>
                    </div>

                    <div className="tech">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                    <span>React</span>
                    </div>

                    <div className="tech">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
                    <span>Tailwind CSS</span>
                    </div>
                </div>
            </div>
            <div className="techs-backend">
                <p>Backend</p>
                <div className="techs-grid">
                    <div className="tech">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" />
                    <span>C#</span>
                    </div>

                    <div className="tech">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" />
                    <span>.NET</span>
                    </div>

                    <div className="tech">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
                    <span>Java</span>
                    </div>

                    <div className="tech">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" />
                    <span>Spring Boot</span>
                    </div>

                    <div className="tech">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
                    <span>Python</span>
                    </div>

                    <div className="tech">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
                    <span>NodeJS</span>
                    </div>

                    <div className="tech">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />
                    <span>MySQL</span>
                    </div>
                    
                    <div className="tech">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
                    <span>PostgreSQL</span>
                    </div>
                </div>
            </div>
            <div className="techs-other">
                <p>Otros</p>
                <div className="techs-grid">
                    <div className="tech">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
                    <span>Git</span>
                    </div>

                    <div className="tech">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg" />
                    <span>Docker</span>
                    </div>

                    <div className="tech">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" />
                    <span>Postman</span>
                    </div>

                    <div className="tech">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
                    <span>Figma</span>
                    </div>

                    <div className="tech">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" />
                    <span>Jira</span>
                    </div>

                    <div className="tech">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" />
                    <span>Linux</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default About;