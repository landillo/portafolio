import React from 'react';
import './Styles.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const Footer = () => {
  const emailUser = "orlando.leso";
  const emailDomain = "gmail.com";
  const emailFull = `${emailUser}@${emailDomain}`;

  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="footer-icons">
          <a
            href="https://www.linkedin.com/in/orlandoledon/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon linkedin"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/landillo"
            target="_blank"
            rel="noopener noreferrer"
            className="icon github"
            title="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href={`mailto:${emailFull}`}
            className="icon email"
            title="Send me an email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="footer-center">
        <p className="footer-message">Built with ❤️ using React & Vite</p>
      </div>

      <div className="footer-right">
        <p className="footer-text">Copyright © {new Date().getFullYear()} Orlando Ledón</p>
      </div>
    </footer>
  );
};

// import React from 'react';
// import './Styles.css';

// export const Footer = () => (

//   <footer className="footer">
//     <div className="footer-content">
//       <ul>
//         <li><a href="mailto:your.email@example.com">name@mail.com</a></li>
//         <li><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a></li>
//         <li><a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
//       </ul>
//     </div>
//   </footer>
// );
