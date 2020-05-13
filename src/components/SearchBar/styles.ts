import styled from 'styled-components';
import { theme } from '../../styles/theme';
export const Form = styled.form`
  display: ${(props: { visible: boolean, search: boolean }) => props.visible ? 'flex' : 'none'};
  margin: ${(props: { visible: boolean, search: boolean }) => props.search ? '5vh 0 2vh 0' : '25vh 0 0 0'};
  justify-content: center;
  #icon-search {
    z-index: 1;
    font-size: 47px;
    color: ${theme.colors.secondary};
    cursor: pointer;
    background: #fff;
    margin-left: -4px;
    border-radius: 3px;
  }
  input {
    width: 64vw;
    padding: 1rem 0 1rem 0rem;
    border: none;
    border-bottom: solid 1px;
    outline: 0;
    z-index: 0;
    transition-duration: all 2s;
    border-radius: 3px;
    text-align: center;
  };
  input::placeholder { text-align: center }

  input:focus { 
    ::placeholder {
      color: blue;
      opacity: 0.5;
    }
  };

  animation-name: fadeInOpacitySeatchBar;
	animation-iteration-count: 1;
	animation-timing-function: ease-in-out;
  animation-duration: 4s;
  transition: transform 5s;

  @keyframes fadeInOpacitySeatchBar {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const ActiveSearch = styled.div`
  display: ${(props: { visible: boolean; search: boolean; }) => props.visible ? 'none' : 'block'};
  font-size: ${(props: { visible: boolean; search: boolean }) => props.search ? '80px' : '150px'};
  margin-top: ${(props: { visible: boolean; search: boolean }) => props.search ? '5vh' : '25vh'};
  text-align: center;
  p{
    font-size:20px;
  }
  opacity: 1;
  animation-name: fadeInOpacity;
	animation-iteration-count: 1;
	animation-timing-function: ease-in-out;
  animation-duration: 1.3s;
  #search {
    transition: transform 1s;
    opacity: 1;
    cursor: pointer;
  }
  #search:hover {
    transform: scale(1.2);
    animation-name: fadeInSize;
    animation-iteration-count: inherit;
    animation-timing-function: ease;
    animation-duration: 2s;
    color: ${theme.colors.secondary};
    @keyframes fadeInSize {
      0% { opacity: 0.5 }
      100% { opacity: 1 }
    }
  }
  @keyframes fadeInOpacity {
    0% { opacity: 0 }
    100% { opacity: 1 }
  }
  #not-found { font-size: 40px };
`;