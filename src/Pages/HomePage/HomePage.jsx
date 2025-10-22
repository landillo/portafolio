import './Styles.css';
import backgroundImage from '../../../assets/heroNew.svg';
import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';

export const HomePage = () => {
  return (
    <>
     <section className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container">
        <h1>Orlando Ledón</h1>
        <h2>Frontend Developer</h2>
        <div className="buttons">
           <a
            href="https://www.linkedin.com/in/orlandoledon/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-button linkedin"
          >
            <FaLinkedin className="icon" />
          </a>
          <a
            href="https://github.com/landillo"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-button github"
          >
            <FaGithub className="icon" />
          </a>
          <a href="path_to_your_cv.pdf" download className="btn cv" aria-label="Download CV">
              <FaDownload className="icon" /> Download CV
          </a>
        </div>
      </div>
    </section>
    </>
  )
}
