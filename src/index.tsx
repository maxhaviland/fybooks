import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import BooksProvider from './contexts/BooksContext';


ReactDOM.render(
  <BooksProvider>
    <App />
  </BooksProvider>,
  document.getElementById('root')
);
