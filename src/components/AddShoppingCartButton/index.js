import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { MdAddShoppingCart } from 'react-icons/md';
import { addToShoppingCart } from '../../store/modules/shoppingCart/actions';

import { StyledButton } from './styles';

export default function AddShoppingCartButton({ burger }) {
  const amount = useSelector(state =>
    state.shoppingCart.reduce((sumAmount, shoppingCartBurger) => {
      sumAmount[shoppingCartBurger.id] = shoppingCartBurger.amount;
      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  function handleAddBurger(addedBurger) {
    dispatch(addToShoppingCart(addedBurger));
  }

  return (
    <StyledButton type="button" onClick={() => handleAddBurger(burger)}>
      <div>
        <MdAddShoppingCart size={16} color="#fff" /> {amount[burger.id] || 0}
      </div>

      <span>ADICIONAR AO CARRINHO</span>
    </StyledButton>
  );
}

AddShoppingCartButton.propTypes = {
  burger: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};
