import styles from "./Links.module.css";
import type { IconType } from "react-icons";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { GrDocumentUser } from "react-icons/gr";

interface Link {
  name: string;
  link: string;
  icon: IconType;
}

interface VisibilityProp {
  visible: boolean;
}

const skills: Link[] = [
  {
    name: "resume",
    icon: GrDocumentUser,
    link: "./src/documents/abao_resume.pdf",
  },
  {
    name: "linkedin",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/alan-bao-71166233a",
  },
  { name: "github", icon: IoLogoGithub, link: "https://github.com/abao2121" },
];

export const Links = ({ visible }: VisibilityProp) => {
  return (
    <div className={`${styles.container} ${visible ? styles.visible : ""}`}>
      <div className={styles.logosContainer}>
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <a
              className={styles.links}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className={styles.logo} />
            </a>
          );
        })}
      </div>
    </div>
  );
};
