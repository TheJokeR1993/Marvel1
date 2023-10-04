import { Link, useLocation } from "react-router-dom";
import styles from "./header.module.css";
const Header = () => {
  const location = useLocation();

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <span>Marvel</span> information portal
        </h1>

        <div>
          <Link
            className={location.pathname === "/" ? styles.active : styles.black}
            to="/"
          >
            Characters
          </Link>
          <b>/</b>
          <Link
            className={
              location.pathname === "/comics" ? styles.active : styles.black
            }
            to="/comics"
          >
            Comics
          </Link>
        </div>
      </header>
    </>
  );
};
export default Header;
