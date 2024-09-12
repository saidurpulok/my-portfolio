import Image from 'next/image';
import styles from '../styles/Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <Image
          src="/profile.jpg"
          alt="Profile Photo"
          className={styles.profilePhoto}
          width={150} // Default width, adjusts with responsive CSS
          height={150} // Default height, adjusts with responsive CSS
        />
        <h1 className={styles.heading}>Hey, I am Md. Saidur Rahman (Pulok).</h1>
        <h2 className={styles.subheading}>Research and AI Enthusiast</h2>
        <p className={styles.description}>
        Passionate about leveraging deep learning and artificial intelligence to solve real-world problems. 
        Explore my work, research, and projects to see how I blend cutting-edge technology with creative problem-solving.
        </p>
        <strong>🚧 This site is still under development.</strong>
      </div>
    </section>
  );
};

export default Hero;
