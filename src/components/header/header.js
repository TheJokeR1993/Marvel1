import { Link, useLocation } from "react-router-dom";
import styles from "./header.module.css";
import {
  Button,
  Menu,
  MenuItem,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
