import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
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
  const [copied, setCopied] = useState(false);
  const email = "blaircrumbly@gmail.com";
  const typedElement = useRef(null);

  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["Software Developer", "Collaborator", "Tech Enthusiast"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2500, // Delay before the text starts erasing (in milliseconds)
      startDelay: 1000,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

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
            Blair Crumbly
          </h1>
          <h2>
            <span ref={typedElement}></span>
          </h2>

          {/* ✅ Email Copy to Clipboard */}
          <p 
            className={styles.heroemail} 
            onClick={copyToClipboard} 
            style={{ cursor: "pointer" }}
          >


            {email}
          </p>
          {copied && <p style={{ color: "MediumSeaGreen", fontSize: "0.9rem" }}>Copied to clipboard!</p>}
          
          {/* Icons */}
          <span>
            <a href="https://github.com/BlairCrumbly" target="_blank">
              <img src={githubIcon} alt="Github icon" />
            </a>
            <a href="https://www.linkedin.com/in/blair-crumbly-36a317309/" target="_blank">
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
