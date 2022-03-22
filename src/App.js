//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

// not sure if Footer is needed here?

function App() {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
