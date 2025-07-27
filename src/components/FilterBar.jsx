import styled from "styled-components";

const categories = [
  "Todos",
  "Ramos de Flores",
  "Ramos para Matrimonio",
  "Floreros",
  "Flores Secas",
  "Cajas y Arreglos Florales",
  "Condolencias",
  "OFERTAS"
];

const FilterContainer = styled.div`
  margin-bottom: 3rem;
`;


const Bar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem;
  background-color: white;
  border-radius: 16px;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #1A3636;
  color: #FAF0E6;
  border: none;
  border-radius: 9999px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: #56776C;
    color: white;
  }

  &.active {
    background-color: #56776C;
    color: white;
  }
`;

export default function FilterBar({ selectedCategory, onCategoryChange }) {
  return (
    <FilterContainer>
      <Bar>
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={selectedCategory === category ? "active" : ""}
          >
            {category}
          </Button>
        ))}
      </Bar>
    </FilterContainer>
  );
  
}