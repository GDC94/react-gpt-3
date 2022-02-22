import React from 'react';
import logo from '../../assets/GPT-3.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">¿Quieres dar un paso hacia el futuro antes que los demás?</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Solicitar acceso anticipado</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={logo} alt="gpt3_logo" />
        <p>GTP-3 <br />Todos los derechos reservados</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4> Soluciones</h4>
        <p>Asesoramiento</p>
        <p>Media</p>
        <p>Metricas</p>
        <p>Seguridad</p>

     
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Compañia</h4>
        <p>Terminos y condiciones</p>
        <p>Politica de privacidad</p>
        <p>Contacto</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>¿Interesado?</h4>
        <p>Coronel Diaz 2121, Buenos Aires, Argentina</p>
        <p>011-111132567</p>
        <p>info@gtp-3.com.ar</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2021 GPT-3. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;