import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.section`
  .pagination {
  display: flex;
  margin: 0 auto;
  padding: 0;
  justify-content: center; 
  background: ${theme.background};
}
  .pagination li {
    padding: 1rem;
    color: #337ab7;
    text-decoration: none;
    list-style: none;
    cursor: pointer;
  }
  .pagination>li>a,
  .pagination>li>span {
    padding: 6px 12px;
    color: #337ab7;
    text-decoration: none;
    background-color: #fff;
    border-radius: 3px;
    border: 1px solid #ddd;

  }
  li.active>a {
    background-color: #c9c9c9;
    color: black;
  }
  [role=button] {
    cursor: pointer;
  }
`;