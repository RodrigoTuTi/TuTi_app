import React from 'react'
import Link from "next/link";
import styles from '../styles/NavBar.module.css';


const NavItem = ({ text, href, active }) => {
  return (
    <Link href={href}  className={`nav__item ${
      active ? "active" : ""
    }`}>
        {text}
    </Link>
  );
};

export default NavItem;
