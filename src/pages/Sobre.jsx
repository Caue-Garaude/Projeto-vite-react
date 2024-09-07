import React, { useState } from 'react';

import yourImage from '../assets/Saved 1.png'; 
import minhaImage from '../assets/Viseo Merge screen 1.png';
import telaImage from '../assets/tela.png'

function Sobre() {
  const [individualVideos, setIndividualVideos] = useState("10 Videos");
  const [teamVideos, setTeamVideos] = useState("Vídeos Ilimitados");

  const pageStyle = {
    padding: '20px',
    textAlign: 'center',
  };

  const mainContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '20px',
    maxWidth: '1200px', 
    margin: '0 auto', 
  };

  const textContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: '1',
    marginRight: '20px', 
  };

  const titleStyle = {
    fontSize: '2.5em',
    marginBottom: '10px',
  };

  const subtitleStyle = {
    fontSize: '1.5em',
    marginBottom: '20px',
    color: '#3C3838',
  };

  const buttonStyle = {
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    borderRadius: '50px',
    padding: '10px 20px',
    fontSize: '1em',
    cursor: 'pointer',
    alignSelf: 'flex-start',
    marginTop: '20px',
  };

  const imageStyle = {
    width: 'auto', 
    height: 'auto',
    marginLeft: '50px',
  };

  const pricingCardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    width: '300px',
    textAlign: 'center',
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  };

  const pricingContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '40px',
  };

  const pricingTitleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    backgroundColor: '#f7f2ff',
    padding: '10px',
    borderRadius: '8px 8px 0 0',
    margin: '-20px -20px 10px -20px',
    color: '#8a00ff',
  };

  const pricingPriceStyle = {
    fontSize: '24px',
    margin: '20px 0',
    color: '#ff00e0',
  };

  const dropdownStyle = {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '10px',
  };

  const pricingButtonStyle = {
    backgroundColor: '#8a00ff',
    color: '#fff',
    border: 'none',
    borderRadius: '50px',
    padding: '10px 20px',
    fontSize: '1em',
    cursor: 'pointer',
  };

  const handleIndividualVideosChange = (e) => {
    setIndividualVideos(e.target.value);
  };

  const handleTeamVideosChange = (e) => {
    setTeamVideos(e.target.value);
  };

  return (
    <div>
      <div style={mainContainerStyle}>
        <div style={textContainerStyle}>
          <h1 style={titleStyle}>Bem-vindo à revolução dos vídeos!</h1>
          <h2 style={subtitleStyle}>
            Somos uma startup com o objetivo de facilitar a produção de conteúdo em larga escala com qualidade profissional, capaz de atingir uma audiência de milhões de seguidores.
          </h2>
          <button style={buttonStyle}>Baixe o app</button>
        </div>
        <img src={minhaImage} alt="Descrição da Imagem" style={imageStyle} />
        <img src={yourImage} alt="Descrição da Imagem" style={imageStyle} />
      </div>
      
      <div style={pageStyle}>
        <h1>Planos</h1>
      </div>
      
      <div style={pricingContainerStyle}>
        <div style={pricingCardStyle}>
          <h2 style={pricingTitleStyle}>Individual</h2>
          <p>1 Usuário</p>
          <select
            value={individualVideos}
            onChange={handleIndividualVideosChange}
            style={dropdownStyle}
          >
            <option value="10 Videos">10 Vídeos  <div style={pricingPriceStyle}>R$15</div></option>
          </select>
          <button style={pricingButtonStyle}>Cadastrar</button>
        </div>

        <div style={pricingCardStyle}>
          <h2 style={pricingTitleStyle}>Profissional - Times</h2>
          <p>1-10 Usuários</p>
          <select
            value={teamVideos}
            onChange={handleTeamVideosChange}
            style={dropdownStyle}
          >
            <option value="Vídeos Ilimitados">Vídeos Ilimitados  <div style={pricingPriceStyle}>R$40</div></option>
          </select>
          <p>+10 Usuários</p>
          <select
            value={teamVideos}
            onChange={handleTeamVideosChange}
            style={dropdownStyle}
          >
            <option value="Vídeos Ilimitados">Vídeos Ilimitados  <div style={pricingPriceStyle}>R$20</div></option>
          </select>
          <button style={pricingButtonStyle}>Cadastrar</button>
        </div>

        <div style={pricingCardStyle}>
          <h2 style={pricingTitleStyle}>Corporativo</h2>
          <div style={pricingPriceStyle}><img src={telaImage} alt="imagem da moça na tela" /></div>
          <button style={pricingButtonStyle}>Entre em Contato</button>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
