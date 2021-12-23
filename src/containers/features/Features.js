import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Natural Language',
    text: 'Extrae información valiosa de textos sin estructurar con el aprendizaje automático de GTP-3.',
  },
  {
    title: 'Text‑to‑Speech',
    text: 'Convierte texto en voz que suena natural con una API basada en IA.',
  },
  {
    title: 'Vertex AI',
    text: 'Nuestra nueva plataforma unificada de aprendizaje automático te ayudará a crear, desplegar y escalar modelos de IA más eficaces.',
  },
  {
    title: 'Agent Assist',
    text: 'Proporciona a los agentes humanos asistencia continuada durante las llamadas para ayudarles a determinar las necesidades de los clientes y facilitarles instrucciones detalladas en tiempo real..',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">El futuro es ahora. Dé el paso que su empresa u organización necesita.</h1>
      <p>Solicite acceso anticipado para comenzar</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;