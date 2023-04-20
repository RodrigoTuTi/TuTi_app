import React from 'react'
import NavBar from "./NavBar.js";
import Caratula from "./Caratula";
import Beneficios from "./Beneficios";
import Pasos from "./Pasos"
import Nosotros from './Nosotros';
import Para from "./Para"
import Aliados from './Aliados.js';
import Contacto from './Contacto';
import Footer from "./Footer"

const Layout = ({children}) =>  (
    <>
    <NavBar />
    <Caratula />
    <Beneficios />
    <Pasos />
    <Nosotros />
    <Para />
    <Aliados />
    <Contacto />
    <Footer />
    <main>{children}</main>
    </>
  )


export default Layout