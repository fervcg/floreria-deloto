// src/components/ProductGrid.jsx

import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import FilterBar from './FilterBar';
import ProductModal from './ProductModal';
import { getProducts } from '../services/airtable';
import styled from 'styled-components';

export default function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    getProducts().then((data) => {
      if (Array.isArray(data)) {
        setProducts(data);
        setFiltered(data);
      } else {
        setProducts([]);
        setFiltered([]);
      }
      setLoading(false);
    });
  }, []);

  // Cada vez que cambien productos, categoría o búsqueda, filtramos
  useEffect(() => {
    let result = products;

    // 1. Filtrar por categoría
    if (activeCategory !== 'Todos') {
      result = result.filter((p) => {
        if (Array.isArray(p.category)) {
          return p.category.some(
            (cat) => cat.toLowerCase().trim() === activeCategory.toLowerCase()
          );
        }
        return (
          p.category.toLowerCase().trim() ===
          activeCategory.toLowerCase().trim()
        );
      });
    }

    // 2. Filtrar por término de búsqueda en nombre, categoría o descripción
    const term = searchTerm.trim().toLowerCase();
    if (term !== '') {
      result = result.filter((p) => {
        const nameMatch = p.name.toLowerCase().includes(term);
        const categoryMatch = Array.isArray(p.category)
          ? p.category.some((cat) => cat.toLowerCase().includes(term))
          : p.category.toLowerCase().includes(term);
        const descriptionMatch = p.description
          ? p.description.toLowerCase().includes(term)
          : false;

        return nameMatch || categoryMatch || descriptionMatch;
      });
    }

    setFiltered(result);
  }, [products, activeCategory, searchTerm]);

  const handleFilter = (category) => {
    setActiveCategory(category);
  };

  return (
    <Container>
      <h1>CATÁLOGO</h1>
      <p>
        Presiona la categoría que te interesa o desliza hacia abajo para ver todos
        nuestros productos.
      </p>

      {/* Filtro por categoría */}
      <FilterBar
        selectedCategory={activeCategory}
        onCategoryChange={handleFilter}
      />
      
            {/* Buscador */}
      <SearchWrapper>
        <SearchInput
          type="text"
          placeholder="Buscar por tipo de flor o palabra clave..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchWrapper>

      {/* Grid */}
      {loading ? (
        <p style={{ textAlign: 'center' }}>Cargando productos...</p>
      ) : filtered.length > 0 ? (
        <Grid>
          {filtered.map((product) => (
            <div key={product.id} onClick={() => setSelectedProduct(product)}>
              <ProductCard {...product} />
            </div>
          ))}
        </Grid>
      ) : (
        <p style={{ textAlign: 'center' }}>
          No hay productos que coincidan con la búsqueda.
        </p>
      )}

      {/* Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </Container>
  );
}

// Styled-components

const Container = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;

  h1 {
    text-align: center;
    font-size: 28px;
    font-family: 'Bitter', serif;
    font-weight: 600;
    margin-bottom: 0rem;
    margin-top: 1rem;
    padding: 1rem;
  }

  p {
    text-align: center;
    font-size: 18px;
    font-family: 'PT Serif', serif;
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: 1rem;
  }
`;

const SearchWrapper = styled.div`
  width: 100%;
  margin: 0rem 0 3rem;
  display: flex;
  justify-content: left;
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  border: 2px solid #ccc;
  border-radius: 20px;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #183D3D;
  }
`;

const Grid = styled.div`
  display: grid;
  text-align: center;
  max-width: 1200px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  padding: 1rem 0rem;
`;