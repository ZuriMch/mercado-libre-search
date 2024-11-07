import axios from 'axios';

// Crea una instancia de Axios con la URL base de Mercado Libre
const api = axios.create({
  baseURL: 'https://api.mercadolibre.com',
});

export const searchProducts = async (query) => {
  try {
    const response = await api.get(`/sites/MLM/search`, {
      params: { q: query },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
