

export function getParams(location: string): { book: string; page: number } {
  const regex = /(\?[\w]+=)|(\?[\w])/g;
  const locationToArray = location.replace(regex, '').split('&');
  
  return {
    book: locationToArray[0].replace(/%20/g, ' '),
    page: Number(locationToArray[1])
  }
};
