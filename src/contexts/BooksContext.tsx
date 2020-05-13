import React, { createContext, useState, useReducer } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import IBook from '../interfaces/IBook';

import { fetchBook, fetchBooks, IRequest } from '../services/fetch';
import IsLoading from '../components/IsLoading';
import If from '../components/If';

interface IProps {
  children: JSX.Element[] | JSX.Element;
};

interface IContext {
  action: IAction;
  state: IState;
};

interface IState {
  book: IBook;
  request: IRequest;
  isLoading: boolean;
};

interface IAction {
  requestBook(id: string): Promise<void>;
  requestBooks(book: string, page: number, limit?: number): Promise<void>;
}

export const BooksContext = createContext({} as IContext);

const BooksProvider: React.FC<IProps> = ({ children }) => {

  const [book, setBook] = useState<IBook>({} as IBook);

  const [request, setRequest] = useState<IRequest>({
    books: { items: [], kind: '', totalItems: 0 },
    status: 0,
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const requestBook = async (id: string): Promise<void> => {
    setIsLoading(true);
    const response = await fetchBook(id);
    setBook(response);
    setIsLoading(false);
  };

  const requestBooks = async (book: string, page: number = 1): Promise<void> => {
    setIsLoading(true);

    const { books, status } = await fetchBooks(book, page);


    setRequest({
      books: books,
      status: status
    })
    setIsLoading(false);

    books.totalItems > 0
      ? notify(`${books.items.length} books found!`, 'success')
      : notify(`Books not found!`, 'error')

  };

  type themeNotify = 'success' | 'error';
  const notify = (message: string, theme: themeNotify) => toast(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    type: theme
  });

  const action: IAction = { requestBook, requestBooks };

  const state: IState = { book, request, isLoading };

  return (
    <BooksContext.Provider value={{ action, state }}>
      <IsLoading loading={isLoading} />
      <ToastContainer />
      {children}
    </BooksContext.Provider>
  )
};

export default BooksProvider;

