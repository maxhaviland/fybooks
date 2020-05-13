import IBooks from '../interfaces/IBooks';
import IBook from '../interfaces/IBook';

export const api: IApi = {
  url: `https://www.googleapis.com/books/v1/volumes`,
  options: {
    limit: 12
  }
}

interface IApi {
  url: string;
  options: {
    limit: number
  }
}

export interface IParams {
  book: string;
  page: number;
}

export interface IRequest {
  status: number;
  books: IBooks;
};

export async function fetchBook(id: string): Promise<IBook> {
  const book: IBook = await fetch(`${api.url}/${id}`)
    .then(response => response.json())
    .then(book => book);

  return book;
}

export async function fetchBooks(book: string, page: number): Promise<IRequest> {
  const query = `${api.url}?q=${book}/${page || 1}&maxResults=${api.options.limit}&orderBy=relevance`;
  let status: number = 200;
  const books: IBooks = await fetch(query)
    .then(response => {
      status = response.status;
      return response.json();
    })
    .catch(e => status = e.code);

  return { books, status };
};
