import axios from 'axios';

/* eslint-disable */
const loadProducts = () => {

    return dispatch => {
        return axios.get('http://localhost:3001/products')
            .then(response => {

                debugger;
                
                dispatch({
                    type: 'REPLACE_PRODUCTS',
                    products: response.data
                });
            });
        }; 
};

const addToCart = product => {
    return {
        type: 'ADD_TO_CART',
        product
    };
};

const removeFromCart = product => {
    return {
        type: 'DELETE_TO_CART',
        product
    };
};

export  {addToCart, removeFromCart, loadProducts};