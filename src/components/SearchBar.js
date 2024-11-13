import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

/**
 * Componente para la barra de búsqueda.
 * @param {function} onSearch - Función que se ejecuta cuando se realiza una búsqueda.
 */
const SearchBar = ({ onSearch }) => {
  // Estado para almacenar el término de búsqueda ingresado por el usuario
  const [query, setQuery] = useState('');

  /**
   * Función para manejar el clic en el botón de búsqueda.
   * Verifica si hay un término de búsqueda válido antes de ejecutar la búsqueda.
   */
  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    } else {
      alert('Por favor ingresa un término de búsqueda.'); // Mensaje de alerta si el campo está vacío
    }
  };

  /**
   * Función para manejar la tecla "Enter" en el campo de búsqueda.
   * Permite al usuario buscar al presionar Enter en lugar de hacer clic en el botón.
   */
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-bar">
      {/* Campo de entrada para el término de búsqueda */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress} // Añadir la funcionalidad de búsqueda con Enter
        placeholder="Buscar productos..."
      />
      {/* Botón de búsqueda con ícono */}
      <button onClick={handleSearch}>
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
