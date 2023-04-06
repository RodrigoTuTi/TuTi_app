import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from "../../styles/Testimonials.module.css";
import { alianzas }  from "../../public/carousel.json";
import "bootstrap/dist/css/bootstrap.min.css";

const Testimonials = () => {
  // const [index, setIndex] = useState(0);
  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

  return (
    // <Carousel activeIndex={index} onSelect={handleSelect} className={styles.test}>
    //   <h2 className={styles.Ph2}>Nuestras alianzas</h2>
    //   {bootstrap.map((item) => (
    //     <Carousel.Item key={item.id} interval={5000}>
    //       <div className={styles.caja}>
    //       <img 
    //       src={item.imageUrl} 
    //       className={styles.img} 
    //       alt="slides" />
    //       <Carousel.Caption className={styles.caption}>
    //         <p>{item.body}</p>
    //       </Carousel.Caption>
    //       </div>
    //     </Carousel.Item>
    //   ))}
    // </Carousel>


    <Carousel slide={false} className={styles.test}>
      <h2 className={styles.Ph2}>Nuestras alianzas</h2>
      {alianzas.map((item) =>(
        <Carousel.Item key={item.id}>
          <div className={styles.caja}>
        <img
          className={styles.img}
          src={item.imageUrl}
          alt="First slide"
        />
        <Carousel.Caption className={styles.caption}>
          <p>{item.body}</p>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
      ))}
    </Carousel>
  )
  }

export default Testimonials;
