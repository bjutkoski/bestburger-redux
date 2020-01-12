import styled from 'styled-components';
import { darken } from 'polished';

export const StyledButton = styled.button`
  background: #ee7500;
  color: #fff;
  border: 0;
  border-radius: 4px;
  overflow: hidden;
  margin-top: auto;

  display: flex;
  align-items: center;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.06, '#ee7500')};
  }

  div {
    display: flex;
    align-items: center;
    padding: 12px;
    background: rgba(0, 0, 0, 0.1);

    svg {
      margin-right: 5px;
    }
  }

  span {
    flex: 1;
    text-align: center;
    font-weight: bold;
  }
`;
