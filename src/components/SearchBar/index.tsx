import React, { useRef, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IoIosSearch } from 'react-icons/io'

import { BooksContext } from '../../contexts/BooksContext'
import If from '../If';
import { ActiveSearch, Form } from './styles';


const SearchBar = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const inputRef = useRef<any>(null);
  const history = useHistory();
  const { state } = useContext(BooksContext);
  const { status, books: { totalItems } } = state.request;
  const conditionalMessage = totalItems === 0 && state.request.status !== 0;

  const submit = (event: any) => {
    event.preventDefault();
    let input = inputRef.current;
    if (input.value) {
      setVisible(false)
      history.push(`/?books=${input.value}`)
      input.value = '';
    }
  }

  return (
    <If condition={!state.isLoading}>
      <Form onSubmit={submit} search={!conditionalMessage} visible={visible}>
        <input
          id="input-search"
          ref={inputRef}
          type="text"
          placeholder="Search books by Title, Author, Published Date, Picture, etc"
        />
        <IoIosSearch id="icon-search" onClick={submit} />
      </Form>
      <ActiveSearch search={!conditionalMessage} visible={visible && !state.isLoading} onClick={() => setVisible(true)}>
        <p>Search books by Title, Author, Published Date, Picture, etc</p>
        <IoIosSearch id="search" />
        {!conditionalMessage ? '' : <p id="not-found">NOT FOUND</p>}
      </ActiveSearch>
    </If>
  )
};


export default SearchBar;