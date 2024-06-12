// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';
import './Styles.css';


export const NavBar = () => {
  const navOffset = 0;
  return (
      <nav className='nav'>
        <Link to="home" className="nav-name" smooth={true} duration={500}>
          <h2>Orlando Ledón</h2>
        </Link>
        <ul className='nav-links'>
          <li key="home"><Link to="home" className="nav-button" smooth={true} duration={500} offset={navOffset}>Home</Link></li>
          <li key="about"><Link to="about" className="nav-button" smooth={true} duration={500} offset={navOffset}>About</Link></li>
          <li key="contac"><Link to="skills" className="nav-button" smooth={true} duration={500} offset={navOffset}>Skills</Link></li>
          <li key="projects"><Link to="projects" className="nav-button" smooth={true} duration={500} offset={navOffset}>Projects</Link></li>
        </ul>
      </nav>
  )
}
