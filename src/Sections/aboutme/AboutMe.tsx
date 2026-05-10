import { useState } from "react";
import profilePic from "./me-in-isec.jpg";
import { Skills } from "../../components/skills/Skills";
import { Links } from "../../components/links/Links";
import styles from "./AboutMe.module.css";

export const AboutMe = () => {
  const [activePanel, setActivePanel] = useState<"skills" | "links" | null>(
    null,
  );

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
          <div onMouseLeave={() => setActivePanel(null)}>
            <div className={styles.hoverLabelsContainer}>
              <p
                onMouseEnter={() => setActivePanel("skills")}
                className={styles.hoverLabel}
              >
                My skills
              </p>
              <p
                onMouseEnter={() => setActivePanel("links")}
                className={styles.hoverLabel}
              >
                My links
              </p>
            </div>
            {activePanel === "skills" ? <Skills visible={true} /> : <></>}
            {activePanel === "links" ? <Links visible={true} /> : <></>}
          </div>
        </div>
      </div>
      <div className={styles.profilePicContainer}>
        <img className={styles.profilePic} src={profilePic} />
      </div>
    </div>
  );
};
