interface IVolumeInfo {
  authors: string[];
  canonicalVolumeLink: string;
  imageLinks: {
    smallThumbnail: string;
    thumbnail: string
  };
  language: string;
  pageCount: number;
  previewLink: string;
  printType: string;
  publishDate: string;
  publisher: string;
  description: string;
  title: string;
}

export default IVolumeInfo;