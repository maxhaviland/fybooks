import useSWR from 'swr'
import Router, { useRouter } from 'next/router'
import React, { useRef } from 'react';
import { Search } from '../components';
import Cover from '../components/cover';
import { Book } from '../declarations/types';
import findExistingCover from '../services/books/findExistsCover';
import bookService from '../services/books';

const fetcher = (url: string) => fetch(url).then(response => response.json())

function Books() {
  const router = useRouter();
  const searchInputRef = useRef(null)

  const params: any = {
    search: searchInputRef.current?.value || router.query.search,
    limit: 8,
  }

  const searchParams: string = new URLSearchParams(params).toString()

  const url = 'api/books?' + searchParams;

  const { data, error } = useSWR(url, fetcher)

  const coverBookList = (book: Book) => <Cover key={book.id} image={bookService.find.cover(book.cover)} title={book.title} height={340} width={232}/>
  

  if (error) return <div>failure</div>
  if (!data) return <div>loading...</div>

  return (
    <>
      <Search />
      your search is: {router.query.search}

      <br />
      {data.books.map(coverBookList)}
    </>
  )
}

export default Books