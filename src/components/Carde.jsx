// src/components/Carde.jsx
import React from 'react';
import { FaYoutube, FaTiktok, FaFacebook, FaInstagram } from 'react-icons/fa';

function Card({ bgColor, title, icon, number, description }) {
  const cardStyle = {
    borderRadius: '8px',
    padding: '20px',
    textAlign: 'left',
    margin: '10px',
    color: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    backgroundColor: bgColor,
    width: '250px',
    position: 'relative',
  };

  const cardNumberStyle = {
    fontSize: '2em',
    position: 'absolute',
    top: '10px',
    left: '10px',
    fontWeight: 'bold',
  };

  const cardIconStyle = {
    fontSize: '2em',
    position: 'absolute',
    top: '10px',
    right: '10px',
  };

  const cardTitleStyle = {
    fontSize: '1.5em',
    marginTop: '50px',
  };

  const cardDescriptionStyle = {
    fontSize: '1em',
    marginTop: '10px',
  };

  return (
    <div style={cardStyle}>
      <div style={cardNumberStyle}>{number}</div>
      <div style={cardIconStyle}>{icon}</div>
      <h2 style={cardTitleStyle}>{title}</h2>
      <p style={cardDescriptionStyle}>{description}</p>
    </div>
  );
}

export default Card;
