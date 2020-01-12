import styled from 'styled-components';

export const BurgerList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;

    strong,
    p,
    span {
      text-align: center;
    }

    a {
      display: flex;
      flex-direction: column;

      img {
        align-self: center;
        max-width: 250px;
      }

      > strong {
        font-size: 16px;
        line-height: 20px;
        color: #333;
      }

      > p {
        font-size: 12px;
        line-height: 20px;
        color: #636363;
      }

      > span {
        font-size: 21px;
        font-weight: bold;
        margin: 5px 0 20px;
        color: black;
      }
    }
  }
`;

export const SearchBurgers = styled.div`
  margin: 14px 0;

  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 12px;
    border-radius: 4px;

    background: linear-gradient(#d69764, #ee7500);
    height: 42px;

    input {
      border: none;
      border-radius: 4px;
      width: 280px;
      height: 24px;
      padding: 5px;
    }
  }
`;
