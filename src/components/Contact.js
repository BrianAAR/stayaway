import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact">
      <h2>Contacto</h2>
      <form>
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Correo Electrónico" required />
        <textarea placeholder="Mensaje" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contact;
