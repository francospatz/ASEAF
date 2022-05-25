import { BrowserRouter } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { LoggedContext } from './context/loggedContext';
import './styles/styles.scss';



function App() {
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState('');
  const value = {
    logged,
    setLogged,
    user,
    setUser
  };

  return (
    <BrowserRouter>
      <LoggedContext.Provider value={value}>
        <Header />
        <Main />
      </LoggedContext.Provider>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
