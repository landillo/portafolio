import './Styles.css';
import profileImagen from '../../../assets/perfil.jpeg';
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

export const AboutMePage = () => {
  return (
    <section className="about-me">
      <div className="about-me-content">
        <div className="profile-section">
          <img src={profileImagen} alt="Avatar" className="avatar" />
          <h2>About Me</h2>

          <p className="links">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaMapMarkerAlt className="icon" /> México
            </a>
            |
            <a href="https://www.linkedin.com/in/orlandoledon/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon" /> LinkedIn
            </a>
            |
            <a href="https://github.com/landillo" target="_blank" rel="noopener noreferrer">
              <FaGithub className="icon" /> GitHub
            </a>
          </p>

          <p className="description">
            I’m a proactive <strong>Front-End Developer</strong> with over three years of hands-on experience 
            building scalable <strong>web and mobile applications</strong> using technologies like 
            <strong> React, Redux, TypeScript, and JavaScript (ES6+)</strong>.
          </p>

          <p className="description">
            I have solid experience developing and maintaining <strong>component-driven architectures</strong>, 
            improving performance, and ensuring seamless integration with <strong>RESTful APIs</strong>. 
            I’m passionate about writing clean, maintainable code and collaborating with 
            multidisciplinary teams to deliver high-quality user experiences.
          </p>

          <p className="description">
            Currently, I’m expanding my portfolio through <strong>freelance</strong> and 
            <strong> personal projects</strong> focused on React-based web applications, constantly 
            improving my craft and staying up to date with modern front-end trends.
          </p>
        </div>

        <div className="education-section">
          <h3>Education & Certifications</h3>
          <ul>
            <li>
              <strong>University of Colima</strong> — B.S. in Computer Systems Engineering (2007 – 2011)
            </li>
            <li>
              <strong>React: From Zero to Expert</strong> — Fernando Herrera, Udemy
            </li>
            <li>
              <strong>Modern JavaScript: Master the Language</strong> — Fernando Herrera, Udemy
            </li>
            <li>
              <strong>Professional Git & GitHub Course</strong> — Platzi
            </li>
            <li>
              <strong>Frontend Developer Practical Course</strong> — Platzi
            </li>
            <li>
              <strong>Python Without Borders</strong> — Nicolás Schurmann, Udemy
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
