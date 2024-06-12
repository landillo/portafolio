import { NavBar } from './Components/NavBar/NavBar';
import { HomePage } from './Pages/HomePage/HomePage';
import { AboutMePage } from './Pages/AboutPage/AboutMePage';
import { ProjectsPage } from './Pages/ProjectsPage/ProjectsPage';
import { SkillsPage } from './Pages/SkillsPage/SkillsPage';
import { Footer } from './Components/footer/Footer';
import { Element } from 'react-scroll';
import './Styles.css';

export const PortafolioApp = () => {
  return (
    <>
      <NavBar />
      <div className='main-container' >
        <Element name='home' className='section' key="home">
          <HomePage />
        </Element>
        <Element name='about' className='section' key="about">
          <AboutMePage />
        </Element>
        <Element name='skills' className='section' key="skills">
          <SkillsPage />
        </Element>
        <Element name='projects' className='section' key="projects">
          <ProjectsPage />
        </Element>
      </div>
      <Footer />


    </>
  )
}
