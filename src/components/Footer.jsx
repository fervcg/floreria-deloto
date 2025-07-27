import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #1A3636;
  color: white;
  padding: 3rem 2rem;
`;

const FooterGrid = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

const InfoColumn = styled.div`
  flex: 1;
  min-width: 280px;
  padding: 2rem;

  h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    font-family: 'Bitter', serif;
    font-weight: 600;
  }

  p {
    font-size: 0.95rem;
    color: #B7B7B7;
    line-height: 1.7;
    font-family: 'PT Serif', serif;
  }
`;

const LogoColumn = styled.div`
  flex: 1;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;  
  justify-content: center;
  padding-right: 2rem;   

  img {
    max-width: 250px;
    height: auto;
    margin-bottom: 0.5rem;
    border-radius: 20px;
  }

  span {
    font-family: 'PT Serif', serif;
    font-size: 0.9rem;
    font-style: italic;
    color: #ffecb3af;
    text-align: right;
  }

  @media (max-width: 768px) {
    align-items: center;
    padding-right: 0;
    text-align: center;

    span {
      text-align: center;
    }
  }
`;

const FooterNote = styled.div`
  margin-top: 2rem;
  text-align: center;
  font-size: 0.85rem;
  color: #bbb;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterGrid>
        <InfoColumn>
          <h3>Dirección & Horarios de Atención:</h3>
          <p>
            Dirección: Huerquehue 541, Maipú<br />
            WhatsApp: +569 79373795<br />
            Instagram: @floreria_deloto<br />
            Horario: Lunes a Sábado, 10:00 am - 20:00 hrs<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Domingo, 11:00 am - 19:00 hrs
          </p>
        </InfoColumn>

        <LogoColumn>
          <img src="src/img/logo.png" alt="Logo de Florería de Loto" />
          <span>Especialistas en Flores Frescas</span>
        </LogoColumn>
      </FooterGrid>

      <FooterNote>
        &copy; 2025 Florería de Loto. Todos los derechos reservados.
      </FooterNote>
    </FooterContainer>
  );
}