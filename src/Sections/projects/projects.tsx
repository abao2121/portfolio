import styles from "./projects.module.css";

interface Props {
  title: string;
  technology: string;
  description: string;
  github: string;
}

const Project = ({ title, technology, description, github }: Props) => {
  return (
    <div className={styles.projectContainer}>
      <h2 className={styles.projectTitle}>{title}</h2>
      <p className="project-technology">
        <em>
          <strong>Technologies: {technology}</strong>
        </em>
      </p>
      {github && (
        <a
          href={github}
          className={styles.githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>GitHub</strong>
        </a>
      )}
      <p className="project-description">{description}</p>
    </div>
  );
};

export const MyProjects = () => {
  return (
    <div className={styles.allContainer}>
      <h2 className={styles.header}>Projects</h2>
      <div className={styles.border}></div>
      <Project
        title="C++ Synthesizer Simulator"
        technology="C++, PortAudio, SDL2, Dear ImGui"
        description="Built real-time wavetable synthesizer with keyboard-controlled note playback, stereo audio output, and sine/square/triangle oscillators. Implemented ADSR envelope shaping and parameter controls using Dear ImGui. Designed audio engine with PortAudio mixing active oscillators from SDL2 keyboard events."
        github="https://github.com/abao2121/synthesizer"
      />
      <Project
        title="Habit Tracker"
        technology="React Native, Expo, TypeScript"
        description="Built a mobile app to create habits, set weekly schedules, track daily progress, and view streaks. Used AsyncStorage for local data and Expo Notifications for daily reminders."
        github="https://github.com/abao2121/poco-habit-tracker"
      />
      <Project
        title="RISC-V Datapath CPU"
        technology="SystemVerilog, Vivado, FPGA"
        description="Built a 16-bit FPGA-based RISC-style processor datapath in SystemVerilog, integrating an ALU, register file, data memory, instruction decoder, instruction memory, program counter, and branch logic. Implemented signed two’s-complement arithmetic, load/store memory behavior, mux-controlled writeback, and branch-capable PC updates. Verified datapath modules with XSIM testbenches and validated hardware execution on a PYNQ-Z2 board using Xilinx VIO and seven-segment display output."
        github=""
      />
    </div>
  );
};
