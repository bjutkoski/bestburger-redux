import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import {
  removeFromShoppingCart,
  updateAmount,
} from '../../store/modules/shoppingCart/actions';

import { Container, ProductTable, Total } from './styles';

export default function ShoppingCart() {
  const dispatch = useDispatch();
  const shoppingCart = useSelector(state => state.shoppingCart);

  function handleRemoveFromShoppingCart(productId) {
    dispatch(removeFromShoppingCart(productId));
  }

  function handleUpdateAmount(productId, amount) {
    dispatch(updateAmount(productId, amount));
  }

  return (
    <Container>
      <ProductTable>
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
          {shoppingCart.map(product => (
            <tr>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.formattedPrice}</span>
              </td>
              <td>
                <div>
                  <button type="button">
                    <MdRemoveCircleOutline
                      size={20}
                      color="#7159c1"
                      onClick={() =>
                        handleUpdateAmount(product.id, product.amount - 1)
                      }
                    />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button">
                    <MdAddCircleOutline
                      size={20}
                      color="#7159c1"
                      onClick={() =>
                        handleUpdateAmount(product.id, product.amount + 1)
                      }
                    />
                  </button>
                </div>
              </td>
              <td>
                <strong>R$73,80</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => handleRemoveFromShoppingCart(product.id)}
                >
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$1920,28</strong>
        </Total>
      </footer>
    </Container>
  );
}
