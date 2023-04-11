import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "../../styles/Contacto.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Logo from "../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import Alert from "react-bootstrap/Alert";
import gabo from '../../public/gabo.png'

const Contacto = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uy511sq",
        "template_k410pca",
        form.current,
        "Q7ttpjr-3pmMy29hS"
      )
      .then(
        (result) => {
          console.log(result.text);

          setName("");
          setMail("");
          setMessage("");
          setShow(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={styles.comp} id="contacto">
      <Link href="#inicio">
        <Image
          src={Logo}
          alt="TuTi"
          width={70}
          height={70}
          as="portada"
          priority
          className={styles.img_caratula}
        />
      </Link>
      <h2 className={styles.comp_h2}>Escríbenos, queremos leerte</h2>
      <div className={styles.form_container}>
        <Form ref={form} onSubmit={sendEmail} className={styles.form1}>
          <Form.Group controlId="formBasicEmail" className={styles.group}>
            <Form.Label className={styles.label}>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu nombre"
              name="user_name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail" className={styles.group}>
            <Form.Label className={styles.label}>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresa tu email"
              name="user_email"
              onChange={(e) => setMail(e.target.value)}
              value={mail}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail" className={styles.group}>
            <Form.Label className={styles.label}>Mensaje</Form.Label>
            <Form.Control
              type="text"
              placeholder="Escríbenos un mensaje"
              name="message"
              as="textarea"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <Button
              data-aos="fade-right"
              type="submit"
              value="Send"
              className={styles.btn}
            >
              Enviar información
            </Button>
          </Form.Group>
          <Alert show={show} variant="success">
            <p>
              Gracias por ponerte en contacto con nosotros, pronto estaremos en
              contacto.
            </p>
            <Button onClick={() => setShow(false)} variant="outline-success">
              X
            </Button>
          </Alert>
        </Form>
        <div className={styles.form2}>
        <Image
      src={gabo}
      width={300}
      height={300}
      alt="First img"
    />
          <p>info@tuti.com.mx</p>
          <p>Horario de atención</p>
          <p>Luneas a viernes 9:00am - 7:00pm</p>
        </div>
      </div>
    </div>
  );
};
export default Contacto;
