import { NextApiRequest, NextApiResponse } from "next";
import { HttpRequestMethods, HttpResponseCodes } from "../../../declarations/enums";
import bookService from "../../../services/books";

export default async ({ method, query }: NextApiRequest, response: NextApiResponse) => {
  const id = query.id.toString();
  switch (method) {
    case HttpRequestMethods.get:
      const { status, body } = await bookService.find.one(id);
      status === HttpResponseCodes.success ? response.send(body) : response.status(status).end()
      break;

    default:
      response.status(HttpResponseCodes.notFound).end()
      break;
  }
}