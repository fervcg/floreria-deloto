// src/components/LazySection.jsx
import styled, { keyframes } from 'styled-components';
import { useInView } from '../hooks/useInView';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Section = styled.section`
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;

  ${({ visible }) => visible && `
    animation: ${fadeUp} 0.8s ease-out forwards;
  `}
`;

export default function LazySection({ children, id }) {
  const [ref, visible] = useInView({ rootMargin: '-100px' });
  return (
    <Section ref={ref} visible={visible} id={id}>
      {children}
    </Section>
  );
}