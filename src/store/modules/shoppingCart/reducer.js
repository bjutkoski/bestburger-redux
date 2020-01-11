import produce from 'immer';
import Types from './types';

const INITIAL_STATE = [];

export default function shoppingCart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_TO_SHOPPING_CART:
      return produce(state, draft => {
        const { product } = action.payload;
        const productIndex = draft.findIndex(p => p.id === product.id);
        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        } else {
          draft.push({ ...product, amount: 1 });
        }
      });
    case Types.UPDATE_AMOUNT:
      return produce(state, draft => {
        const { productId, amount } = action.payload;

        const productIndex = draft.findIndex(p => p.id === productId);
        if (productIndex >= 0) {
          draft[productIndex].amount = amount;
        }
      });
    case Types.REMOVE_FROM_SHOPPING_CART:
      return produce(state, draft => {
        const { productId } = action.payload;

        const productIndex = draft.findIndex(p => p.id === productId);
        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    default:
      return state;
  }
}
