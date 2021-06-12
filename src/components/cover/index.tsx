import { FC } from "react";
import ImageNext from 'next/image';
import StyledComponent from 'styled-components';

const Image = StyledComponent('img').attrs({
  'data-testid': 'cover',
})``;

interface CoverProps {
  image: string
  title: string
  height: string | number 
  width: string | number
}


const Cover: FC<CoverProps> = ({ image, title, height, width }) => (
  <>
    <Image width={width} height={height} src={image || '/images/cover.svg'} alt={title} />
  </>
)

export default Cover;
