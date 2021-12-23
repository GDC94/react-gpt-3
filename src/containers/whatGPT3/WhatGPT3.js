import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="GPT-3" />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text h1">Las posibilidades están más allá de tu imaginación.</h1>
      <p>Catálogo</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Investigación en IA" text="Aprovechá el potencial de nuestro liderazgo en IA en beneficio de tu empresa" />
      <Feature title="IA responsable" text="Averigua en que beneficia a tu negocio una IA fundamentada en valores" />
      <Feature title="Educación" text="Accede a herramientas y frameworks para comprender e interpretar tus modelos de aprendizaje automático" />
    </div>
  </div>
);

export default WhatGPT3;