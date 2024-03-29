import React from 'react'
import { useState } from 'react'
import Image from "next/image"
import Link from 'next/link'
import TuTi from '../public/TuTi.webp'
import styles from '../styles/Caratula.module.css'
import Google from '../public/google-play.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import ModalWhats from './ModalWhats'
import FacebookW from './FacebookW'



const Caratula = () => {

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const H = 'hola'


  return (
    <>
    <div className={styles.caratula} id="cartula">
        <div className={styles.titulo} >
            <h1 className={styles.titulo_h1}>Tu tienda en tus manos</h1>
            <p className={styles.titulo_p}>Vende, compra y lleva el control desde tu bosillo. Revoluciona tu negocio con nosotros, la aplicación más usada por los pequeños y medianos negocios. </p>
            <Link 
            href={'https://play.google.com/store/apps/details?id=com.companyname.tuti.maui'}>
            <Image src={Google} 
                  alt='Google Play Badge'
                  width={180}
                  height={70}
                  priority
                  className={styles.titulo_btn}
                  data-aos="fade-right"/>
            </Link>
        </div>
        <div className={styles.img_container}>
        <Image src={TuTi} 
                  alt='TuTi'
                  width={300}
                  height={600}
                  as='portada'
                  priority
                  className={styles.img_caratula}
                />
                
        </div>
        <Link href="localhost:3000">
        <FontAwesomeIcon icon={faWhatsapp} className={styles.whats} onClick={handleShow} />
        </Link>
    </div>
    <ModalWhats show={show} handleClose={handleClose} />
    <FacebookW />
    </>
  )
}

export default Caratula