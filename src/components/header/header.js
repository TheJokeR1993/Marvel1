import { Link, useLocation } from "react-router-dom";
import styles from "./header.module.css";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
const Header = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
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
        {(isOpen || !isMobile) && (
          <div className={isMobile ? styles.burger_menu : ""}>
            <Link
              className={
                location.pathname === "/" ||
                location.pathname.split("/")[1] === "charaster"
                  ? styles.active
                  : styles.black
              }
              to="/"
            >
              Characters
            </Link>
            <b>/</b>
            <Link
              className={
                location.pathname.split("/")[1] === "comics"
                  ? styles.active
                  : styles.black
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
export default Header;
