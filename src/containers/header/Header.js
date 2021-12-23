import React from 'react';
import './header.css';
import people from '../../assets/testimonials.png';
import ia from '../../assets/Illustration.png';


const Header = () => {
    return (

        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
                <h1 className="gradient__text animate__backInLeft">
                    Construye algo asombroso con GPT-3 OpenAI</h1>
                <p>Tanto si tu negocio ya está inmerso en la transformación digital como si aún se encuentra en la etapa inicial, la suite de soluciones de AI de GPT-3 puede ayudarte a hacer frente a los retos más difíciles.
                </p>

                <div className="gpt3__header-content__input">
                    <input type="email" placeholder="Email" />
                    <button type="button">Comencemos!</button>
                </div>

                <div className="gpt3__header-content__people">
                    <img src={people} alt='' />
                    <p>+1.600 personas ya solicitaron una cotización en las últimas 24 horas</p>
                </div>
            </div>

            <div className="gpt3__header-image">
                <img src={ia} alt='' />
            </div>
        </div>


    );
}

export default Header;
