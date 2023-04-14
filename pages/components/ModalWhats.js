import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styles from "../../styles/ModalWhats.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Image from "next/image"
import Link from "next/link"
import Servicio from "../../public/modal/servicio.jpeg"

const ModalWhats = ({show, handleClose}) => {
  return (
    <Modal show={show} onHide={handleClose} className={styles.mod}>
      <Modal.Header closeButton className={styles.header}>
        <Modal.Title>
        <Image src={Servicio} 
                  alt='Servicio al Cliente'
                  width={100}
                  height={132}
                  priority
                  className={styles.titulo_btn}
                  /> Luis Díaz</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        ¡Hola! 
        Encantado de conocerte,<br></br>
        ¿cómo podemos ayudarte? 
      </Modal.Body>
      <Modal.Footer className={styles.footer}>
        <Link href="https://wa.me/525522527362" >
        <Button className={styles.btnW} onClick={handleClose} >
        <FontAwesomeIcon icon={faWhatsapp}  className={styles.whats}/> Empezar Chat
        </Button>
        </Link>
        <Button variant="secondary" onClick={handleClose}  >
        Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalWhats;
