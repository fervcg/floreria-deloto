import styled from 'styled-components'
import {  } from 'react-icons/fa';


const HeroSection = styled.section`
  background-color: #EEEDE8;
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  min-width: 550px;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: #183D3D;
  font-family: 'Bitter', serif;
  font-weight: 600;
`;

const SubtitleList = styled.ul`
  padding-left: 0;
  color: #183D3D;
  font-family: 'PT Serif', serif;
  font-size: 18px;
  line-height: 1.5;
  list-style: none;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Item = styled.li`
  margin-bottom: 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;

  &::before {
    content: '➜';
    color: #183D3D;
    font-size: 1.2rem;
    margin-top: 0.1rem;
  }
`;

const ActionButton = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
  background-color: #183D3D;
  color: white;
  font-family: 'PT Serif', serif;
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  text-decoration: none;
  transition: background 0.3s;

  &:hover {
    background-color: #285B5B;
  }
`;

const HeroImage = styled.img`
  flex: 1;
  max-width: 850px;
  height: auto;
  object-fit: cover;
  margin-left: 5rem;
  border-radius: 26px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 2rem;
  }
`;

export default function Hero() {
  return (
    <HeroSection>
      <TextContainer>
        <Title>  
          Tu florería online con despacho en todo Santiago <span role="img" aria-label="flor">💐</span>
          </Title>
        <SubtitleList>
          <Item>Somos 100% online: elige tu ramo favorito y coordina retiro o despacho.</Item>
          <Item>Despacho a domicilio en todo Santiago. ¡Pide antes de las 15:00 PM y recibe hoy!
          </Item>
          <Item>¿Prefieres retirar? Haz tu pedido online y ven a buscarlo cuando esté listo.</Item>
          <Item>Ramos personalizados para cada ocasión: bodas, cumpleaños, condolencias y más.</Item>
        </SubtitleList>

        <ActionButton href="#catalogo">Ver Productos</ActionButton>
      </TextContainer>

      <HeroImage src="src/img/imagen-hero.png" alt="Ramos de flores decorativos" />
    </HeroSection>
  );
}
