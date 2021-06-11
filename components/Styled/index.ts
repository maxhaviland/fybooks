import styled from 'styled-components';
import { Breakpoints } from '../../interfaces';

interface StyledProps {
  margin?: string[] | string | Breakpoints;
  padding?: string[] | string | Breakpoints;

  background?: string[] | string | Breakpoints;
  backgroundColor?: string[] | string | Breakpoints;
  color?: string[] | string | Breakpoints;

  border?: string[] | string | Breakpoints;
}

function applyProps(props: StyledProps) {
  const propsKeys = Object.keys(props);
  const propsValues = Object.values(props);

  const snakeCaseKeys = propsKeys.map((key: string, position: number) => 1);
}

export const Styled = styled.div<StyledProps>`
  ${(props) => applyProps(props)};
`;
