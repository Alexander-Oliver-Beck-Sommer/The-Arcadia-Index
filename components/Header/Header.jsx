import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header_container}>
      <section className={styles.header_container__content_holder}>
        <Link href="/" aria-label="" className={styles.header_container__content_holder__logo_block}><h3>The Hunter Wilhelm Index</h3></Link>
        <button className={styles.header_container__content_holder__hamburger_block}>B</button>
      </section>
    </header>
  );
};

export default Header;
