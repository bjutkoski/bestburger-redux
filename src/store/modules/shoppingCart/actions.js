import Types from './types';

export function addToShoppingCart(burger) {
  return {
    type: Types.ADD_TO_SHOPPING_CART,
    payload: { burger },
  };
}

export function updateAmount(burgerId, amount) {
  return {
    type: Types.UPDATE_AMOUNT,
    payload: { burgerId, amount },
  };
}
export function removeFromShoppingCart(burgerId) {
  return {
    type: Types.REMOVE_FROM_SHOPPING_CART,
    payload: { burgerId },
  };
}
