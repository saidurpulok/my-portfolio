import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';
import styles from '../styles/Contact.module.css';

const Contact: React.FC = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Get in Touch</h2>
        <p className={styles.text}>
          I’m always open to discussing new opportunities or collaborations. Feel free to reach out!
        </p>
        <div className={styles.socialLinks}>
          <a href="https://www.linkedin.com/in/mdsaidurrahmanpulok" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/saidurpulok" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://x.com/77pulok" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="mailto:saidurr13@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
