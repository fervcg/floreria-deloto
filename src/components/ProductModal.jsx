import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';


const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div`
  background: #fff;
  padding: 2rem;
  max-width: 600px;
  width: 90%;
  border-radius: 16px;
  box-shadow: 0 6px 24px rgba(0,0,0,0.3);
  position: relative;
  animation: fadeIn 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;

  @keyframes fadeIn {
    from {opacity: 0; transform: scale(0.96);}
    to {opacity: 1; transform: scale(1);}
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 1rem; right: 1rem;
  font-size: 1.5rem;
  background: transparent;
  border: none;
  color: #c2185b;
  cursor: pointer;
`;

const MainTitle = styled.h2`
  font-family: 'Bitter', serif;
  color: #183D3D;
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const ImageGallery = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 4;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  overflow: hidden;
  cursor: ${props => props.zoomed ? 'grab' : 'zoom-in'};

  @media (max-width: 480px) {
    aspect-ratio: 5 / 5;
  }
`;


const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
  opacity: ${({ isVisible }) => isVisible ? 1 : 0};
  transform: ${({ zoomed }) => zoomed ? 'scale(2)' : 'scale(1)'};
  cursor: ${({ zoomed }) => zoomed ? 'grab' : 'zoom-in'};
  border-radius: none;

  ${({ zoomed }) =>
    zoomed &&
    `
    cursor: grab;
    transform-origin: center center;
  `};
`;


const Arrow = styled.button`
  position: absolute;
  z-index: 10;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255,255,255,0.85);
  color: #183D3D;
  border: none;
  cursor: pointer;
  padding: 0.4rem;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255,255,255,1);
    transform: translateY(-50%) scale(1.1);
  }

  &.left { left: 8px; }
  &.right { right: 8px; }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const IndicatorDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  margin-bottom: 0.8rem;
`;

const Dot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ active }) => active ? '#183D3D' : '#ccc'};
  transition: background-color 0.1s ease;
`;

const InfoBoxCompact = styled.div`
  width: 100%;
  text-align: center;
  max-height: 250px;
  overflow-y: auto;
  padding: 0 0.5rem;

  @media (max-width: 480px) {
    max-height: 200px;
  }
`;

const Divider = styled.hr`
  width: 50%;
  border: none;
  border-top: 1px solid #ccc;
  margin: 0 auto 0.6rem;
`;

const SectionTitle = styled.h3`
  font-family: 'Bitter', serif;
  font-size: 1.2rem;
  color: #333;
  margin: 0.4rem 0 0.4rem;

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin: 0.3rem 0 0.3rem;
  }
`;

const Text = styled.p`
  font-family: 'PT Serif', serif;
  font-size: 1rem;
  color: #545656;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const PriceWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const OfertaPrice = styled.p`
  font-family: 'PT Serif', serif;
  font-size: 1rem;
  color: #e63946;
  font-weight: bold;
`;

const RegularPrice = styled.p`
  font-family: 'PT Serif', serif;
  font-size: 0.95rem;
  color: #A8A8A8;
  text-decoration: line-through;
`;

const PrecioNormal = styled.p`
  font-family: 'PT Serif', serif;
  font-size: 1rem;
  color: #183D3D;
  font-weight: bold;
`;

const ZoomWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: ${props => props.zoomed ? 'scroll' : 'hidden'};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px) {
    -webkit-overflow-scrolling: touch;
  }
`;

export default function ProductModal({ product, onClose }) {
  if (!product || !product.images || product.images.length === 0) return null;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [zoomed, setZoomed] = useState(false);
  const { images, price, originalPrice, name, description } = product;
  const hayOferta = typeof originalPrice === "number" && price < originalPrice;

  const nextImage = () => {
    setVisible(false);
    setTimeout(() => {
      setCurrentImageIndex(prev => (prev + 1) % images.length);
      setVisible(true);
      setZoomed(false);
    }, 400);
  };

  const prevImage = () => {
    setVisible(false);
    setTimeout(() => {
      setCurrentImageIndex(prev => (prev - 1 + images.length) % images.length);
      setVisible(true);
      setZoomed(false);
    }, 400);
  };

  return (
    <Overlay onClick={() => { setZoomed(false); onClose(); }}>
      <ModalBox onClick={e => e.stopPropagation()}>
        <CloseBtn onClick={onClose}>✖</CloseBtn>

        <ImageGallery>
          <Arrow className="left" onClick={prevImage}>
            <svg xmlns=" http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#183D3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </Arrow>
            <Zoom>
              <GalleryImage
                src={images[currentImageIndex]}
                alt={`Imagen ${currentImageIndex + 1}`}
                isVisible={visible}
              />
            </Zoom>
          <Arrow className="right" onClick={nextImage}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#183D3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </Arrow>
        </ImageGallery>

        <IndicatorDots>
          {images.map((_, i) => (
            <Dot key={i} active={i === currentImageIndex} />
          ))}
        </IndicatorDots>

        <InfoBoxCompact>
          <MainTitle>{name}</MainTitle>

          <SectionTitle>Precio</SectionTitle>
          <Divider />

          {hayOferta ? (
            <PriceWrapper>
              <RegularPrice>{formatPrice(originalPrice)}</RegularPrice>
              <OfertaPrice>{formatPrice(price)}</OfertaPrice>
            </PriceWrapper>
          ) : (
            <PrecioNormal>{formatPrice(price)}</PrecioNormal>
          )}

          <SectionTitle>Descripción del producto</SectionTitle>
          <Divider />
          <Text>{description}</Text>
        </InfoBoxCompact>
      </ModalBox>
    </Overlay>
  );
  
  function formatPrice(price) {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0
    }).format(price);
  }
  
}