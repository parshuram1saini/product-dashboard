import axios from 'axios';

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';
export const SET_CATEGORY = 'SET_CATEGORY';

const productApiUrl = 'https://fakestoreapi.com/products';

export const fetchProducts = (searchQuery = '', category = '') => async (dispatch) => {
  dispatch({ type: FETCH_PRODUCTS_REQUEST });
  try {
    let url = productApiUrl;
    if (category) {
      url += `/category/${category}`;
    }
    const response = await axios.get(url);

    let CategoriesApiUrl = `${productApiUrl}/categories` 
    const productCategoriesResponse = await axios.get(CategoriesApiUrl);
    
    let products = response.data;
    let categories = productCategoriesResponse.data

    if (searchQuery) {
      products = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload:{ products, categories}});
  } catch (error) {
    dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error.message });
  }
};

export const setSearchQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  payload: query,
});

export const setCategory = (category) => ({
  type: SET_CATEGORY,
  payload: category,
});
