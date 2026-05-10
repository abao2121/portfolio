import { useState } from "react";
import profilePic from "./me-in-isec.jpg";
import { Skills } from "../../components/skills/Skills";
import { Links } from "../../components/links/Links";
import styles from "./AboutMe.module.css";

export const AboutMe = () => {
  const [skillsVisible, setSkillsVisible] = useState(true);
  const [linksVisible, setLinksVisible] = useState(true);
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
          <div>
            <p className={styles.hoverLabel}>
              <strong>
                <i>My skills</i>
              </strong>
            </p>
            <Skills visible={skillsVisible} />
          </div>
          <div>
            <p className={styles.hoverLabel}>
              <strong>
                <i>My links</i>
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
