/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import Input from './index';

it('should be render without errors', () => {
  expect(render(<Input />)).toMatchSnapshot()
})