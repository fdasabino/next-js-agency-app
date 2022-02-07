import Link from "next/link";
import React from "react";
import styles from "../styles/components_styles/Navbar.module.css";
import { GiAvocado } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <h3 className={styles.logo}>
          AVOCAD
          <GiAvocado className={styles.logo_icon} />
        </h3>
      </Link>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/products/design">Design</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/development">Development</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/production">Production</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/photography">Photography</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
