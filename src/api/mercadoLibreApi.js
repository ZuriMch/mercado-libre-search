import axios from 'axios';

// Crear una instancia de axios para hacer las peticiones a la API de Mercado Libre
const api = axios.create({
  baseURL: 'https://api.mercadolibre.com', // URL base de Mercado Libre
});

// Función para buscar productos con filtros
export const searchProducts = async (query, categoryFilter, priceRange) => {
  try {
    // Creamos los parámetros que vamos a pasar a la API
    const params = {
      q: query, // Término de búsqueda
      category: categoryFilter || '',  // Filtro de categoría (si no se pasa, se considera vacío)
      price: priceRange ? `${priceRange.min}-${priceRange.max}` : '',  // Filtro de precio
    };

    // Hacemos la petición GET con los parámetros
    const response = await api.get('/sites/MLM/search', { params });

    // Devolvemos los datos obtenidos
    return response.data;
  } catch (error) {
    console.error('Error al obtener productos:', error);
    throw error;  // Si hay un error, lo lanzamos para que pueda ser manejado en el componente
  }
};
