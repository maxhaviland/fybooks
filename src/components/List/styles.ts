import styled from 'styled-components';
import {theme} from '../../styles/theme';

export const Container = styled.ul`
  padding: 2rem 0 2rem 0;
  margin: 0 auto;
  p {
    text-align: center;
    font-size: 19px;
  }
  max-width: 1000px;
`

export const List = styled.ul`
  display: grid;
  grid-auto-flow: row;  
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas: 1px;
  grid-template-rows: 1fr;
  grid-gap: 1rem;
  justify-content: center;
  justify-items: center;
  align-content: center;
  margin: 0 auto;
  padding: 0;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr)
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Item = styled.li`
  list-style: none;
`;
