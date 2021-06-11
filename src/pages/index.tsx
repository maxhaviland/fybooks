import { EventHandler, FormEvent, useContext, useRef } from 'react';
import { Input, Search } from '../components';
import useSearch from '../hooks/useSearch';

function Index() {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { execute, error } = useSearch()

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    execute(searchInputRef.current.value)
  }

  return (
    <>
      <Search onSubmit={submit}>
        <Input ref={searchInputRef} />
        {error}
      </Search>
      fybooks :(
    </>
  )
}

export default Index