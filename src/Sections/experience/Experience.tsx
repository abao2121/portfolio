import veeco from "./logos/veeco_black.png";
import nu_coe from "./logos/nu_coe_black.png";
import styles from "./Experience.module.css";

interface Experience {
  title: string;
  companyName: string;
  companyLink: string;
  description: string;
  logoPath: string;
}

const Experience = ({
  title,
  companyName,
  companyLink,
  description,
  logoPath,
}: Experience) => {
  return (
    <div className={styles.experienceContainer}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{title}</h2>
        <h3>
          <a
            className={styles.companyName}
            href={companyLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {companyName}
          </a>
        </h3>
        <p>{description}</p>
      </div>
      <a
        className={styles.logoContainer}
        href={companyLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className={styles.logo} src={logoPath} />
      </a>
    </div>
  );
};

export const MyExperiences = () => {
  return (
    <div className={styles.allContainer}>
      <h2 className={styles.header}> Experiences </h2>
      <div className={styles.border}></div>
      <Experience
        title="Software Engineer Co-op"
        companyName="Veeco Instruments"
        companyLink="https://www.veeco.com/"
        description="Developed C# application for validating and testing product configuration files, wrote tool communication contracts and implemented them in WCF and gRPC APIs, upgraded configuration files and set up tool PCs for customers"
        logoPath={veeco}
      />
      <Experience
        title="Undergraduate Researcher"
        companyName="Northeastern College of Engineering"
        companyLink="https://ece.northeastern.edu/"
        description="Deconstructing CNN machine learning models using Python Numpy in application to MNIST and GTSRB datasets, simulating power consumption profiles of analog machine learning circuit"
        logoPath={nu_coe}
      />
    </div>
  );
};
