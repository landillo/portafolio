import { techData, toolsData } from '../../helpers/techData';
import './Styles.css';

export const SkillsPage = () => {
  return (
    <>
      <section className="skills">
        <div className="skills-content">
          <h2>Tecnologías</h2>
          <div className="skills-icons">
            { techData.map(( tech, index) => (
              <div className='tech-stack' key={index}>
                <img src={ tech.icon } alt={ tech.name} />
                <span>{ tech.name }</span>
              </div>
            )) }
          </div>
          <h2>Herramientas</h2>
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
