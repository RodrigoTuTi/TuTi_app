import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../public/logo.png";
import NavItem from "./NavItem.js";
import styles from '../../styles/NavBar.module.css';


const MENU_LIST = [
  { text: "Beneficios", href: "#beneficios" },
  { text: "Descárgala", href: "#pasos" },
  { text: "Sobre Nosotros", href: "#sobre" },
  { text: "Contacto", href: "#contacto" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header className={styles.header} id="inicio">
      <nav className={styles.navBar} id={styles.navBar}>
            <Image src={Logo} 
                  alt='TuTi Logo'
                  width={70}
                  height={70}
                  priority
                  className={styles.logo}/>
        <div
          onClick={() => setNavActive(!navActive)}
          className={styles.nav__menu_bar}
        >
           <div></div>
          <div></div>
          <div></div> 
        </div>
        <div className={styles.nav__menu_list}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} className={styles.nav__link} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;