import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { MdShoppingCart } from 'react-icons/md';

import { Container, ShoppingCart } from './styles';

import logo from '../../assets/images/logo.svg';

export default function Header() {
  const cartSize = useSelector(state => state.shoppingCart.length);

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Burger Shop" />
      </Link>

      <ShoppingCart to="/shoppingcart">
        <div>
          <strong>MEU CARRINHO</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingCart size={36} color="#fff" />
      </ShoppingCart>
    </Container>
  );
}
