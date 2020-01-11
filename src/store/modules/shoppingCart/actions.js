import Types from './types';

export function addToShoppingCart(product) {
  return {
    type: Types.ADD_TO_SHOPPING_CART,
    payload: { product },
  };
}

export function updateAmount(productId, amount) {
  return {
    type: Types.UPDATE_AMOUNT,
    payload: { productId, amount },
  };
}
export function removeFromShoppingCart(productId) {
  return {
    type: Types.REMOVE_FROM_SHOPPING_CART,
    payload: { productId },
  };
}
