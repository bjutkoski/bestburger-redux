import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { formatPrice } from '../../util/format';

import {
  removeFromShoppingCart,
  updateAmount,
} from '../../store/modules/shoppingCart/actions';

import { Container, BurgerTable, Total } from './styles';

export default function ShoppingCart() {
  const dispatch = useDispatch();
  const shoppingCart = useSelector(state =>
    state.shoppingCart.map(burger => ({
      ...burger,
      subtotal: formatPrice(burger.price * burger.amount),
    }))
  );

  const total = useSelector(state =>
    formatPrice(
      state.shoppingCart.reduce(
        (sumSubtotal, burger) => sumSubtotal + burger.price * burger.amount,
        0
      )
    )
  );

  function handleRemoveFromShoppingCart(burgerId) {
    dispatch(removeFromShoppingCart(burgerId));
  }

  function increment(burger) {
    dispatch(updateAmount(burger.id, burger.amount + 1));
  }

  function decrement(burger) {
    dispatch(updateAmount(burger.id, burger.amount - 1));
  }

  return (
    <Container>
      {shoppingCart.length > 0 ? (
        <>
          <BurgerTable cellSpacing="0">
            <thead>
              <tr>
                <th alt="Imagem do Produto" />
                <th>PRODUTO</th>
                <th>QTD</th>
                <th>SUBTOTAL</th>
                <th alt="Excluir produto do carrinho" />
              </tr>
            </thead>
            <tbody>
              {shoppingCart.map(burger => (
                <tr>
                  <td>
                    <img src={burger.image} alt={burger.title} />
                  </td>
                  <td>
                    <strong>{burger.title}</strong>
                    <span>{burger.formattedPrice}</span>
                  </td>
                  <td>
                    <div>
                      <button type="button">
                        <MdRemoveCircleOutline
                          size={20}
                          color="#ee7500"
                          onClick={() => decrement(burger)}
                        />
                      </button>
                      <input type="number" readOnly value={burger.amount} />
                      <button type="button">
                        <MdAddCircleOutline
                          size={20}
                          color="#ee7500"
                          onClick={() => increment(burger)}
                        />
                      </button>
                    </div>
                  </td>
                  <td>
                    <strong>{burger.subtotal}</strong>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => handleRemoveFromShoppingCart(burger.id)}
                    >
                      <MdDelete size={20} color="#ee7500" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </BurgerTable>

          <footer>
            <button type="button">Finalizar pedido</button>

            <Total>
              <span>TOTAL</span>
              <strong>{total}</strong>
            </Total>
          </footer>
        </>
      ) : (
        <span>Carrinho vazio :(</span>
      )}
    </Container>
  );
}
