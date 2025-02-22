import styles from './SkillsStyles.module.css';
import SkillList from '../../common/SkillList';

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList skill="HTML" />
        <SkillList skill="CSS" />
        <SkillList skill="JavaScript" />
        <SkillList skill="Python" />
        <SkillList skill="Java" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList skill="React" />
        <SkillList skill="TypeScript" />
        <SkillList skill="Tailwind CSS" />
      </div>
      <hr />
      <div className={styles.skillList}>



      </div>
    </section>
  );
}

export default Skills;
