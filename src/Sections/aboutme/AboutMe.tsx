import { useState } from "react";
import profilePic from "./me-in-isec.jpg";
import { Skills } from "../../components/skills/Skills";
import { Links } from "../../components/links/Links";
import styles from "./AboutMe.module.css";

export const AboutMe = () => {
  const [skillsVisible, setSkillsVisible] = useState<boolean>(false);
  const [linksVisible, setLinksVisible] = useState<boolean>(false);

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
          <div onMouseLeave={() => setSkillsVisible(false)}>
            <div className={styles.hoverLabelsContainer}>
              <p
                onMouseEnter={() => setSkillsVisible(true)}
                className={styles.hoverLabel}
              >
                What I work with
              </p>
            </div>
            <Skills visible={skillsVisible} />
          </div>
        </div>
      </div>
      <div onMouseLeave={() => setLinksVisible(false)} className={styles.profilePicContainer}>
        <img onMouseEnter={() => setLinksVisible(true)} className={styles.profilePic} src={profilePic} />
        <Links visible={linksVisible} />
      </div>
    </div>
  );
};
