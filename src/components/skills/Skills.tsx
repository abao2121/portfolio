import styles from "./Skills.module.css";
import type { IconType } from "react-icons";
import { TbBrandCSharp } from "react-icons/tb";
import { SiCplusplus, SiTypescript } from "react-icons/si";
import { FaReact, FaPython } from "react-icons/fa";

interface Skill {
  icon: IconType;
  name: string;
}

interface VisibilityProp {
  visible: boolean;
}

const skills: Skill[] = [
  { name: "C#", icon: TbBrandCSharp },
  { name: "C++", icon: SiCplusplus },
  {name: "Python", icon: FaPython},
  { name: "TypeScript", icon: SiTypescript },
  {name: "React", icon: FaReact},
];

export const Skills = ({ visible }: VisibilityProp) => {
  return (
    <div className={`${styles.container} ${visible ? styles.visible : ""}`}>
      <div className={styles.logosContainer}>
        {skills.map((skill) => {
          const Icon = skill.icon;
          return <Icon className={styles.logo} />;
        })}
      </div>
    </div>
  );
};
