import styles from "./Navbar.module.css";

interface NavItem {
  label: string;
  targetId: string;
}

const navLinks: NavItem[] = [
  { label: "About Me", targetId: "aboutme" },
  { label: "Experiences", targetId: "experiences" },
  { label: "Projects", targetId: "projects" },
];

export const Navbar = () => {
  return (
    <nav className={styles.navContainer}>
      <a className={styles.brand} href="home">
        Alan Bao
      </a>

      <ul className={styles.navListContainer}>
        {navLinks.map((link) => (
          <li key={link.targetId}>
            <a className={styles.label} href={`#${link.targetId}`}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
