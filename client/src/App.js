import { BrowserRouter } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import './styles/styles.scss';

function App() {


  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
