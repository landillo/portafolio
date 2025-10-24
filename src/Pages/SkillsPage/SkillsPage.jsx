import { techData, toolsData } from '../../helpers/techData';
import './Styles.css';

export const SkillsPage = () => {
  return (
    <>
      <section className="skills">
        <div className="skills-content">
          <p className="skills-description">
              These are the technologies and tools I use in my daily work to build fast, scalable, and modern applications.
          </p>
          <h2>Technologies</h2>
          <div className="skills-icons">
            { techData.map(( tech, index) => (
              <div className='tech-stack' key={index}>
                <img src={ tech.icon } alt={ tech.name} />
                <span>{ tech.name }</span>
              </div>
            )) }
          </div>
          <h2>Tools</h2>
          <div className="skills-icons">
            { toolsData.map(( tool, index) => (
              <div className='tech-stack' key={index}>
                <img src={ tool.icon } alt={ tool.name} />
                <span>{ tool.name }</span>
              </div>
            )) }
          </div>
        </div>
      </section>
    </>
  )
}
