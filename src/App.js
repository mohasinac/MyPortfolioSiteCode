import React from 'react';
import './App.scss';
import { HashRouter } from 'react-router-dom'

import Header from './components/header/header'
import Main from './components/main/main'
import Footer from './components/footer/footer'

function App() {
  return (
    <HashRouter >
      <Header />
        <Main />
      <Footer />
    </HashRouter>
  );
}

export default App;
