import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  max-width: 1000px;
  display: grid;
  align-items: center;
  margin: 0 auto;
  margin-top: 2rem;
  justify-content: center;
  grid-template-areas: "group0 group0""group1 group2";
  border-radius: 4px;
  padding: 2rem;

  #link {
    display: flex;
    justify-content: center;
    padding: 1rem;
    font-size: 35px;
    justify-content: space-between;
  }
  #title {
    position: absolute;
  }
  
  .link { text-decoration: none; color: ${theme.text}; transition: all 0.7s; cursor: pointer; }
  .link:hover { color: ${theme.colors.secondary}; transform: scale(1.2); }


  #group0 { grid-area: group0; color:${theme.colors.secondary} }

  #scroll-description {  height: 200px; }
  #group1 { 
    grid-area: group1; 
    img{width: 200px; height: 300px; transition: all 1.2s; box-shadow: 0px 0px 5px 0px rgba(227,227,227,1); border-radius: 2px;} 
    img:hover { filter: brightness(70%)  }
    width: 200px;
    margin-top: 4.6rem;
  }
  #group2 { grid-area: group2; text-align: justify; padding: 0 2rem 0 2rem; width: 800px;  }

  @media screen and (max-width: 960px) {
    #title { margin-top: -14rem; text-align: center; position:relative};
    #group1 { margin: 0 auto; }
    #group1 { grid-area: group0 };
    #group2 { grid-area: group1; width: 80vw; };
    #link { padding: 0; margin: 10px 0 10px 0; font-size: 26px; }

  }
  
`;