import ShortContent from "@/components/ShortContent/ShortContent";
import WideContent from "@/components/WideContent/WideContent";
import Image from "next/image";
import styles from "./Home.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <WideContent landmark="Banner">
        {/* <div className={styles.home_banner_container}>
          <div className={styles.home_banner_container__content}>
            <div className={styles.home_banner_container__content__text_box}>
              <p
                className={styles.home_banner_container__content__text_box__sub}
              >
                Welcome to the
              </p>
              <h1
                className={
                  styles.home_banner_container__content__text_box__title
                }
              >
                ARCADIA INDEX
              </h1>
              <div
                className={
                  styles.home_banner_container__content__text_box__paragraphs
                }
              >
                <p>
                  The <b>Arcadia Index</b> is a digital platform where it's made
                  easy to read and learn about the fictonal universe set in the
                  Arcadia novel series.
                </p>
                <p>
                  If you want to read the series, you can navigate to the{" "}
                  <Link href="/books" alt="Navigate to Books">
                    Books
                  </Link>{" "}
                  page.
                </p>
                <p>
                  Besides the entirety of the novel series, there is also a map
                  of the three planes of reality noted in the series and the
                  possibility to explore and read about locations on the{" "}
                  <Link href="/maps" alt="Navigate to Maps">
                    Maps
                  </Link>{" "}
                  page
                </p>
                <p>
                  Looking for other things? Then there are also{" "}
                  <Link href="/world" alt="Navigate to World">
                    World
                  </Link>
                  ,{" "}
                  <Link href="/characters" alt="Navigate to Characters">
                    Characters
                  </Link>{" "}
                  and{" "}
                  <Link href="/factions" alt="Navigate to Factions">
                    Factions
                  </Link>{" "}
                  sites.
                </p>
                <p>Hope you have a pleasant stay!</p>
              </div>
            </div>
          </div>
        </div> */}
      </WideContent>
    </>
  );
}
