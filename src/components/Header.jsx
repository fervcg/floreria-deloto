// src/components/Header.jsx
import styled from 'styled-components';
import { Link } from 'react-scroll';

const HeaderContainer = styled.header`
  background: #1A3636;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  flex: 1;

  img {
    max-width: 200px;
    height: auto;
    cursor: pointer;
  }
`;

const Links = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  gap: 1.5rem;

  a {
    font-family: 'PT Serif', serif;
    font-weight: 600;
    color: #FAF0E6;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: #B7B7B7;
    }
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Nav>
        <Logo>
          <Link
            to="inicio"
            smooth={true}
            duration={200}
            offset={-80}
          >
            <img src="src/img/logo.png" alt="Florería de Loto" />
          </Link>
        </Logo>

        <Links>

          <Link
            to="inicio"
            spy={true}
            smooth={true}
            offset={-130}
            duration={200}
          >
            Inicio  
          </Link>
          
          <Link 
            to="catalogo" 
            spy={true} 
            smooth={true} 
            offset={-135} 
            duration={200}
          >
            Catálogo
          </Link>

          <Link 
            to="despachos" 
            spy={true} 
            smooth={true} 
            offset={-120} 
            duration={200}
          >
            Despachos
          </Link>

          <Link 
            to="metodos-pago"
            spy={true}
            smooth={true}
            offset={-120}
            duration={200}
          >
            Métodos de Pago
          </Link> 

          <Link 
            to="cuidados-flores"
            spy={true}
            smooth={true}
            offset={-120}
            duration={200}
          >
            Cuidados de Flores
          </Link>

          <Link
            to="quienes-somos"
            spy={true}
            smooth={true}
            offset={-120}
            duration={200}
          >
            Quiénes Somos
          </Link>
        </Links>
      </Nav>
    </HeaderContainer>
  );
}