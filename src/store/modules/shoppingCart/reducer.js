import produce from 'immer';
import Types from './types';

const INITIAL_STATE = [];

export default function shoppingCart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_TO_SHOPPING_CART:
      return produce(state, draft => {
        const { burger } = action.payload;
        const burgerIndex = draft.findIndex(p => p.id === burger.id);
        if (burgerIndex >= 0) {
          draft[burgerIndex].amount += 1;
        } else {
          draft.push({ ...burger, amount: 1 });
        }
      });
    case Types.UPDATE_AMOUNT: {
      const { burgerId, amount } = action.payload;
      if (amount <= 0) {
        return state;
      }
      return produce(state, draft => {
        const burgerIndex = draft.findIndex(p => p.id === burgerId);
        if (burgerIndex >= 0) {
          draft[burgerIndex].amount = amount;
        }
      });
    }
    case Types.REMOVE_FROM_SHOPPING_CART:
      return produce(state, draft => {
        const { burgerId } = action.payload;

        const burgerIndex = draft.findIndex(p => p.id === burgerId);
        if (burgerIndex >= 0) {
          draft.splice(burgerIndex, 1);
        }
      });
    default:
      return state;
  }
}
