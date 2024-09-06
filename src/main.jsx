import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Contato from './pages/Contato';
import Sobre from './pages/Sobre';
import './App.css'; // Se você tiver algum CSS global, você pode incluir aqui

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Header />
    <main style={{ paddingTop: '60px' }}> {/* Adiciona um padding top para que o conteúdo não fique atrás do cabeçalho */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </main>
  </Router>
);