import profileImage from "../../assets/profile.png";
import "./About.css"

function About() {
  return (
    <section className="about">
        <div className="about-container">
            <div>
                <h2>Sobre mi</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, molestias, reprehenderit itaque amet aliquid repellendus dolor iure omnis quasi quos id odit nihil alias, nam labore voluptate expedita tempore cum.</p>
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
    </section>
  );
}

export default About;