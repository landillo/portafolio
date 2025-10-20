import './Styles.css';
import backgroundImage from '../../../assets/heroNew.svg';

export const HomePage = () => {
  return (
    <>
     <section className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container">
        <h1>Orlando Ledón</h1>
        <h2>Frontend Developer</h2>
        <div className="buttons">
          <a href="path_to_your_cv.pdf" download>Download CV</a>
          <a href="https://www.linkedin.com/in/orlandoledon/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/landillo" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </section>
    </>
  )
}
