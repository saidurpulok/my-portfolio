import styles from '../styles/Publications.module.css';

const Publications: React.FC = () => {
  return (
    <section id="works" className={styles.publications}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Research and Courseworks</h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            <strong className={styles.title}>To be added soon.</strong>
          </li>
          {/* <li className={styles.item}>
            <strong className={styles.title}>Publication One</strong>: Journal of XYZ, 2024
          </li>
          <li className={styles.item}>
            <strong className={styles.title}>Publication Two</strong>: Conference ABC, 2023
          </li> */}
        </ul>
      </div>
    </section>
  );
};

export default Publications;
