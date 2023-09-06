import React from "react";
import styles from "./ShortContent.module.scss";

const ShortContent = ({ children, landmark }) => {
  if (!landmark) {
    throw new Error("Landmark name is mandatory for ShortContent component! Declare landmark name with: landmark='landmark name here'");
  }

  return (
    <section className={styles.short_content_component} aria-label={landmark}>
      <div className={styles.short_content_component__content_holder}>
        {children}
      </div>
    </section>
  );
};

export default ShortContent;
