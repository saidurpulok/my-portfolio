import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          © 2024 Saidur Rahman Pulok. Get code{' '}
          <a href="https://github.com/saidurpulok" className={styles.link}>
            here.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
