import React from 'react'
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button  from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import { articulos } from "../public/pasos/pasos.json";
import { useState } from "react";
import styles from "../styles/Pasos.module.css"
import Link from "next/link";
import Logo from "../public/Logo.png";
import Image from "next/image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { faPaypal } from '@fortawesome/free-brands-svg-icons';

const Pasos = () => {

    const { steps } = articulos;
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };


  return (
    
    <div className={styles.mod} id="pasos">
      <Link href="#inicio">
      <Image src={Logo} 
                  alt='TuTi'
                  width={70}
                  height={70}
                  as='portada'
                  priority
                  className={styles.img_caratula}
                />
                </Link>
      <h2 className={styles.h2}>Nunca fue tan fácil</h2>
      <p className={styles.subtitulo}>Sigue estos pasos y toma control de tu negocio.</p>
        <Row activeindex={index} onSelect={handleSelect} className={styles.row}>
          {steps.map((art) => (
              <Card className={styles.card} key={art.id}>
                  <Card.Title className={styles.title} >{art.title}</Card.Title>
                  <Card.Text className={styles.text}>{art.body}</Card.Text>
                  <img 
                src={art.imageUrl}
                alt="pasos a seguir"
                className={styles.imgGrande}
                />
                <Link href={art.href}>
                <Button
                className={styles.btn}
                data-aos="fade-right"
                >
                {/* <FontAwesomeIcon icon={art.icon} />  */}{art.buttonText}</Button>
                </Link>
              </Card>
          ))}
        </Row>
        
    </div>
  )
}

export default Pasos