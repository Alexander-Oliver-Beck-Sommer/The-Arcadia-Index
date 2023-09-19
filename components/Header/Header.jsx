"use client";
import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import Hamburger from "hamburger-react";
import ArcadiaLogo from "@/public/images/logo/arcadia-logo-gold.png";
import Image from "next/image";
import data from "@/data/header.json";
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

  const pages = [
    { icon: GiCampingTent, ...data.pages.home },
    { icon: GiTreasureMap, ...data.pages.maps },
    { icon: GiWorld, ...data.pages.world },
    { icon: GiFlyingFlag, ...data.pages.factions },
    { icon: GiDramaMasks, ...data.pages.characters },
    { icon: GiBookmarklet, ...data.pages.books },
    { icon: GiNewspaper, ...data.pages.blog },
  ];

  return (
    <>
      <header className={styles.header_container}>
        <section className={styles.header_container__content_holder}>
          <Link
            href={data.pages.home.path}
            aria-label={data.pages.home.aria}
            className={styles.header_container__content_holder__logo_block}
            onClick={() => NavigationMenu(false)}
          >
            <Image priority src={ArcadiaLogo} alt={data.logo.alt} />
          </Link>
          <div
            className={styles.header_container__content_holder__hamburger_block}
          >
            <Hamburger
              direction="right"
              label={data.hamburger.label}
              hideOutline={false}
              toggled={isToggled}
              onToggle={(toggled) => NavigationMenu(toggled)}
            />
          </div>
          <nav className={styles.header_container__content_holder__xl_nav}>
            <ul>
              {pages.map(({ path, aria, icon: Icon }, index) => (
                <li key={index}>
                  <Link
                    href={path}
                    aria-label={aria}
                    className={currentRoute === path ? styles.active_link : ""}
                  >
                    <Icon />
                  </Link>
                </li>
              ))}
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
          {pages.map(({ path, aria, name, icon: Icon }, index) => (
            <li key={index}>
              <Link
                href={path}
                aria-label={aria}
                className={currentRoute === path ? styles.active_link : ""}
                onClick={() => NavigationMenu(false)}
              >
                <h3>{name}</h3>
                <Icon size={26} />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Header;
