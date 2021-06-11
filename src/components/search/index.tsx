import { FormEvent, MutableRefObject, useRef } from 'react';
import StyledComponent from 'styled-components';
import { Input } from '..';
import useSearch from '../../hooks/useSearch';

const Form = StyledComponent.form.attrs({
  'data-testid': 'form'
})``;

const Search = () => {
  const { execute, error } = useSearch()
  const inputReference = useRef<HTMLInputElement>({
      current: {
        value: ''
      }
    } as unknown as HTMLInputElement);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    execute(inputReference.current.value)
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input ref={inputReference} />
        {error}
      </Form>
    </>
  )
}

export default Search;
