import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Cell } from 'components/app/cell/Cell';
import * as faker from 'faker';

it('passes id to click event callback', () => {
  const callbackMock = jest.fn();
  const id = faker.datatype.number();

  render(<Cell id={id} onClick={callbackMock} />);
  userEvent.click(screen.getByText(`${id}`));

  expect(callbackMock).toBeCalledWith(id);
});
