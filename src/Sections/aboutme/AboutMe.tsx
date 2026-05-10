import { useState } from "react";
import profilePic from "./me-in-isec.jpg";
import { Skills } from "../../components/skills/Skills";
import { Links } from "../../components/links/Links";
import styles from "./AboutMe.module.css";

export const AboutMe = () => {
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [linksVisible, setLinksVisible] = useState(false);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <div>
          <p className={styles.bio}>
            I'm a <strong>Computer Engineering</strong> &{" "}
            <strong>Computer Science</strong> student, interested in the
            intersection of hardware and high-level software. In my free time
            I'm also an amateur reader, runner, and oboist
          </p>
          <div
            onMouseEnter={() => setSkillsVisible(true)}
            onMouseLeave={() => setSkillsVisible(false)}
          >
            <p className={styles.hoverLabel}>
              <strong>
                <i>Hover here to view my skills</i>
              </strong>
            </p>
            <Skills visible={skillsVisible} />
          </div>
          <div
            onMouseEnter={() => setLinksVisible(true)}
            onMouseLeave={() => setLinksVisible(false)}
          >
            <p className={styles.hoverLabel}>
              <strong>
                <i>Hover here to view my links</i>
              </strong>
            </p>
            <Links visible={linksVisible} />
          </div>
        </div>
      </div>
      <div className={styles.profilePicContainer}>
        <img className={styles.profilePic} src={profilePic} />
      </div>
    </div>
  );
};
