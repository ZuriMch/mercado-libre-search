import React from 'react';

const Filters = ({ setCategoryFilter, setPriceRange }) => {
  // Función para manejar los cambios en el filtro de categoría
  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  // Función para manejar los cambios en el rango de precios
  const handlePriceRangeChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prevRange) => ({
      ...prevRange,
      [name]: value
    }));
  };

  return (
    <div className="filters">
      {/* Filtro de categoría */}
      <div className="filter-category">
        <label>Seleccionar categoría:</label>
        <select onChange={handleCategoryChange}>
          <option value="">Todas</option>
          <option value="MLM1055">Electrónica</option> {/* Usa categorías válidas */}
          <option value="MLM1059">Ropa y Accesorios</option>
          <option value="MLM1144">Hogar y Muebles</option>
        </select>
      </div>

      {/* Filtro de precio */}
      <div className="filter-price">
        <label>Rango de precio:</label>
        <input 
          type="number" 
          name="min" 
          onChange={handlePriceRangeChange} 
          placeholder="Precio mínimo" 
        />
        <input 
          type="number" 
          name="max" 
          onChange={handlePriceRangeChange} 
          placeholder="Precio máximo" 
        />
      </div>
    </div>
  );
};

export default Filters;
