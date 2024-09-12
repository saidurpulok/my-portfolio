import styles from '../styles/Projects.module.css';

const Projects: React.FC = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Projects</h2>
        <div className={styles.projectGrid}>
          <div className={styles.projectCard}>
            <h3 className={styles.projectTitle}>To be added soon.</h3>
            <p className={styles.projectDescription}>
              Site still under development.
            </p>
          </div>
          <div className={styles.projectCard}>
            <h3 className={styles.projectTitle}>To be added soon.</h3>
            <p className={styles.projectDescription}>
              Site still under development.
            </p>
          </div>
        </div>
        <br></br>
        <strong>🚧 This site is still under development.</strong>
      </div>
    </section>
  );
};

export default Projects;
