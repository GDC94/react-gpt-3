
import React from 'react';
import possibilityImage from '../../assets/posibility.png';
import './posibility.css';

const Posibility = () => (
    <div className="gpt3__possibility section__padding" id="possibility">
        <div className="gpt3__possibility-image">
            <img src={possibilityImage} alt="possibility" />
        </div>

        <div className="gpt3__possibility-content">
            <h4>
                Solicite acceso anticipado </h4>
            <h1 className="gradient__text">Las posibilidades estan<br />más allá de su imaginación</h1>
            <p>Empieza a crear en GTP-3 Cloud con 300 USD en crédito gratis y más de 20 productos Always Free.</p>
            <h4>Comenzar</h4>
        </div>

    </div>
);

export default Posibility;