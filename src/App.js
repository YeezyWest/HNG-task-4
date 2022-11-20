import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import { AboutWeathery, Footer, Navbar, WhyWeather } from './components';
import HeroSection from './components/HeroSection';
import Product from './components/Product';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <HeroSection />
      <AboutWeathery />
      <WhyWeather />
      <Product />
      <Footer />
    </BrowserRouter>
  );
};

export default App;