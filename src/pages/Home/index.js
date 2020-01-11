import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

import { addToShoppingCart } from '../../store/modules/shoppingCart/actions';

import { ProductList } from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }
    getProducts();
  }, []);

  const dispatch = useDispatch();

  function handleAddItem(product) {
    dispatch(addToShoppingCart(product));
  }

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>

          <button type="button" onClick={() => handleAddItem(product)}>
            <div>
              <MdAddShoppingCart size={16} color="#fff" /> 2
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}
