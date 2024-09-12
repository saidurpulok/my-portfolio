import styles from '../styles/About.module.css';

const About: React.FC = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.heading}>About Me</h2>
        <p className={styles.description}>
          I have completed my B.Sc. in Mechanical Engineering from Banlgadesh University of Engineering and Technology (BUET) in 2024. 
          I am a researcher with a passion for Deep Learning and Artificial Intelligence. 
          Currently I am working on different Deep Learning projects and trying to learn new things everyday.
        </p>
        <strong>🚧 This site is still under development.</strong>
      </div>
    </section>
  );
};

export default About;
