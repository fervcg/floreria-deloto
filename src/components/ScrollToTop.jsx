// src/components/ScrollToTop.jsx
import { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";


const Button = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: #e63946;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 0.7rem;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  transition: opacity 0.3s ease, transform 0.3s ease;
  font-size: 1.3rem;

  &:hover {
    transform: scale(1.1);
    background-color: #d62839;
  }
`;

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleScroll = () => {
    scroll.scrollToTop({ duration: 400, smooth: true });
  };

  return (
    visible && (
      <Button onClick={handleScroll}>
        <FontAwesomeIcon icon={faArrowUp} />
      </Button>
    )
  );
}