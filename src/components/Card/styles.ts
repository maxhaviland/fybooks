import styled from 'styled-components';

import notFound from '../../assets/not-found.png';

export interface IPropsImage {
  url?: string
}

export const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 18px;
  color: #fff;
  padding: 15px 5px 5px 15px;
  margin: 0 auto;
  background-color: rgba(96, 26, 230, 0.9);
  opacity: 0;
  text-align: start;
`;

export const Container = styled.section`
  margin: 0 auto;
  background-color: #f5f2f2;
  border-radius: 4px #ebe8e8;
  width: 170px;
  border-radius: 2px;
  padding: 2px;
  overflow-y:auto; 
  background: transparent;
  ::-webkit-scrollbar {
    width: 0px;
  };
  
  cursor: pointer;

  &:hover{
    ${Title} {
      opacity: 1;
    }
  }
`;

export const Image = styled.section`
  background-image: url(${(props: IPropsImage) => props.url || notFound});
  background-size: 100% 100%;
  height: 230px;
  border-radius: 1px;
  box-shadow: 0px 0px 6px 0px rgba(227,227,227,1);
`;