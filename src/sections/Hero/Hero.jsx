import styles from './HeroStyles.module.css';
import heroImg from '../../assets/mypicturemain-removebg-preview (1).png';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';
import NavBar from "../NavBar/NavBar"; 

function Hero() {
  const { theme } = useTheme();

  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <>
      <NavBar />
      <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
          <img
            src={heroImg}
            className={styles.hero}
            alt="Profile picture of Blair Crumbly"
          />
        </div>
        <div className={styles.info}>
          <h1>
            Blair
            <br />
            Crumbly
          </h1>
          <h2>Software Developer</h2>
          <p className='heroemail'>BlairCrumbly@gmail.com</p>
          <span>
            <a href="https://github.com/" target="_blank">
              <img src={githubIcon} alt="Github icon" />
            </a>
            <a href="https://linkedin.com/" target="_blank">
              <img src={linkedinIcon} alt="Linkedin icon" />
            </a>
          </span>
          <p className={styles.description}>
            With a passion for developing modern React web apps for commercial businesses.
          </p>
          <a href={CV} download>
            <button className="hover">Resume</button>
          </a>
        </div>
      </section>
    </>
  );
}

export default Hero;
