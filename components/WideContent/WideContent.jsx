import React from "react";
import styles from "./WideContent.module.scss";

const WideContent = ({ children, landmark }) => {
  if (!landmark) {
    throw new Error("Landmark name is mandatory for WideContent component! Declare landmark name with: landmark='landmark name here'");
  }

  return (
    <section className={styles.wide_content_component} aria-label={landmark}>
      <div className={styles.wide_content_component__content_holder}>
        {children}
      </div>
    </section>
  );
};

export default WideContent;
