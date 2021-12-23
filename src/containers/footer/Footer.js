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
        <p>GTP-3 <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4> Soluciones</h4>
        <p>Application modernization</p>
        <p>Social Media</p>
        <p>Smart analytics</p>
        <p>Seguridad</p>

     
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@gtp-3.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2021 GPT-3. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;