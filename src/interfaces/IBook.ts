import IVolumeInfo from './IVolumeInfo';
import IAccessInfo from './IAccessInfo';

interface IBook {
  saleInfo: { isEbook: boolean };
  accessInfo: IAccessInfo;
  volumeInfo: IVolumeInfo;
  id: string;
}

export default IBook;