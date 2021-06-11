import { CoverOptions } from "../../declarations/types";

function findExistingCover(cover: CoverOptions): string {
  const coverExists = Object.values(cover).find(coverFiltered => coverFiltered);
  return coverExists || '';
}

export default findExistingCover;