import styled from 'styled-components';

const Section = styled.section`
  background-color: #7a857540;
  margin-top: 0rem;
  padding: 8rem 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  font-family: 'PT Serif', serif;
`;


const Heading = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 4rem;
  color: #183D3D;
  font-family: 'Bitter', serif;
  text-align: center;
`;

const Content = styled.p`
  max-width: 1000px;
  text-align: center;
  font-size: 1.1rem;
  line-height: 2;
  color: #183D3D;
`;

const Firma = styled.div`
  position: absolute;
  bottom: 4rem;
  right: 10rem;
  text-align: right;
  font-size: 1rem;
  font-style: italic;
  color: #545656;
  font-family: 'Bitter', serif;

  @media (max-width: 768px) {
    position: static;
    margin-top: 8rem;
    text-align: center;
  }
`;

export default function QuienesSomos() {
  return (
    <Section>
      <Heading>Quiénes Somos</Heading>
      <Content>
        Nuestra florería online nació del sueño de transformar emociones en detalles inolvidables.
        Somos una PYME familiar apasionada por el arte floral y por crear momentos especiales a través de nuestros arreglos.
        Cada ramo, cada caja, cada creación está hecha a mano con dedicación, cariño y compromiso.
        Porque sabemos que no se trata solo de flores, sino de emociones, y cada entrega cuenta una historia.
        Nos esforzamos en brindar productos hermosos, de calidad, y un servicio atento que haga sentir a cada cliente acompañado y satisfecho.
      </Content>
      <Firma>
        con cariño<br />
        María Luisa Guerrero
      </Firma>
    </Section>
  );
}