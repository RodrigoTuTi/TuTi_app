import React from "react";
import styles from "../../styles/Beneficios.module.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { items } from "../../public/beneficios.json";
import { useState, useEffect } from "react";
import Video from "./Video";
import Demo from "../../public/beneficios/Caro.png"
import Image from "next/image"

const Beneficios = () => {

  const { beneficios } = items;
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const playerProps = { playing: true };
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);


  return (
    <div className={styles.comp} id='beneficios'>
      {hasWindow && (
        <div className={styles.titrow}>
          <div className={styles.vid}><Video {...playerProps} /></div>
          <h2 className={styles.ben_h2}>Mucho más que un punto de venta</h2>
        </div>
      )}
      <Row activeindex={index} onSelect={handleSelect} className={styles.row}>
        {beneficios.map((item) => (
            <Card className={styles.card} key={item.id} value={item.id}>
              
              <img
                src={item.icon}
                alt="icon"
                className={styles.icon}
                style={{ backgroundColor: item.color }}
                data-aos="flip-left"
              />
              <Card.Body>
                <Card.Title className={styles.titulo}>{item.title}</Card.Title>
                <Card.Text className={styles.text}>{item.body}</Card.Text>
              </Card.Body>
            </Card>
        ))}
        <Card className={styles.card1} >
              <Image
              width={200}
              height={200}
                src={Demo}
                alt="icon"
                className={styles.img_demo}
              />
              
                <Button className={styles.btn} href='#contacto' data-aos="flip-left" >Contáctanos</Button>
              
            </Card>
      </Row>
    </div>
  );
};

export default Beneficios;
