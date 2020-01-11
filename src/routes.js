import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/shoppingcart" component={ShoppingCart} />
    </Switch>
  );
}
