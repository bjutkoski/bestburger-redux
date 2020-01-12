import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

import AddShoppingCartButton from '../../components/AddShoppingCartButton';

import { BurgerList, SearchBurgers } from './styles';

export default function Home() {
  const [burgers, setBurgers] = useState([]);
  const [filteredBurgers, setFilteredBurgers] = useState([]);

  useEffect(() => {
    async function getBurgers() {
      const response = await api.get('burgers');

      const data = response.data.map(burger => ({
        ...burger,
        priceFormatted: formatPrice(burger.price),
      }));

      setBurgers(data);
    }
    getBurgers();
  }, []);

  const [query, setQuery] = useState('');
  useEffect(() => {
    function filterBurgers(burger) {
      const re = new RegExp(query, 'gi');
      return String(burger.id).match(re) || burger.title.match(re);
    }
    setFilteredBurgers(burgers.filter(filterBurgers));
  }, [burgers, query]);

  return (
    <>
      <SearchBurgers>
        <div>
          <input
            type="text"
            onChange={e => setQuery(e.target.value)}
            placeholder="Buscar por descrição ou ID"
          />
        </div>
      </SearchBurgers>
      <BurgerList>
        {filteredBurgers.map(burger => (
          <li key={burger.id}>
            <Link to={`/burger/${burger.id}`}>
              <img src={burger.image} alt={burger.title} />
              <strong>{burger.title}</strong>
              <p>{`(ID: ${burger.id})`}</p>
              <span>{burger.priceFormatted}</span>
            </Link>
            <AddShoppingCartButton burger={burger} />
          </li>
        ))}
      </BurgerList>
    </>
  );
}
