export type ColorProps = {
  low: string;
  middle: string;
  strong: string;
};

export type Color = {
  primary: ColorProps;
  secondary: ColorProps;
  error: ColorProps;
  warning: ColorProps;
  success: ColorProps;
  information: ColorProps;
};

export type Breakpoints = {
  smartphone: number;
  tablet: number;
  desktop: number;
};

export interface ApplicationTheme {
  colors: Color;
  breakpoints: Breakpoints;
}
