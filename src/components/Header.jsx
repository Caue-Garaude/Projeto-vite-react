import React from 'react';
import { Link } from 'react-router-dom';

const headerStyle = {
  padding: '20px 0', // Espaçamento do topo
  textAlign: 'center', // Centraliza o conteúdo
};

const ulStyle = {
  listStyle: 'none',
  margin: '0',
  padding: '0',
  display: 'inline-flex', // Coloca os itens em linha
};

const linkStyle = {
  color: "black", // Cor preta para os links
  textDecoration: 'none',
  margin: '0 15px', // Espaçamento entre os links
};

function Header() {
  return (
    <header style={headerStyle}>
      <nav>
        <ul style={ulStyle}>
          <li>
            <Link to="/" style={linkStyle}>Home</Link>
          </li>
          <li>
            <Link to="/contato" style={linkStyle}>Contato</Link>
          </li>
          <li>
            <Link to="/sobre" style={linkStyle}>Sobre</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
