import React from "react"
import styles from "./Skills.module.css";


const skillGroups = {
  Languages: ["Python", "SQL", "Rust", "JavaScript", "HTML", "CSS", "XML"],
  Libraries: ["NumPy", "Pandas", "MatPlotLib", "React"],
  Tools: ["MongoDB", "RShiny"]
};

export const Skills = () => (
  <section className={styles.skillsSection} aria-label="Technical Skills">
    <h2 className={styles.skillsTitle}>SKILLS</h2>
    <div className={styles.skillsGrid}>
      {Object.entries(skillGroups).map(([group, groupSkills]) => (
        <div key={group}>
          <h3 className={styles.skillGroupTitle}>{group}</h3>
          <ul className={styles.skillGroupList}>
            {groupSkills.map(skill => (
              <li className={styles.skillItem} key={skill}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);
