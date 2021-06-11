import { useState } from "react";
import Router from 'next/router';


interface UseSearchHook {
  error: string
  execute: (search: string) => void
}


function useSearch (): UseSearchHook  {
  const [error, setError] = useState<string>('')
  const execute = (search : string) => {
    if (!search.trim()) setError('is not empty')

    else {
      Router.push({
        pathname: '/books',
        query: {
          search
        }
      })
    }
  }
  return {
    error, execute
  }
}

export default useSearch;
