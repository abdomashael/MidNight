import React from "react";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.itemsConatiner}>
        <span className={styles.item}>
          <Link to="/">Home</Link>
        </span>
        <span className={styles.break}></span>
        <span className={styles.item}>
          <Link to="/">About us</Link>
        </span>
        <span className={styles.break}></span>
        <span className={styles.item}>
          <Link to="/">Terms & Condtuions</Link>
        </span>
        <span className={styles.break}></span>
        <span className={styles.item}>
          <Link to="/">Privacy</Link>
        </span>
      </div>
      <div className={styles.credit}>© All rights reserved to Night Watcher</div>
    </div>
  );
};

export default Footer;
