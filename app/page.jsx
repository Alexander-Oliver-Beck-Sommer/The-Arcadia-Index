import ShortContent from "@/components/ShortContent/ShortContent";
import WideContent from "@/components/WideContent/WideContent";
import Image from "next/image";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <>
      <WideContent landmark="Banner">
        <div className={styles.home_banner_container}></div>
      </WideContent>
    </>
  );
}
