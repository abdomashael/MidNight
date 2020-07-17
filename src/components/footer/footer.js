import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.itemsConatiner}>
        <span className={styles.item}>
          <a href=""> الرئيسية</a>
        </span>
        <span className={styles.break}></span>
        <span className={styles.item}>
          <a href="">اتصل بنا</a>
        </span>
        <span className={styles.break}></span>
        <span className={styles.item}>
          <a href="">تطبيقات</a>
        </span>
        <span className={styles.break}></span>
        <span className={styles.item}>
          <a href="">اَخر اﻷخبار</a>
        </span>
        <span className={styles.break}></span>
        <span className={styles.item}>
          <a href="">الشروط وألاحكام</a>
        </span>
        <span className={styles.break}></span>
        <span className={styles.item}>
          <a href="">سياسة الخصوصية</a>
        </span>
      </div>
      <div className={styles.credit}>
        جميع الحقوق محفوظة لمجموعة © MBC Group 2020
      </div>
    </div>
  );
};

export default Footer;
