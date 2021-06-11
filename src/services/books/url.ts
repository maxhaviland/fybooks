interface BookURLConstructor {
  search?: string 
  orderBy?: string 
  limit?: number
  bookId?: string
}

class BookURL {
  private url: string;
  constructor({ search = '', orderBy = 'relevance', limit = 10, bookId}: BookURLConstructor) {
    const url = new URL('https://www.googleapis.com/books/v1/volumes')
    const params = new URLSearchParams({
      q: search,
      orderBy,
      limit: limit.toString()
    })

    if (!bookId) {
      url.search = params.toString()
      this.url = url.href
    } else {
      this.url = url.href + '/' + bookId
    }
  }

  public get = () => this.url;
}

export default BookURL
