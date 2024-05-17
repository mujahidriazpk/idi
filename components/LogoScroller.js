// components/LogoScroller.js
import styles from './LogoScroller.module.css';

const logos = [
  '/img/logo1.png',
  '/img/logo2.png',
  '/img/logo3.png',
  '/img/logo4.png',
  '/img/logo5.png',
  '/img/logo6.png',
  '/img/logo7.png',
  // Add more logo paths as needed
];

const LogoScroller = () => {
  return (
    <div className="flex flex-col justify-center py-10">
    <div className={styles.scroller}>
      <div className={styles.scrollerInner}>
        {logos.map((logo, index) => (
          <div key={index} className={styles.logoContainer}>
            <img src={logo} alt={`Logo ${index + 1}`} className={styles.logo} />
          </div>
        ))}
        {logos.map((logo, index) => (
          <div key={index + logos.length} className={styles.logoContainer}>
            <img src={logo} alt={`Logo ${index + 1}`} className={styles.logo} />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};
export default LogoScroller;
