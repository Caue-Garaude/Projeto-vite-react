import React from 'react';
import Card from '../components/Carde'; // Ajuste o caminho conforme a estrutura do seu projeto
import { FaYoutube, FaTiktok, FaFacebook, FaInstagram } from 'react-icons/fa';
import yourImage from '../assets/Hero-image.png'; // Atualize para o nome correto da sua imagem PNG

function Home() {
  const mainContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '20px',
    maxWidth: '1200px', // Limita a largura total
    margin: '0 auto', // Centraliza o container
  };

  const textContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: '1',
    marginRight: '20px', // Espaço entre o texto e a imagem
  };

  const titleStyle = {
    fontSize: '2.5em',
    marginBottom: '10px',
  };

  const subtitleStyle = {
    fontSize: '1.5em',
    marginBottom: '20px',
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
    flex: '1',
    maxWidth: '80%', // Ajusta o tamanho da imagem
    height: 'auto',
  };

  const cardsContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    padding: '20px',
  };

  const cardsData = [
    {
      bgColor: '#FF0000',
      title: 'YouTube',
      number: '01',
      icon: <FaYoutube />,
      description: 'A plataforma de vídeos mais popular do mundo.',
    },
    {
      bgColor: '#000000',
      title: 'TikTok',
      number: '02',
      icon: <FaTiktok />,
      description: 'A rede social de vídeos curtos que viralizam rapidamente.',
    },
    {
      bgColor: '#4267B2',
      title: 'Facebook',
      number: '03',
      icon: <FaFacebook />,
      description: 'A maior rede social para conectar amigos e compartilhar momentos.',
    },
    {
      bgColor: '#C13584',
      title: 'Instagram',
      number: '04',
      icon: <FaInstagram />,
      description: 'A rede social focada em fotos e vídeos para engajamento visual.',
    },
  ];

  return (
    <div>
      <div style={mainContainerStyle}>
        <div style={textContainerStyle}>
          <h1 style={titleStyle}>Título Principal</h1>
          <h2 style={subtitleStyle}>Subtítulo Descritivo</h2>
          <button style={buttonStyle}>Vamos começar!</button>
        </div>
        <img src={yourImage} alt="Descrição da Imagem" style={imageStyle} />
      </div>
      <div style={cardsContainerStyle}>
        {cardsData.map((card, index) => (
          <Card
            key={index}
            bgColor={card.bgColor}
            title={card.title}
            number={card.number}
            icon={card.icon}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
