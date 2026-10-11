"use client";

import { useRef } from "react";
import Image from "next/image";
import styles from "./page.module.css";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#development", label: "Development" },
];

export default function Navigation() {
  const menu = useRef<HTMLDetailsElement>(null);
  const trigger = useRef<HTMLElement>(null);
  return <header className={styles.header}>
    <nav className={styles.nav} aria-label="Main navigation">
      <a className={styles.brand} href="#top" aria-label="Avoido, back to top">
        <Image src="/icon.png" alt="" width={30} height={30} />Avoido
      </a>
      <div className={styles.desktopLinks}>{links.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}</div>
      <a className={styles.mobileExplore} href="#experience">Explore</a>
      <details ref={menu} className={styles.mobileMenu} onKeyDown={event => {
        if (event.key === "Escape" && menu.current?.open) {
          menu.current.open = false;
          trigger.current?.focus();
        }
      }}>
        <summary ref={trigger} aria-label="Section menu" aria-controls="mobile-links"><span /><span /><span /></summary>
        <div id="mobile-links" className={styles.menuLinks}>{links.map(link => <a key={link.href} href={link.href} onClick={() => { if (menu.current) menu.current.open = false; }}>{link.label}</a>)}</div>
      </details>
    </nav>
  </header>;
}
