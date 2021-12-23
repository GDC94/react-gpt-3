

import Navbar from './components/navbar/Navbar';
import Header from './containers/header/Header';
import Brand from './components/brand/Brand';
import WhatGPT3 from './containers/whatGPT3/WhatGPT3';
import Features from './containers/features/Features';
import Posibility from './containers/posibility/Posibility';
import Cta from './components/cta/Cta';
import Blog from './containers/blog/Blog';
import Footer from './containers/footer/Footer';
import './App.css';





const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatGPT3 />
    <Features />
    <Posibility />
    <Cta />
    <Blog />
    <Footer />
    
  </div>
);

export default App;
