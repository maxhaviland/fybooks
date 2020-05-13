import React from 'react';
import Spinner from "react-spinners/ClipLoader";

import { style } from './styles';
import { theme } from '../../styles/theme';

interface IProps {
  loading: boolean;
}

const IsLoading: React.FC<IProps> = ({ loading = false }) => {
  return <Spinner css={style} size={140} color={theme.colors.secondary} loading={loading} />
}

export default IsLoading;