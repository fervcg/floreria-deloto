// src/components/PaymentMethods.jsx
import styled from 'styled-components';
import { FaMoneyBillWave, FaUniversity } from 'react-icons/fa';

const Section = styled.section`
  background: #EEEDE8;
  padding: 10rem 4rem;
  text-align: center;
`;

const Heading = styled.h2`
  font-family: 'Bitter', serif;
  color: #1A3636;
  font-size: 2.2rem;
  margin-bottom: 4rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0rem;
  max-width: 500px;
  margin: 0 auto;
`;

const Item = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 1.75rem;
`;

const IconCircle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #c2185b;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
  font-size: 2rem;
`;

const Content = styled.div`
  text-align: left;
  flex: 1;

  h3 {
    font-family: 'Bitter', serif;
    color: #183D3D;
    margin: 0 0 0.25rem;
    font-size: 1.3rem;
  }

  p {
    font-family: 'PT Serif', serif;
    color: #545656;
    margin: 0;
    line-height: 1.6;
  }
`;

export default function PaymentMethods() {
  return (
    <Section>
      <Heading>Métodos de Pago</Heading>
      <List>
        <Item>
          <IconCircle>
            <FaMoneyBillWave />
          </IconCircle>
          <Content>
            <h3>Efectivo</h3>
            <p>Al momento de la entrega</p>
          </Content>
        </Item>
        <Item>
          <IconCircle>
            <FaUniversity />
          </IconCircle>
          <Content>
            <h3>Transferencia Bancaria</h3>
            <p>
              Banco: Prepago Tenpo<br />
              Cuenta Vista: 111110851664<br />
              Correo: floreria.deloto@gmail.com<br />
              Titular: Florería de Loto SpA
            </p>
          </Content>
        </Item>
      </List>
    </Section>
  );
}