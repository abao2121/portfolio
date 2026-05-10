interface IProject {
  title: string;
  description: string;
}

const Project = ({ title, description }: IProject) => {
  return (
    <div className="project-container">
      <h2 className="project-title">{title}</h2>
      <p className="project-description">{description}</p>
    </div>
  );
};

export const MyProjects = () => {
  return (
    <div className="MyProjects-container">
      <Project
        title="C++ Synthesizer Simulator"
        description="C++ object oriented keyboard synthesizer simulator from scratch, using keyboard inputs and tunable envelope parameters"
      />
    </div>
  );
};
