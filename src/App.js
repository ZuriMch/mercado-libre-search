import React, { useState } from 'react';
import { searchProducts } from './api/mercadoLibreApi';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const data = await searchProducts(query);
      setProducts(data.results);
    } catch (err) {
      setError('Error al cargar productos');
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <h1>Buscador de Mercado Libre</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && (
        <div className="loading">
          <div className="spinner"></div>
          Cargando productos...
        </div>
      )}
      {error && <p>{error}</p>}
      <ProductList products={products} />
    </div>
  );
}

export default App;
