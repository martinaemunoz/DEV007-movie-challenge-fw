import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About</h1>
      <p className="about-description">
        Streamix is a movie platform that provides access to a vast collection of movies, complete with reviews, movie lengths, and genres.
      </p>
      <p className="about-copyright">
        © 2023, Martina Muñoz. All rights reserved.
      </p>
      <div className="about-links">
        <a
          href="https://github.com/martinaemunoz"
          target="_blank"
          rel="noopener noreferrer"
          className="about-icon-git"
        >
          <FaGithub className="white-icon-git" />
        </a>
        <a
          href="https://www.linkedin.com/in/martina-mu%C3%B1oz-c/"
          target="_blank"
          rel="noopener noreferrer"
          className="about-icon"
        >
          <FaLinkedin className="white-icon" />
        </a>
      </div>
    </div>
  );
}

export default About;