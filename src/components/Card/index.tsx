import React, { memo } from 'react';

import { Container, Title, Image } from './styles';

interface IProps {
  title?: string,
  image?: string
};

const Card: React.FC<IProps> = ({ title, image }) => {
  return (
    <Container>
      <Image url={image}>
        <Title>{title}</Title>
      </Image>
    </Container>
  )
};

export default memo(Card);