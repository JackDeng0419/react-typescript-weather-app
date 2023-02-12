import React from 'react';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Header } from './components/Header/index';
import { HomePage } from './pages/HomePage/index';

function App() {
  return (
    <div className="App">
      <Header/>
      <HomePage />
      <footer>Design by Jack Deng</footer>
    </div>
  );
}

export default App;
