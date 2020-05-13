import React, { useContext, useEffect } from 'react';

import { BooksContext } from '../contexts/BooksContext';
import { getParams } from '../services/query';
import { useLocation } from 'react-router-dom';

import If from '../components/If';
import ListBooks from '../components/List';

const Books = () => {
  const { action, state } = useContext(BooksContext);
  const { books } = state.request;

  const location = useLocation().search;
  const params = getParams(location);

  useEffect(() => { location && action.requestBooks(params.book, params.page) }, [location])

  return (
    <If condition={!state.isLoading && books.totalItems > 0}>
      <ListBooks books={books.items} totalItems={books.totalItems} book={params.book} />
    </If>
  )
};

export default Books;
