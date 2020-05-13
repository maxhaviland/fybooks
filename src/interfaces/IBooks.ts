import IBook from './IBook';

interface IBooks {
  kind: string;
  totalItems: number;
  items: IBook[];
}

export default IBooks;