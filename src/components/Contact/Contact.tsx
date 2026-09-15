import ScrollReveal from "../ScrollReveal";
import "./Contact.css"

function Contact(){
    return (
        <section className="contact" id="contact">
            <ScrollReveal>
                <div className="contact-container">
                    <div>
                        <h2>Contacto</h2>
                    </div>
                    <div className="contact-container-2">
                        <div className="contact-card">
                            <div className="contact-card__icon">
                                📧
                            </div>

                            <div className="contact-card__content">
                                <h3>Email</h3>
                                <a href="mailto:fernando.blanco184@gmail.com">
                                    fernando.blanco184@gmail.com
                                </a>
                                <p>Contacto profesional</p>
                            </div>
                        </div>

                        <div className="contact-card">
                            <div className="contact-card__icon">
                                💼
                            </div>

                            <div className="contact-card__content">
                                <h3>LinkedIn</h3>
                                <a
                                    href="https://www.linkedin.com/in/fernando-blanco4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Fernando Blanco
                                </a>
                                <p>Conectemos profesionalmente</p>
                            </div>
                        </div>

                        <div className="contact-card">
                            <div className="contact-card__icon">
                                💻
                            </div>

                            <div className="contact-card__content">
                                <h3>GitHub</h3>
                                <a
                                    href="https://github.com/FernandoBlancoTFL"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    FernandoBlancoTFL
                                </a>
                                <p>Mirá mis proyectos y código</p>
                            </div>
                        </div>

                        <div className="contact-card">
                            <div className="contact-card__icon">
                                🚀
                            </div>

                            <div className="contact-card__content">
                                <h3>Disponibilidad</h3>
                                <span>Abierto a nuevas oportunidades</span>
                                <p>Disponible para nuevos desafíos</p>
                            </div>
                        </div>

                    </div>
                </div>
            </ScrollReveal>
        </section>
    )
}

export default Contact;