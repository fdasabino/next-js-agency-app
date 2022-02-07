import React from "react";
import { GiAvocado } from "react-icons/gi";
import styles from "../styles/components_styles/Intro.module.css";
import Backdrop from "./Backdrop";

const Intro = () => {
  return (
    <div className={styles.container}>
      <Backdrop />
      <div className={styles.card}>
        <div className={styles.logo}>
          AVOCAD
          <GiAvocado className={styles.logo_icon} />
        </div>
        <h1 className={styles.title}>digital product agency</h1>
        <p className={styles.description}>Looking to more brand exposure?</p>
        <button className={styles.button}>discover</button>
      </div>
    </div>
  );
};

export default Intro;
