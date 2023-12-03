import styles from "./NoMatch.module.scss";
import { Link } from "react-router-dom";
const NoMatch = () => {
  return (
    <div style={{ color: "#fff", textAlign: "center" }}>
      <h1>Ooops!! Something went wrong. Go back to Earth</h1>
      <h1>Page not found</h1>
      <div className={styles.lighthouse}>
        <div className={styles.triangle}></div>
        <div className={styles.rectangle}></div>
        <div className={styles.trapezoid}></div>
        <div className={styles.door}></div>
        <div className={styles.light}></div>
      </div>
      <Link to={"/"}>Go Back</Link>
    </div>
  );
};

export default NoMatch;
