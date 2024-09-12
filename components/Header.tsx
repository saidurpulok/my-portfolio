import { useState } from 'react';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>Saidur R. Pulok</div>
        
        {/* Hamburger menu */}
        <div className={styles.hamburger} onClick={toggleMenu}>
          ☰
        </div>

        {/* Navigation Links */}
        <ul className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#works">Works</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
