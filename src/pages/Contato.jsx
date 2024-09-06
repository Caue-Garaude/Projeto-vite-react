import React, { useState } from 'react';
import { FaTwitter, FaInstagram, FaDiscord } from 'react-icons/fa'; // Importa os ícones

function Contato() {
  const pageStyle = {
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh', // Preenche a altura da página
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '8px',
  };

  const leftSectionStyle = {
    flex: 1,
    textAlign: 'left',
    fontSize: '2em',
    paddingRight: '20px',
  };

  const dividerStyle = {
    height: '300px',
    width: '1px',
    backgroundColor: '#ccc',
    margin: '0 20px',
  };

  const rightSectionStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px 15px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '30px', // Bordas arredondadas para parecer um botão
    fontSize: '1em',
    outline: 'none',
  };

  const textareaStyle = {
    width: '100%',
    padding: '10px 15px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '30px', // Bordas arredondadas
    fontSize: '1em',
    outline: 'none',
    resize: 'none',
    height: '100px',
  };

  const buttonStyle = {
    backgroundColor: '#8a00ff',
    color: '#fff',
    border: 'none',
    borderRadius: '30px',
    padding: '10px 20px',
    fontSize: '1em',
    cursor: 'pointer',
    width: '50%', // Largura do botão
  };

  const socialIconsStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '150px',
    marginTop: '20px',
  };

  const iconStyle = {
    fontSize: '24px', // Tamanho dos ícones
    color: '#8a00ff', // Cor dos ícones
    cursor: 'pointer',
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        {/* Seção da esquerda */}
        <div style={leftSectionStyle}>
          <h1>Dúvidas e suporte, entre em contato:</h1>

          {/* Ícones das redes sociais */}
          <div style={socialIconsStyle}>
            <FaTwitter style={iconStyle} />
            <FaInstagram style={iconStyle} />
            <FaDiscord style={iconStyle} />
          </div>
        </div>

        {/* Linha divisória */}
        <div style={dividerStyle}></div>

        {/* Seção da direita */}
        <div style={rightSectionStyle}>
          <input type="text" placeholder="Nome" style={inputStyle} />
          <input type="email" placeholder="Email" style={inputStyle} />
          <textarea placeholder="Mensagem" style={textareaStyle} />
          <button style={buttonStyle}>Enviar</button>
        </div>
      </div>
    </div>
  );
}

export default Contato;
