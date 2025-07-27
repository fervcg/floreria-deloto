import styled from 'styled-components';

const CuidadosSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #ffffff7f;
  padding: 5rem 2rem;
  font-family: 'PT Serif', serif;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const ImagenContainer = styled.div`
  background: url('src/img/flores cuidados.jpg') center/contain no-repeat;
  min-height: 300px;
    border-radius: 26px;
  background-position: center;
  background-size: contain;

  @media (max-width: 768px) {
    min-height: 200px;
    margin-bottom: 2rem;
  }
`;

const Contenido = styled.div`
  padding: 2rem;
  color: #1A3636;
`;

const Titulo = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #183D3D;
`;

const Lista = styled.ul`
  list-style-type: none;
  padding: 0;

  li::before {
    content: "• ";
  }

  li {
    margin-bottom: 1rem;
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

export default function CuidadosFlores() {
  return (
    <CuidadosSection id="cuidados">
      <ImagenContainer />
      <Contenido>
        <Titulo>¿Cómo mantener un ramo de flores?</Titulo>
        <Lista>
          <li>Recorta los tallos para adaptar el ramo al jarrón.</li>
          <li>Limpia los tallos con cuidado y retira las hojas verdes de la parte inferior del ramo, para que no se ensucie el agua.</li>
          <li>Añade agua fresca y los nutrientes que vienen con las flores.</li>
          <li>Mantén el ramo en un sitio fresco alejado de la calefacción y de la luz directa.</li>
          <li>Algunas flores se marchitan antes que otras.</li>
          <li>Quita las flores que estén marchitas y deja solamente las que estén bien, así el ramo durará más tiempo.</li>
          <li>Cambia el agua y corta los tallos cada dos días.</li>
        </Lista>
      </Contenido>
    </CuidadosSection>
  );
}