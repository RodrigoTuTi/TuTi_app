import React from "react";
import styles from "../styles/Footer.module.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { faFacebook } from "../node_modules/@fortawesome/free-brands-svg-icons"
import { faInstagram } from "../node_modules/@fortawesome/free-brands-svg-icons"
import { faYoutube } from "../node_modules/@fortawesome/free-brands-svg-icons"
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const footer = () => {

  return (
    <div className={styles.comp}>
      <ul className={styles.redes}>
        <Link href="https://www.instagram.com/tutiappmx/">
        <Button variant="secondary" className={styles.link} >
        <FontAwesomeIcon icon={faInstagram} className={styles.iconFa} />
        </Button>
        </Link>
        <Link href="https://mx.linkedin.com/company/tuti-app">
        <Button variant="secondary" className={styles.link}>
        <FontAwesomeIcon icon={faYoutube} className={styles.iconFa} />
        </Button>
        </Link>
        <Link href="https://www.facebook.com/tutiappmx">
        <Button variant="secondary" className={styles.link}>
        <FontAwesomeIcon icon={faFacebook} className={styles.iconFa} />
        </Button>
        </Link>
      </ul>
      <p className={styles.copy}>        
        Copyright 2023 -- TuTi. Todos los derechos reservados.
      </p>
    </div>
  );
};

export default footer;
