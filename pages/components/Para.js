import React from 'react'
import { items } from '../../public/para/para.json'
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-regular-svg-icons"
import styles from "../../styles/Para.module.css"

const Para = () => {
    const { beneficios } = items;

  return (
    <div className={styles.comp} id="giros">
        <h2 className={styles.h2}>
         Una app para todos los emprendedores</h2>
    <Row>
        {beneficios.map((item) => (
            <Card key={item.id} value={item.id} className={styles.card}>
                
                <Card.Title className={styles.title}><FontAwesomeIcon icon={faCheckCircle} style={{ color: item.color }}  className={styles.icon}/>{item.title}</Card.Title>
            </Card>
        ))}
    </Row>
    </div>
  )
}

export default Para