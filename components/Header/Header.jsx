"use client";
import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import Hamburger from "hamburger-react";
import ArcadiaLogo from "@/public/images/logo/arcadia-logo-gold.png";
import Image from "next/image";
import {
  GiCampingTent,
  GiTreasureMap,
  GiBookmarklet,
  GiFlyingFlag,
  GiWorld,
  GiDramaMasks,
  GiNewspaper,
} from "react-icons/gi";
import { usePathname } from "next/navigation";

const Header = () => {
  const currentRoute = usePathname();
  const [isToggled, setIsToggled] = useState(false);
  const NavigationMenu = (open) => {
    const nav = document.getElementById("nav-container");
    const overlay = document.getElementById("overlay");
    setIsToggled(open);
    if (open) {
      nav.classList.replace(styles.nav_closed, styles.nav_open);
      overlay.classList.replace(styles.overlay_closed, styles.overlay_open);
    } else {
      nav.classList.replace(styles.nav_open, styles.nav_closed);
      overlay.classList.replace(styles.overlay_open, styles.overlay_closed);
    }
  };

  useEffect(() => {
    NavigationMenu(false);
  }, []);

  return (
    <>
      <header className={styles.header_container}>
        <section className={styles.header_container__content_holder}>
          <Link
            href="/"
            aria-label="Return home"
            className={styles.header_container__content_holder__logo_block}
            onClick={() => NavigationMenu(false)}
          >
            <Image
              src={ArcadiaLogo}
              alt="Arcadia - Tale of the Cosmic Message"
            />
          </Link>
          <div
            className={styles.header_container__content_holder__hamburger_block}
          >
            <Hamburger
              direction="right"
              label="Show and hide menu"
              hideOutline={false}
              toggled={isToggled}
              onToggle={(toggled) => NavigationMenu(toggled)}
            />
          </div>
          <nav className={styles.header_container__content_holder__xl_nav}>
            <ul>
              <li>
                <Link
                  href="/"
                  alt="Return home"
                  className={currentRoute === "/" ? styles.active_link : ""}
                >
                  <GiCampingTent />
                </Link>
              </li>
              <li>
                <Link
                  href="/maps"
                  alt="Continue to Maps"
                  className={currentRoute === "/maps" ? styles.active_link : ""}
                >
                  <GiTreasureMap />
                </Link>
              </li>
              <li>
                <Link
                  href="/world"
                  alt="Continue to World"
                  className={
                    currentRoute === "/world" ? styles.active_link : ""
                  }
                >
                  <GiWorld />
                </Link>
              </li>
              <li>
                <Link
                  href="/factions"
                  alt="Continue to Factions"
                  className={
                    currentRoute === "/factions" ? styles.active_link : ""
                  }
                >
                  <GiFlyingFlag />
                </Link>
              </li>
              <li>
                <Link
                  href="/characters"
                  alt="Continue to Characters"
                  className={
                    currentRoute === "/characters" ? styles.active_link : ""
                  }
                >
                  <GiDramaMasks />
                </Link>
              </li>
              <li>
                <Link
                  href="/books"
                  alt="Continue to Books"
                  className={
                    currentRoute === "/books" ? styles.active_link : ""
                  }
                >
                  <GiBookmarklet />
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  alt="Continue to Blog"
                  className={currentRoute === "/blog" ? styles.active_link : ""}
                >
                  <GiNewspaper />
                </Link>
              </li>
            </ul>
          </nav>
        </section>
      </header>
      <div
        id="overlay"
        onClick={() => NavigationMenu(false)}
        className={styles.overlay_closed}
      ></div>
      <nav id="nav-container" className={styles.nav_closed}>
        <ul className={styles.content_holder}>
          <li>
            <Link
              href="/"
              alt="Return home"
              className={currentRoute === "/" ? styles.active_link : ""}
              onClick={() => NavigationMenu(false)}
            >
              <h3>Home</h3>
              <GiCampingTent size={26} />
            </Link>
          </li>
          <li>
            <Link
              href="/maps"
              alt="Continue to Maps"
              className={currentRoute === "/maps" ? styles.active_link : ""}
              onClick={() => NavigationMenu(false)}
            >
              <h3>Maps</h3>
              <GiTreasureMap size={26} />
            </Link>
          </li>
          <li>
            <Link
              href="/world"
              alt="Continue to World"
              className={currentRoute === "/world" ? styles.active_link : ""}
              onClick={() => NavigationMenu(false)}
            >
              <h3>World</h3>
              <GiWorld size={26} />
            </Link>
          </li>
          <li>
            <Link
              href="/factions"
              alt="Continue to Factions"
              className={currentRoute === "/factions" ? styles.active_link : ""}
              onClick={() => NavigationMenu(false)}
            >
              <h3>Factions</h3>
              <GiFlyingFlag size={26} />
            </Link>
          </li>
          <li>
            <Link
              href="/characters"
              alt="Continue to Characters"
              className={
                currentRoute === "/characters" ? styles.active_link : ""
              }
              onClick={() => NavigationMenu(false)}
            >
              <h3>Characters</h3>
              <GiDramaMasks size={26} />
            </Link>
          </li>
          <li>
            <Link
              href="/books"
              alt="Continue to Books"
              className={currentRoute === "/books" ? styles.active_link : ""}
              onClick={() => NavigationMenu(false)}
            >
              <h3>Books</h3>
              <GiBookmarklet size={26} />
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              alt="Continue to Blog"
              className={currentRoute === "/blog" ? styles.active_link : ""}
              onClick={() => NavigationMenu(false)}
            >
              <h3>Blog</h3>
              <GiNewspaper size={26} />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
