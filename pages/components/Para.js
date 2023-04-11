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
      <div className={styles.texto_giros}>
        <h2 className={styles.h2}>
         Una app para todos</h2>
         <p className={styles.parrafo}>TuTi es herramienta robusta y fácil de usar.<br></br>
      <span className={styles.span}>Tú
      </span> te encargas de operar tu negocio, 
      <span className={styles.span}>nosotros</span> de todo lo demás.</p>
      </div>
    <Row className={styles.row}>
        {beneficios.map((item) => (
            <Card key={item.id} value={item.id} className={styles.card}>
                
                <Card.Title data-aos="flip-left" className={styles.title}><FontAwesomeIcon icon={faCheckCircle} style={{ color: item.color }}  className={styles.icon}/>{item.title}</Card.Title>
            </Card>
        ))}
    </Row>
    </div>
  )
}

export default Para