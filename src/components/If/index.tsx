import React from 'react';

interface IProps {
  children?: JSX.Element[] | JSX.Element;
  condition: boolean;
};

const If: React.FC<IProps> = ({ condition, children }) => <>{condition ? children : ''}</>

export default If;