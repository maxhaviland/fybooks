import { Book, CoverOptions, HttpResponse } from "../../declarations/types";
import { findAll, ShowAllDTO, FindAllResponse } from "./findAll";
import { findById } from "./findById";
import findExistingCover from "./findExistsCover";

interface BookService {
  find: {
    all: ({ search, limit }: ShowAllDTO) => Promise<HttpResponse<FindAllResponse>>
    one: (id: string) => Promise<HttpResponse<Book>>
    cover: (covers: CoverOptions) => string
  }
}

const bookService: BookService = {
  find: {
    all: async ({ search, limit }: ShowAllDTO) => await findAll({ search, limit }),
    one: async (id: string) => await findById(id),
    cover: (covers: CoverOptions) => findExistingCover(covers)
  }
}

export default bookService