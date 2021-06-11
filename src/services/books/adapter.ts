import { Book } from "../../declarations/types";

function bookAdapter(items: any): Book {
  const { id, volumeInfo, saleInfo, accessInfo } = items;

  const book: Book = {
    id,
    authors: volumeInfo?.authors,
    title: volumeInfo?.title,
    description: volumeInfo?.description,
    publisher: volumeInfo?.publisher,
    publisherDate: volumeInfo?.publisherDate,
    pages: volumeInfo?.pageCount,
    categories: volumeInfo?.categories,
    cover: {
      smallThumbnail: volumeInfo?.imageLinks?.smallThumbnail || '',
      thumbnail: volumeInfo?.imageLinks?.thumbnail || '',
      small: volumeInfo?.imageLinks?.small || '',
      medium: volumeInfo?.imageLinks?.medium || '',
      large: volumeInfo?.imageLinks?.large || '',
      extraLarge: volumeInfo?.imageLinks?.extraLarge || '',
    },
    link: {
      preview: volumeInfo?.previewLink,
      info: volumeInfo?.infoLink,
      volume: volumeInfo?.volumeLink,
      epub: accessInfo?.epub.acsTokenLink,
      pdf: accessInfo?.pdf.acsTokenLink,
      web: accessInfo?.webReaderLink,
    },
    buy: {
      price: saleInfo.listPrice?.amount,
      currency: saleInfo.listPrice?.currencyCode,
      link: saleInfo?.buyLink,
    }
  }
    
  return book
}

export default bookAdapter;
