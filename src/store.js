

import {createStore} from 'redux' ;

const reducer = (state, action ) => {

    if( action.type === 'ADD_TO_CART'){
        return {
            ...state,
            cart : state.cart.concat(action.product)
        }
    }

    if( action.type === 'DELETE_TO_CART'){
        return {
            ...state,
            cart : state.cart.filter(function(obj ){
              return obj.id !== action.product.id;  
            })
            //cart : state.cart.filter( obj => obj.id !== action.product.id )
        }
    }

    return state; 
}

export default createStore(reducer, {cart : []});