// src/components/ProductCard.jsx
import styled from 'styled-components';

const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 0px 8px rgba(0,0,0,0.1);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  }
`;

const OfertaTag = styled.span`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: #000;
  color: #fff;
  padding: 0.4rem 0.8rem;
  font-weight: bold;
  font-size: 0.8rem;
  border-radius: 5px;
`;

const Image = styled.img`
  width: 100%;
  max-height: 280px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
  cursor: pointer;
`;

const Name = styled.h3`
  color: #183d3df5;
  font-size: 1.2rem;
  margin: 0.5rem 0 1rem 0;
  cursor: pointer;
`;

const PriceWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const RegularPrice = styled.span`
  color: #A8A8A8;
  text-decoration: line-through;
  font-size: 0.95rem;
`;

const OfertaPrice = styled.span`
  color: #ea1a1abd;
  font-weight: bold;
  font-size: 1rem;
`;

const PrecioNormal = styled.span`
  color: #183d3ddb;
  font-weight: bold;
  font-size: 1rem;
`;

const Button = styled.a`
  background-color: #183D3D;
  color: white;
  padding: 0.7rem 1.2rem;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background-color: #d62839;
  }
`;

// 🔧 Función auxiliar para formatear CLP
function formatPrice(price) {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0
  }).format(price);
}

// 🔧 Función para calcular descuento redondeado
function calcularDescuentoRedondeado(original, oferta) {
  if (typeof original !== 'number' || typeof oferta !== 'number') return 0;
  const porcentaje = ((original - oferta) / original) * 100;
  return Math.round(porcentaje / 5) * 5;
}

// ✅ Componente principal
export default function ProductCard({ name, price, originalPrice, images }) {
  const hayOferta =
    typeof originalPrice === 'number' &&
    typeof price === 'number' &&
    price < originalPrice;

  const descuento = hayOferta
    ? calcularDescuentoRedondeado(originalPrice, price)
    : null;

  const mensaje = `Hola, quiero el producto: ${name}${hayOferta ? ` con ${descuento}% de descuento` : ''}`;
  const link = `https://wa.me/56912345678?text=${encodeURIComponent(mensaje)}`;

  return (
    <Card>
      {hayOferta && (
        <OfertaTag>
          OFERTA -{descuento}%
        </OfertaTag>
      )}

      {images && images.length > 0 ? (
        <Image src={images[0]} alt={name} />
      ) : (
        <div style={{
          height: '200px',
          backgroundColor: '#FAF0E6',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontStyle: 'italic',
          color: '#888'
        }}>
          Imagen no disponible
        </div>
      )}

      <Name>{name}</Name>

      {hayOferta ? (
        <PriceWrapper>
          <RegularPrice>{formatPrice(originalPrice)}</RegularPrice>
          <OfertaPrice>{formatPrice(price)}</OfertaPrice>
        </PriceWrapper>
      ) : (
        <PriceWrapper>
          <PrecioNormal>{formatPrice(price)}</PrecioNormal>
        </PriceWrapper>
      )}

      <Button href={link} target="_blank" rel="noopener noreferrer">
        Cotizar/Comprar
      </Button>
    </Card>
  );
}