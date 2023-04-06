import React from 'react'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout'
import SSRProvider from 'react-bootstrap/SSRProvider'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react'



export default function App({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({
      once: true,
      offset: 50,
      delay: 600,
      duration: 400,
    });
  }, [])
  

  return (
    <>
    <SSRProvider>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    </SSRProvider>
      
  </>)
  
}
