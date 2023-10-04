import { Link, useLocation } from "react-router-dom";
import styles from "./header-mobile.module.css";
import { useEffect, useState } from "react";
const HeaderMobile = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <span>Marvel</span> information portal
        </h1>
        <div
          className={styles.burger_button}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={!isOpen ? styles.menu_button : styles.menu_button_close}
          ></span>
        </div>
        {isOpen && (
          <div className={styles.burger_menu}>
            <Link
              className={
                location.pathname === "/" ? styles.active : styles.black
              }
              to="/"
            >
              Characters
            </Link>
            <Link
              className={
                location.pathname === "/comics" ? styles.active : styles.black
              }
              to="/comics"
            >
              Comics
            </Link>
          </div>
        )}
      </header>
    </>
  );
};
export default HeaderMobile;
