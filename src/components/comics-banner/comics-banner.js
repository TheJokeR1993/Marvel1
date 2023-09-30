import styles from "./comics-banner.module.css";
import avengers from "../images/Avengers.svg";
import avengersLogo from "../images/Avengers logo.svg";

const ComicsBanner = () => {
  return (
    <>
      <div className={styles.banner}>
        <img alt={avengers} src={avengers} />
        <div className={styles.banner_title}>
          <h3>New comics every week!</h3>
          <h2>Stay tuned!</h2>
        </div>

        <img alt={avengersLogo} src={avengersLogo} />
      </div>
    </>
  );
};
export default ComicsBanner;
