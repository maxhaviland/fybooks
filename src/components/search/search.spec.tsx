/**
 * @jest-environment jsdom
 */

import { screen, render, fireEvent } from "@testing-library/react";
import Search from './index';
import { Input } from '../';

it('should be render without errors', () => {
  expect(render(<Search />)).toMatchSnapshot()
})

it('should be "Disney" value with no entry', async () => {
  render(
    <>
      <Search>
        <Input />
      </Search>
    </> 
  )

  fireEvent.change(await screen.findByTestId('input'), {
    target: { value: 'Disney' },
  });

  expect((await screen.findByTestId('input')).nodeValue).toBe(/Disney/i)
})
