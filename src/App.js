import React, { useState } from 'react';
import { searchProducts } from './api/mercadoLibreApi';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import Filters from './components/filters';  // Asegúrate de importar el componente de filtros
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState(''); // Estado para la categoría
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 }); // Estado para el rango de precios
  const [currentPage, setCurrentPage] = useState(1); // Paginación

  /**
   * Maneja la búsqueda de productos usando la query, categoría y rango de precios.
   * @param {string} query - Término de búsqueda ingresado por el usuario.
   */
  const handleSearch = async (query) => {
    const trimmedQuery = query.trim(); // Eliminar espacios en blanco antes y después
    if (!trimmedQuery) {
      setError('Por favor, ingresa un término de búsqueda válido.');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      // Buscar productos utilizando los filtros seleccionados
      const data = await searchProducts(query, categoryFilter, priceRange);
      setProducts(data.results);
    } catch (err) {
      // Si ocurre un error, mostrar el mensaje de error
      setError('Error al cargar productos');
    } finally {
      // Asegurarse de que loading siempre se establezca en false
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Buscador de productos de Mercado Libre</h1>

      {/* Filtros de búsqueda */}
      <Filters 
        setCategoryFilter={setCategoryFilter} 
        setPriceRange={setPriceRange}
      />
      
      {/* Barra de búsqueda */}
      <SearchBar onSearch={handleSearch} />

      {/* Mensaje de carga */}
      {loading && <p>Cargando productos...</p>}

      {/* Mensaje de error */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Lista de productos */}
      <ProductList 
        products={products} 
        currentPage={currentPage} 
        onPageChange={setCurrentPage} 
      />
    </div>
  );
}

export default App;
