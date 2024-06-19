// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';
import { useState } from 'react';
import './Styles.css';
import { ToggleSwitch } from '../ToggleSwitch/ToggleSwitch';


export const NavBar = () => {
  const [ menuOpen, setMenuOpen ] = useState(false);
  const navOffset = 0;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  };

  return (
      <nav className='nav'>
        <Link to="home" className="nav-name" smooth={true} duration={500}>
          <h2>Orlando Ledón</h2>
        </Link>
        <input type="checkbox" id="checkbox" className="checkbox" checked={menuOpen} onChange={toggleMenu} />
          <label htmlFor="checkbox" className="toggle">
            <div className="bars" id="bar1"></div>
            <div className="bars" id="bar2"></div>
            <div className="bars" id="bar3"></div>
          </label>
        <ul className={`nav-links ${ menuOpen ? 'open' : '' }`}>
          <li key="home"><Link to="home" className="nav-button" smooth={true} duration={500} offset={navOffset} onClick={closeMenu}>Home</Link></li>
          <li key="about"><Link to="about" className="nav-button" smooth={true} duration={500} offset={navOffset} onClick={closeMenu}>About</Link></li>
          <li key="contac"><Link to="skills" className="nav-button" smooth={true} duration={500} offset={navOffset} onClick={closeMenu}>Skills</Link></li>
          <li key="projects"><Link to="projects" className="nav-button" smooth={true} duration={500} offset={navOffset} onClick={closeMenu}>Projects</Link></li>
          <li><ToggleSwitch isDarkMode={isDarkMode} onToggle={handleToggle} className="toggle-switch"/></li>
        </ul>
        
      </nav>
  )
}
