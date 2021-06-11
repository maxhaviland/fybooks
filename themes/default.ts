import { ApplicationTheme, ColorProps } from '../interfaces';

const primary: ColorProps = {
  low: '',
  middle: '',
  strong: ''
};

const secondary: ColorProps = {
  low: '',
  middle: '',
  strong: ''
};

const success: ColorProps = {
  low: '',
  middle: '',
  strong: ''
};

const warning: ColorProps = {
  low: '',
  middle: '',
  strong: ''
};

const error: ColorProps = {
  low: '',
  middle: '',
  strong: ''
};

const information: ColorProps = {
  low: '',
  middle: '',
  strong: ''
};

export const defaultTheme: ApplicationTheme = {
  colors: { primary, secondary, success, error, warning, information },
  breakpoints: {
    desktop: 0,
    smartphone: 0,
    tablet: 0
  }
};
