import React from 'react'
import styles from '../styles/HeroStyles.css'
import heroImg from '../assets/hero-img.png'
import sun from '../assets/sun.svg'
import moon from '../assets/moon.svg'
import githubLight from '../assets/github-light.svg'
import githubDark from '../assets/github-dark.svg'
import linkedinLight from '../assets/linkedin-light.svg'
import linkedinDark from '../assets/linkedin-dark.svg'
import twitterLight from '../assets/twitter-light.svg'
import twitterDark from '../assets/twitter-dark.svg'
import CV from '../assets/cv.pdf'
import {useTheme} from '../common/ThemeContext'

function Hero() {
    const {theme, toggleTheme} = useTheme ();
    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;



  return (
    <section id='hero' className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroImg} alt="profile picture of Blair Crumbly" 
            />
            <img className={styles.colorMode} src={themeIcon} alt='Color Mode Icon'
            onClick={toggleTheme}
            />
            
            </div>
            <div className={styles.info}>
            <h1>Blair
                <br/>
                Crumbly
                </h1>
                <h2>Software Developer</h2>
                <span>
                    <a href='https://www.linkedin.com/in/blair-crumbly-36a317309/' target='_blank'/>
                    <a href='https://github.com/BlairCrumbly' target='_blank'>
                    <img src={githubIcon}></img>
                    </a>

                    <a href='https://www.linkedin.com/in/blair-crumbly-36a317309/' target='_blank'>
                    <img src={linkedinIcon}></img>
                    </a>

                    <a href='https://www.linkedin.com/in/blair-crumbly-36a317309/' target='_blank'>
                    <img src={twitterIcon}></img>
                    </a>
                </span>
                <p>With a passion for developing software and thinking outide of the box.</p>
                <a href = {CV} download>
                    <button className='hover'>
                    resume
                    </button>
                </a>
            </div>
    </section>
  )
}

export default Hero;