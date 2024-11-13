import React from 'react';

/**
 * Componente que muestra la lista de productos y la paginación.
 * @param {Array} products - Lista de productos obtenida de la API.
 * @param {number} currentPage - Página actual.
 * @param {function} onPageChange - Función para cambiar la página.
 */
const ProductList = ({ products, currentPage, onPageChange }) => {
  const productsPerPage = 5; // Número de productos por página
  const totalPages = Math.ceil(products.length / productsPerPage); // Total de páginas

  // Calcular los productos que se deben mostrar en la página actual
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const productsToShow = products.slice(startIndex, endIndex);

  // Mostrar un mensaje si no hay productos
  if (products.length === 0) {
    return <p>No se encontraron productos.</p>;
  }

  return (
    <div className="product-list">
      {productsToShow.map((product) => (
        <div key={product.id} className="product-item">
          <img
            src={product.thumbnail || 'https://via.placeholder.com/150'}
            alt={`Imagen de ${product.title} - Precio: $${product.price.toLocaleString('es-MX', { minimumFractionDigits: 2 })}`}
          />
          <h2>{product.title}</h2>
          {/* Formatear el precio utilizando toLocaleString() */}
          <p>
            <strong>
              Precio: ${product.price.toLocaleString('es-MX', { minimumFractionDigits: 2 })}
            </strong>
          </p>
        </div>
      ))}

      {/* Componente de paginación */}
      <div className="pagination">
        {/* Botón de "Anterior" */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </button>

        {/* Botones de número de página */}
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={currentPage === index + 1 ? 'active' : ''}
            onClick={() => onPageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        {/* Botón de "Siguiente" */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default ProductList;
