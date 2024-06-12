import './Styles.css';

export const AboutMePage = () => {
  return (
    <>
      <section className="about-me">
      <div className="about-me-content">
        <div className="profile-section">
          <img src="../../../assets/perfil.jpeg" alt="Avatar" className="avatar" />
          <h2>About me</h2>
          <p>
            <a href="" target="_blank" rel="noopener noreferrer">México</a> |
            <a href="https://www.linkedin.com/in/orlandoledon/" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
            <a href="https://github.com/landillo" target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
          <p className="description">
            Soy un desarrollador frontend apasionado por la creación de aplicaciones web intuitivas y eficientes.
            Con experiencia en React, JavaScript, y CSS, me encanta transformar ideas en experiencias digitales impactantes.
          </p>
          <p className="description">
            Soy un desarrollador frontend apasionado por la creación de aplicaciones web intuitivas y eficientes.
            Con experiencia en React, JavaScript, y CSS, me encanta transformar ideas en experiencias digitales impactantes.
          </p>
        </div>
        <div className="education-section">
          <h3>Educación</h3>
          <ul>
            <li>
              <strong>Universidad De Colima</strong> - Ingeniería en Sistemas (2006-2011)
            </li>
            <li>
              <strong>React: De cero a experto</strong> - Fernando Herra, Udemy (2022)
            </li>
            <li>
              <strong>Curso de JavaScript</strong> - Udemy (2020)
            </li>
            {/* Agrega más elementos de educación según sea necesario */}
          </ul>
        </div>
      </div>
    </section>
    </>
  )
}
