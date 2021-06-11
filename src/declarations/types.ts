export type HttpResponse<T = {}> = {
  status: number
  body?: T
  error?: any
}

export type LinkOptions = {
  pdf: string 
  epub: string
  web: string
  preview: string
  info: string
  volume: string
}

export type CoverOptions = {
  extraLarge: string
  large: string 
  medium: string 
  small: string 
  thumbnail: string 
  smallThumbnail: string
}

export type BuyOptions = {
  price: number 
  link: string
  currency: string
}

export type Book = {
  id: string
  title: string
  description: string
  authors: string[]
  cover: CoverOptions
  publisher: string
  publisherDate: string
  pages: number 
  categories: string[]
  link: LinkOptions
  buy: BuyOptions
}