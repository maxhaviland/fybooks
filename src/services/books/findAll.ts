import { HttpResponseCodes } from "../../declarations/enums";
import { Book, HttpResponse } from "../../declarations/types";
import BookURL from "./url";
import bookAdapter from './adapter';

export interface ShowAllDTO {
  search: string 
  limit: number
}

export interface FindAllResponse {
  results?: number 
  books?: Book[]
  error?: string
}

export async function findAll({search, limit}: ShowAllDTO): Promise<HttpResponse<FindAllResponse>> {
  const url = new BookURL({
    search,
    limit,
  }).get()

  const response = await fetch(url);
  const books = await response.json();

  return new Promise<HttpResponse<FindAllResponse>>((resolve) => {
    switch (response.status) {
      case HttpResponseCodes.success:
        if (books.totalItems) {
          resolve({
            status: HttpResponseCodes.success,
            body: {
              results: books.totalItems,
              books: books.items.map(bookAdapter),
            },
          })
        } else {
          resolve({
            status: HttpResponseCodes.notFound,
          })
        }
        break;
      case HttpResponseCodes.notFound:
        resolve({
          status: HttpResponseCodes.notFound
        })
    
      default:
        resolve({
          status: HttpResponseCodes.serviceTemporarilyUnavailable,
        })
    }
  })
}
