import { NextApiRequest, NextApiResponse } from "next";
import { HttpRequestMethods, HttpResponseCodes } from "../../../declarations/enums";
import bookService from "../../../services/books";

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const { method, query:{ search, limit } } = request;

  switch (method) {
    case HttpRequestMethods.get:
      const { status, body } = await bookService.find.all({
        limit: limit && +limit,
        search: search && search.toString(),
      });

      status === HttpResponseCodes.success ? response.send(body) : response.status(status).end()
      break;

    default:
      response.status(HttpResponseCodes.notFound).end()
      break;
  }
}