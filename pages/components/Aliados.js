import React from 'react'
import Image from 'next/image'
import styles from "../../styles/Aliados.module.css"

const Aliados = () => {
  return (
    <div className={styles.aliados}>
    <h2 className={styles.h2}>Alianzas estratégicas</h2>
    <Image
      src="/iyem.png"
      width={230}
      height={60}
      alt="First img"
    />
    <Image
    src="/tdc.png"
    width={250}
    height={55}
    alt="Second img"
  />
    </div>
  )
}

export default Aliados