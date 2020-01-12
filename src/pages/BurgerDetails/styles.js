import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto auto;
  grid-template-areas:
    'burgerinfo description'
    'burgerinfo nutritionfacts'
    'burgerinfo nutritionfacts';

  > div {
    background: #fff;
    border-radius: 4px;
    padding: 20px;

    h2 {
      display: block;
      background: #636363;
      color: #fff;
      padding: 5px;
    }
  }
`;

export const BurgerInfo = styled.div`
  grid-area: burgerinfo;
  display: flex;
  flex-direction: column;

  img {
    align-self: center;
    max-width: 100%;
  }

  > strong {
    text-align: center;
    font-size: 24px;
    line-height: 20px;
    color: #333;
    margin-top: 10px;
  }

  > span {
    text-align: center;
    font-size: 21px;
    font-weight: bold;
    margin: 10px 0 40px;
    color: black;
  }
`;

export const Description = styled.div`
  grid-area: description;
  display: flex;
  flex-direction: column;

  p {
    display: block;
    margin-top: 10px;
    font-size: 18px;
  }
`;

export const NutritionFacts = styled.div`
  grid-area: nutritionfacts;
  table {
    width: 100%;

    td {
      background: #d69764;
      padding: 5px;
      color: #fff;
      font-weight: bold;
      font-size: 16px;
      border-top: 2px solid #fff;
    }

    td:nth-child(2) {
      border-left: 2px solid #fff;
      text-align: center;
    }
  }
`;
