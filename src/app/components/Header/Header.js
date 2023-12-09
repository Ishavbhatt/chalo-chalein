"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";

const NewHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header_main}>
      <div className="container">
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <Link href="/">Chalo Chale</Link>
          </div>
          <div
            className={`${styles.links} ${
              menuOpen ? styles.open : styles.close
            }`}
          >
            {menuOpen === true ? (
              <button className={styles.cross_btn} onClick={toggleMenu}>
                <Image
                  src="/icons/close.png"
                  width={17}
                  height={17}
                  alt="Cancel"
                />
              </button>
            ) : (
              ""
            )}
            <Link href="/about" onClick={toggleMenu}>
              About Us
            </Link>
            <Link href="/taxi-services" onClick={toggleMenu}>
             Taxi Services
            </Link>
            <Link href="/countries" onClick={toggleMenu}>
              Tours
            </Link>
            <Link href="/courses" onClick={toggleMenu}>
              Trekking
            </Link>
            <Link href="/blogs" onClick={toggleMenu}>
              Sightseeing
            </Link>
            <Link href="/contact-us" onClick={toggleMenu}>
              Contact Us
            </Link>
          </div>
          <div className={styles.hamburger} onClick={toggleMenu}>
            <div
              className={`${styles.bar} ${menuOpen ? styles.open : ""}`}
            ></div>
            <div
              className={`${styles.bar} ${menuOpen ? styles.open : ""}`}
            ></div>
            <div
              className={`${styles.bar} ${menuOpen ? styles.open : ""}`}
            ></div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NewHeader;
