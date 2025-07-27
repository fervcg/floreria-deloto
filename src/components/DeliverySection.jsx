// src/components/DeliverySection.jsx
import styled from 'styled-components';

const SectionBg = styled.section`
  position: relative;
  background: 
    linear-gradient(rgba(26, 54, 54, 0.6), rgba(26, 54, 54, 0.6)),
    url('src/img/Mapa Santiago.png') center/cover no-repeat;
  padding: 6rem 2rem;
  color: white;
`;

const Heading = styled.h2`
  font-family: 'Bitter', serif;
  font-size: 2.4rem;
  text-align: center;
  margin-bottom: 12rem;
`;

const MethodsWrapper = styled.div`
  display: flex;
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MethodCard = styled.div`
  background: rgba(255, 255, 255, 0.9);
  flex: 1;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  color: #183D3D;
`;

const CardTitle = styled.h3`
  font-family: 'Bitter', serif;
  font-size: 1.6rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const List = styled.ul`
  list-style: none;
  padding: 1rem;
`;

const ListItem = styled.li`
  position: relative;
  padding-left: 1.6rem;
  margin-bottom: 2rem;
  font-family: 'PT Serif', serif;
  line-height: 1.6;
  color: #545656;

  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: #c2185b;
  }
`;

export default function DeliverySectionBg() {
  return (
    <SectionBg>
      <Heading>Despachos & Entregas</Heading>
      <MethodsWrapper>
        <MethodCard>
          <CardTitle>Despacho a Domicilio</CardTitle>
          <List>
            <ListItem>Cubrimos todo Santiago (consultar disponibilidad)</ListItem>
            <ListItem>Pide antes de las 15:00 PM y recibe hoy en tu puerta</ListItem>
          </List>
        </MethodCard>
        <MethodCard>
          <CardTitle>Retiro en Taller</CardTitle>
          <List>
            <ListItem>Retiro en Huerquehue 541, Providencia</ListItem>
            <ListItem>Disponible tras elegir tu ramo o arreglo</ListItem>
            <ListItem>Horario: Lunes–Sábado, 10:00 am–18:00 pm</ListItem>
          </List>
        </MethodCard>
      </MethodsWrapper>
    </SectionBg>
  );
}