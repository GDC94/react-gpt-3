
import React from 'react';
import Article from '../../components/article/Article';
import blog01 from '../../assets/blog01.png';
import blog02 from '../../assets/blog02.png';
import blog03 from '../../assets/blog03.png';
import blog04 from '../../assets/blog04.png';
import blog05 from '../../assets/blog05.png';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">¿Necesitas inspiración? <br /> <span>Resolvamos juntos los retos a los que te enfrentas.</span></h1>
    </div>
    <div className="gpt3__blog-container  shadow-drop-center" >
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="jun 26, 2021" text="Optimizar la latencia de las aplicaciones mediante el balanceo de carga" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 16, 2020" text="Conectarse de forma segura a máquinas virtuales" />
        <Article imgUrl={blog03} date="Oct 12, 2021" text="Migrar máquinas virtuales a Compute Engine" />
        <Article imgUrl={blog04} date="Enero 6, 2021" text="Prácticas recomendadas para organizaciones empresariales" />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="Recomendaciones para las instancias de SQL Server" />
      </div>
    </div>
  </div>
);

export default Blog;