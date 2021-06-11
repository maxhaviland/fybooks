import { FC } from "react";
import ImageNext from 'next/image';
import StyledComponent from 'styled-components';
import { CoverOptions } from "../../declarations/types";

const Image = StyledComponent(ImageNext).attrs({
  'data-testid': 'cover',
})``;

interface CoverProps {
  image: string
  title: string
  height: string | number 
  width: string | number
}

const loader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const Cover: FC<CoverProps> = ({ image, title, height, width }) => (
  <>
    <Image loader={loader} width={width} height={height} src={image || '/images/cover.svg'} alt={title} />
  </>
)

export default Cover;
