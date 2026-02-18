import { Link } from "react-router-dom";
import styles from "./ThankYou.module.css";

const ThankYou = () => {
  return (
    <div className={styles.thankYouPage}>
      <div className={styles.thankYouCard}>
        <div className={styles.checkmark}>✓</div>
        <h1 className={styles.title}>Thank You!</h1>
        <p className={styles.text}>Your appointment has been booked successfully.</p>
        <p className={styles.subText}>
          We will get back to you shortly to confirm your appointment.
        </p>
        <Link to="/" className={styles.backButton}>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
