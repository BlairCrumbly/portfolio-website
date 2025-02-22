import React from 'react'
import styles from '../styles/HeroStyles.css'
import heroImg from '../assets/hero-img.png'
import themeIcon from '../assets/sun.svg'
import githubIcon from '../assets/github-light.svg'
import linkedinIcon from '../assets/linkedin-light.svg'
import twitterinIcon from '../assets/twitter-light.svg'
import CV from '../assets/cv.pdf'

function Hero() {
  return (
    <section id='hero' className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroImg} alt="profile picture of Blair Crumbly" 
            />
            <img className={styles.colorMode} src={themeIcon} alt='Color Mode Icon'/>
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
                    <img src={twitterinIcon}></img>
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