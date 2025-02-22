import styles from "./NavBarStyles.module.css";
import { FaRegMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import { useTheme } from '../../common/ThemeContext';

function NavBar() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? <FaRegSun  size={24} /> : <FaRegMoon size={24} />;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

    return (
        <nav className={styles.navbar}>
            <div className={styles.themeToggle} onClick={toggleTheme}>{themeIcon}</div>
            <div className={styles.navContainer}> 
                <ul className={styles.navLinks}>
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>

    );
}

export default NavBar;
