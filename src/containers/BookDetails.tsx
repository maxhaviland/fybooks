import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { BooksContext } from '../contexts/BooksContext';

import Details from '../components/Details';
import If from '../components/If';

const BookDetails = () => {

  const { action, state: { book, isLoading } } = useContext(BooksContext);

  const location = useLocation().search;
  const id = location.replace(/[?]book=/g, '');

  useEffect(() => { action.requestBook(id) }, [])

  return (
    <If condition={!isLoading}>
      <Details book={book} />
    </If>
  )
};

export default BookDetails;