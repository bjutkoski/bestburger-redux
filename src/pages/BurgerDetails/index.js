import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

import AddShoppingCartButton from '../../components/AddShoppingCartButton';

import { Container, BurgerInfo, Description, NutritionFacts } from './styles';

export default function BurgerDetails({ match }) {
  const [burger, setBurger] = useState(undefined);

  useEffect(() => {
    async function getBurger(burgerId) {
      const response = await api.get(`burgers/${burgerId}`);

      const { data: loadedBurger } = response;

      setBurger({
        ...loadedBurger,
        priceFormatted: formatPrice(loadedBurger.price),
      });
    }

    const { id } = match.params;
    getBurger(id);
  }, [match]);

  return burger ? (
    <Container>
      <BurgerInfo>
        <img src={burger.image} alt={burger.title} />
        <strong>{burger.title}</strong>
        <span>{burger.priceFormatted}</span>
        <AddShoppingCartButton burger={burger} />
      </BurgerInfo>
      <Description>
        <h2>Descrição</h2>
        <p>{burger.description}</p>
      </Description>
      <NutritionFacts>
        <h2>Informação Nutricional</h2>
        <table cellSpacing="0">
          <tbody>
            {burger.nutritionFacts.map(fact => (
              <tr>
                <td>{fact.name}</td>
                <td>{fact.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </NutritionFacts>
    </Container>
  ) : (
    <div>Carregando produto...</div>
  );
}

BurgerDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
