import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Nosotros.module.css'
import mollete from '../../public/somos/mollete.png'
import mollete2 from '../../public/somos/mollete2.png'

const Nosotros = () => {
  return (
    <>
    <div className={styles.componente} id="sobre">
        
        <div className={styles.uno}>
        <h2 className={styles.sobre}>Nuestra misión</h2>
        <Image src={mollete} 
                  alt='nosotros'
                  width={300}
                  height={400}
                  className={styles.img}
                  data-aos="fade-right"/>
        <div className={styles.captionUno}>
            <p> En un país con muchos retos, las grandes empresas se adueñan poco a poco del mercado. 
                Es por eso que hemos creado <span className={styles.span}>TuTi</span>, una herramienta integral que brinda información y recursos a los pequeños y medianos negocios 
                para crecer y tomar las mejores decisiones.
            </p>
        </div>
        </div>
        
        <div className={styles.dos}>
        <h2 className={styles.sobre}>Sobre nosotros</h2>
        <div className={styles.captionDos}>
            <p> Somos un grupo multidiciplinario mexicano, que después de haber trabajado en grandes empresas tecnológicas, 
                descubrimos la necesidad de dar acceso a las y los emprendedores a las mismas 
                herramientas y oportunidades para competir en un mundo globalizado. 
            </p>
        </div>
        <Image src={mollete2} 
                  alt='nosotros'
                  width={300}
                  height={400}
                  className={styles.img}
                  data-aos="fade-right"/>
        </div>
    </div>
    
    </>
  )
}

export default Nosotros