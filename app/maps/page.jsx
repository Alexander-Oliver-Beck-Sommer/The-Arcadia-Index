import React from "react";
import meda from "@/data/header.json";
import ShortContent from "@/components/ShortContent/ShortContent";
import styles from "./maps.module.scss";
import CosmicKingdomThumbnail from "@/public/images/backgrounds/cosmic-kingdom-thumbnail.jpg";
import ArcadiaThumbnail from "@/public/images/backgrounds/arcadia-thumbnail.jpg";
import ClaymoreThumbnail from "@/public/images/backgrounds/claymore-thumbnail.jpg";
import Image from "next/image";

export const metadata = {
  title: meda.pages.maps.title,
  description: meda.pages.maps.title,
};

const Maps = () => {
  return (
    <section className={styles.map_selector_container}>
      <div className={styles.map_selector_container__positioner}>
        <div
          className={styles.map_selector_container__positioner__map_text_box}
        >
          <h2>Choose a Realm</h2>
        </div>
        <button
          className={styles.map_selector_container__positioner__map_select_box}
        >
          <Image src={CosmicKingdomThumbnail} alt="Hej" />
        </button>
        <button
          className={styles.map_selector_container__positioner__map_select_box}
        >
          <Image src={ArcadiaThumbnail} alt="Hej" />
        </button>
        <button
          className={styles.map_selector_container__positioner__map_select_box}
        >
          <Image src={ClaymoreThumbnail} alt="Hej" />
        </button>
      </div>
    </section>
  );
};

export default Maps;
