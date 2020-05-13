import React from 'react';
import { useHistory } from 'react-router';

import IItem from '../../interfaces/IBook';

import Card from '../Card';
import Pagination from '../Pagination';
import { Container, List, Item } from './styles';

interface IProps {
  books: IItem[];
  totalItems: number
  book?: string;
};

const ListBooks: React.FC<IProps> = ({ books, totalItems, book }) => {
  const history = useHistory();
  
  const createListBooks = books.map(book => (
    <Item onClick={() => history.push(`details?book=${book.id}`)} key={book.id}>
      <Card
        title={book.volumeInfo.title}
        image={book.volumeInfo.imageLinks?.thumbnail}
      />
    </Item>
  ))

  return (
    <>
      <Container>
        <List>{createListBooks}</List>
      </Container>
      <Pagination totalItems={totalItems} />
    </>
  )
};

export default ListBooks;