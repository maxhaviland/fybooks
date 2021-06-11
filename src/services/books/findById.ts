import { HttpResponseCodes } from "../../declarations/enums";
import { Book, HttpResponse } from "../../declarations/types";
import BookURL from "./url";
import bookAdapter from './adapter';



export async function findById(id: string): Promise<HttpResponse<Book>> {
  const url = new BookURL({ bookId: id }).get();
  
  
  const response = await fetch(url);
  const book = await response.json();

  console.log('no entendo', book)

  return new Promise<HttpResponse<Book>>((resolve) => {
    switch (response.status) {
      case HttpResponseCodes.success:
        resolve({
          status: HttpResponseCodes.success,
          body: bookAdapter(book)
        })
        break;
      case HttpResponseCodes.serviceTemporarilyUnavailable:
      case HttpResponseCodes.notFound:
        resolve({
          status: HttpResponseCodes.notFound,
        })
        break;
      default:
        resolve({
          status: HttpResponseCodes.serviceTemporarilyUnavailable,
        })
    }
  })
}
